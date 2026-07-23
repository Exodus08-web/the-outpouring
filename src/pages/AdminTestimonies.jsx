import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link, useNavigate } from "react-router-dom";

function AdminTestimonies() {
  const navigate = useNavigate();

  const [testimonies, setTestimonies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [activeTab, setActiveTab] = useState("pending");

  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    title: "",
    name: "",
    testimony: "",
  });

  useEffect(() => {
    fetchTestimonies();
  }, []);

  async function fetchTestimonies() {
    setLoading(true);

    const { data, error } = await supabase
      .from("testimonies")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setTestimonies(data);
    setLoading(false);
  }

  async function approveTestimony(id) {
    const { error } = await supabase
      .from("testimonies")
      .update({
        approved: true,
      })
      .eq("id", id);

    if (!error) {
      fetchTestimonies();
    }
  }

  async function deleteTestimony(id) {
    const yes = window.confirm(
      "Delete this testimony?"
    );

    if (!yes) return;

    const { error } = await supabase
      .from("testimonies")
      .delete()
      .eq("id", id);

    if (!error) {
      fetchTestimonies();
    }
  }
  async function addTestimony() {

  if (
    !form.title ||
    !form.name ||
    !form.testimony
  ) {
    alert("Please complete all fields.");
    return;
  }

  const { error } = await supabase
    .from("testimonies")
    .insert({
      title: form.title,
      name: form.name,
      testimony: form.testimony,
      approved: true,
    });

  if (error) {
    alert(error.message);
    return;
  }

  setForm({
    title: "",
    name: "",
    testimony: "",
  });

  fetchTestimonies();

  setActiveTab("published");
}
  async function saveEdit(){

const { error } = await supabase

.from("testimonies")

.update({

title:editing.title,

name:editing.name,

testimony:editing.testimony,

})

.eq("id",editing.id);

if(error){

alert(error.message);

return;

}

setEditing(null);

fetchTestimonies();

}

  async function logout() {
    await supabase.auth.signOut();

    navigate("/admin-login");
  }

  const filtered = testimonies.filter((item) => {
    const matchesSearch =
      item.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      item.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    if (activeTab === "pending") {
      return !item.approved && matchesSearch;
    }

    if (activeTab === "published") {
      return item.approved && matchesSearch;
    }

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white p-5 md:p-8">

      <div className="flex flex-wrap items-center justify-between gap-4">

        <h1 className="text-3xl font-black text-[#d4af37]">
          Testimonies
        </h1>

        <div className="flex flex-wrap gap-3">

          <Link
            to="/admin"
            className="rounded-full bg-red-600 px-5 py-2 font-bold"
          >
            Dashboard
          </Link>

          <button
            onClick={logout}
            className="rounded-full bg-gray-700 px-5 py-2"
          >
            Logout
          </button>

        </div>

      </div>

      <input
        className="mt-8 w-full rounded-xl bg-white/10 p-4 outline-none"
        placeholder="Search testimony..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="mt-8 flex gap-3">

        <button
          onClick={() =>
            setActiveTab("pending")
          }
          className={`rounded-full px-6 py-3 font-bold transition

          ${
            activeTab === "pending"
              ? "bg-yellow-500 text-black"
              : "bg-white/10"
          }
          `}
        >
          Pending (
          {
            testimonies.filter(
              (x) => !x.approved
            ).length
          }
          )
        </button>

        <button
          onClick={() =>
            setActiveTab("published")
          }
          className={`rounded-full px-6 py-3 font-bold transition

          ${
            activeTab === "published"
              ? "bg-green-600"
              : "bg-white/10"
          }

          `}
        >
          Published (
          {
            testimonies.filter(
              (x) => x.approved
            ).length
          }
          )
        </button>

        <button
          onClick={() =>
            setActiveTab("add")
          }
          className={`rounded-full px-6 py-3 font-bold transition

          ${
            activeTab === "add"
              ? "bg-[#d4af37] text-black"
              : "bg-white/10"
          }

          `}
        >
          Add New
        </button>

      </div>

      {loading ? (

        <p className="mt-12">
          Loading...
        </p>

      ) : activeTab !== "add" ? (

        <div className="mt-10 grid gap-5">

          {filtered.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >

              <h2 className="font-serif text-2xl text-[#e5c158]">
                {item.title}
              </h2>

              <p className="mt-2 text-white/70">
                {item.name}
              </p>

              <p className="mt-6 line-clamp-4 whitespace-pre-line text-white/70">
                {item.testimony}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {!item.approved && (

                  <button
                    onClick={() =>
                      approveTestimony(item.id)
                    }
                    className="rounded-full bg-green-600 px-5 py-2 font-bold"
                  >
                    Approve
                  </button>

                )}

                <button
                  onClick={() =>
                    setEditing(item)
                  }
                  className="rounded-full bg-blue-600 px-5 py-2"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteTestimony(item.id)
                  }
                  className="rounded-full bg-red-600 px-5 py-2"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="mb-8 text-3xl font-black text-[#d4af37]">
Add Testimony
</h2>

<input
className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none"
placeholder="Title"
value={form.title}
onChange={(e)=>
setForm({
...form,
title:e.target.value,
})
}
/>

<input
className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none"
placeholder="Name"
value={form.name}
onChange={(e)=>
setForm({
...form,
name:e.target.value,
})
}
/>

<textarea
rows={10}
className="w-full rounded-xl bg-white/10 p-4 outline-none"
placeholder="Write testimony..."
value={form.testimony}
onChange={(e)=>
setForm({
...form,
testimony:e.target.value,
})
}
/>

<button
onClick={addTestimony}
className="
mt-8
rounded-full
bg-[#d4af37]
px-8
py-4
font-bold
text-black
"
>
Publish Testimony
</button>

        </div>

      )}
      {editing && (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">

<div className="w-full max-w-2xl rounded-3xl bg-[#141414] p-8">

<h2 className="mb-8 text-3xl font-black text-[#d4af37]">

Edit Testimony

</h2>

<input
className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none"
value={editing.title}
onChange={(e)=>
setEditing({
...editing,
title:e.target.value
})
}
/>

<input
className="mb-4 w-full rounded-xl bg-white/10 p-4 outline-none"
value={editing.name}
onChange={(e)=>
setEditing({
...editing,
name:e.target.value
})
}
/>

<textarea
rows={10}
className="w-full rounded-xl bg-white/10 p-4 outline-none"
value={editing.testimony}
onChange={(e)=>
setEditing({
...editing,
testimony:e.target.value
})
}
/>

<div className="mt-8 flex gap-4">

<button
onClick={saveEdit}
className="rounded-full bg-green-600 px-8 py-3 font-bold"
>

Save

</button>

<button
onClick={()=>setEditing(null)}
className="rounded-full bg-gray-700 px-8 py-3"
>

Cancel

</button>

</div>

</div>

</div>

)}

    </div>
  );
}

export default AdminTestimonies;