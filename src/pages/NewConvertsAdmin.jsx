import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function NewConvertsAdmin() {

  const [converts, setConverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("pending");

  const pendingConverts = converts.filter(
    (person) => person.approved !== true
  );

  const approvedConverts = converts.filter(
    (person) => person.approved === true
  );

  useEffect(() => {
    fetchConverts();
  }, []);

  async function fetchConverts() {
    setLoading(true);

    const { data, error } = await supabase
      .from("new_converts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setConverts(data || []);
    }

    setLoading(false);
  }
 async function approveConvert(id){

  const { data, error } = await supabase
    .from("new_converts")
    .update({
      approved: true,
    })
    .eq("id", id)
    .select();


  console.log("UPDATE DATA:", data);
  console.log("UPDATE ERROR:", error);


  if(error){
    alert(error.message);
    return;
  }

  alert("Approved successfully ✅");

  fetchConverts();

}

  return (
    <div className="min-h-screen bg-[#0f0f18] text-white p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          New Converts
        </h1>
        <div className="mb-8 flex gap-3">

  <button
    onClick={() => setActiveTab("pending")}
    className={`rounded-full px-6 py-3 font-bold ${
      activeTab === "pending"
        ? "bg-yellow-500 text-black"
        : "bg-white/10"
    }`}
  >
    Pending ({pendingConverts.length})
  </button>


  <button
    onClick={() => setActiveTab("approved")}
    className={`rounded-full px-6 py-3 font-bold ${
      activeTab === "approved"
        ? "bg-green-600"
        : "bg-white/10"
    }`}
  >
    Approved ({approvedConverts.length})
  </button>

</div>

        {loading ? (
          <p>Loading...</p>
        ) : pendingConverts.length === 0 && approvedConverts.length === 0 ? (
          <div className="rounded-3xl bg-white/5 p-10 text-center">
            No new converts yet.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">

            {(activeTab === "pending"
  ? pendingConverts
  : approvedConverts
).map((person) => (
              <div
                key={person.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-2xl font-bold">
                  {person.first_name} {person.last_name}
                </h2>
{!person.approved && (
<button
onClick={() => approveConvert(person.id)}
className="rounded-full bg-green-600 px-5 py-2 font-bold"
>
Approve
</button>
)}
                <div className="mt-4 space-y-2 text-white/80">

                  <p>
                    📱 {person.whatsapp || "Not provided"}
                  </p>

                  <p>
                    📧 {person.email || "No email"}
                  </p>

                  <p>
                    🏙️ {person.city}
                  </p>

                  <p>
                    👤 {person.gender}
                  </p>

                  <p>
                     {person.age_range}
                  </p>

                  <p>
                    ❤️ {person.decision}
                  </p>

                  <p>
                    📅 {new Date(
                      person.created_at
                    ).toLocaleDateString()}
                  </p>

                  <div className="mt-4">
                    {person.followed_up ? (
                      <span className="rounded-full bg-green-600 px-4 py-2 text-sm">
                        Followed Up
                      </span>
                    ) : (
                      <span className="rounded-full bg-yellow-600 px-4 py-2 text-sm">
                        Pending
                      </span>
                    )}
                  </div>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

export default NewConvertsAdmin;