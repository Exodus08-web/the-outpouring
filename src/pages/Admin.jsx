import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Admin() {
  const [registrations, setRegistrations] = useState([]);
const [search, setSearch] = useState("");
const navigate = useNavigate();

async function handleLogout() {
  await supabase.auth.signOut();
  navigate("/admin-login");
}
  useEffect(() => {
    fetchRegistrations();
  }, []);

  async function fetchRegistrations() {
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }

    setRegistrations(data);
  }
  

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 md:p-8">

      <div className="flex items-center justify-between">

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  <h1 className="text-2xl md:text-4xl font-black text-red-500">
    Admin Dashboard
  </h1>

  <div className="flex flex-wrap gap-3">

    <Link
      to="/admin"
      className="rounded-full bg-red-600 px-5 py-2 font-bold"
    >
      General
    </Link>

    <Link
      to="/admin/prayer"
      className="rounded-full bg-purple-600 px-5 py-2 font-bold"
    >
      Prayer Line
    </Link>
<Link
  to="/admin/content"
  className="rounded-full bg-blue-600 px-5 py-2 font-bold"
>
  Website Content
</Link>
    <div className="flex gap-3">

  <Link
    to="/checkin"
    className="rounded-full bg-green-600 px-5 py-2 font-bold"
  >
    Check In
  </Link>


  <Link
    to="/admin/testimonies"
    className="rounded-full bg-amber-600 px-5 py-2 font-bold"
  >
    Testimonies
  </Link>

</div>
<Link
  to="/admin/new-converts"
  className="rounded-full bg-indigo-600 px-5 py-2 font-bold"
>
  New Converts
</Link>
    <button
      onClick={handleLogout}
      className="rounded-full bg-gray-700 px-5 py-2 font-bold"
    >
      Logout
    </button>

  </div>

</div>

</div>
      <input
  type="text"
  placeholder="Search by name or WhatsApp..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="
    mt-10
    w-full
    rounded-xl
    bg-white/10
    p-4
    outline-none
    placeholder:text-gray-500
  "
/>

    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

  <div className="rounded-2xl bg-red-600 p-6 shadow-xl">
    <h3 className="text-sm uppercase tracking-widest">
      Total
    </h3>

    <p className="mt-3 text-5xl font-black">
      {registrations.length}
    </p>
  </div>

  <div className="rounded-2xl bg-white/10 p-6">
    <h3 className="text-sm uppercase">
      First Timers
    </h3>

    <p className="mt-3 text-5xl font-black">
      {
        registrations.filter(person => person.first_time).length
      }
    </p>
  </div>

  <div className="rounded-2xl bg-white/10 p-6">
    <h3 className="text-sm uppercase">
      Checked In
    </h3>

    <p className="mt-3 text-5xl font-black">
      {
        registrations.filter(person => person.checked_in).length
      }
    </p>
  </div>

  <div className="rounded-2xl bg-white/10 p-6">
    <h3 className="text-sm uppercase">
      Returning
    </h3>

    <p className="mt-3 text-5xl font-black">
      {
        registrations.filter(person => !person.first_time).length
      }
    </p>
  </div>
  <div
  onClick={() => navigate("/admin/new-converts")}
  className="cursor-pointer rounded-2xl bg-indigo-600 p-6 shadow-xl hover:bg-indigo-500 transition"
>
  <h3 className="text-sm uppercase tracking-widest">
    New Converts
  </h3>

  <p className="mt-3 text-lg font-bold">
    Open Manager →
  </p>
</div>

</div>

      <div className="mt-10 overflow-x-auto">

        <table className="w-full border border-white/20">

          <thead className="bg-red-600">

            <tr>
<th className="p-3">Attendee ID</th>

              <th className="p-3">First Name</th>

              <th className="p-3">Last Name</th>

              <th className="p-3">City</th>

              <th className="p-3">WhatsApp</th>

              <th className="p-3">Gender</th>

              <th className="p-3">First Time</th>

               <th className="p-3">Checked In</th>

            </tr>

          </thead>

          <tbody>

            {registrations
  .filter((person) =>

    (person.first_name || "")
  .toLowerCase()
  .includes(search.toLowerCase())

    ||

    (person.last_name || "")
  .toLowerCase()
  .includes(search.toLowerCase())

    ||

    person.whatsapp.includes(search)

  )
  .map((person) => (

              <tr
              key={person.whatsapp}
                className="border-t border-white/20 text-center"
              >
<td className="p-3 font-bold text-red-400">
  {person.attendee_id}
</td>
                <td className="p-3">{person.first_name}</td>

                <td className="p-3">{person.last_name}</td>

                <td className="p-3">{person.city}</td>

                <td className="p-3">{person.whatsapp}</td>

                <td className="p-3">{person.gender}</td>

                <td className="p-3">
                  {person.first_time ? "Yes" : "No"}
                </td>
                <td className="p-3">
  {person.checked_in ? (
    <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-bold">
       Checked In
    </span>
  ) : (
    <span className="rounded-full bg-yellow-600 px-3 py-1 text-sm font-bold">
      Not Checked In
    </span>
  )}
</td>

              </tr>

            ))}
            

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Admin;