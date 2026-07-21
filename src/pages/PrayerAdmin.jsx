import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function PrayerAdmin() {

  const [requests, setRequests] = useState([]);
const navigate = useNavigate();

async function handleLogout() {
  await supabase.auth.signOut();
  navigate("/admin-login");
}
  useEffect(() => {

    fetchRequests();

  }, []);

  async function fetchRequests() {

    const { data, error } = await supabase
      .from("prayer_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {

      console.log(error);

      return;

    }

    setRequests(data);

  }

  return (

    <div className="min-h-screen bg-black text-white p-8">

      <div className="flex items-center justify-between">

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  <h1 className="text-2xl md:text-4xl font-black text-red-500">
    Prayer line Dashboard
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
      to="/checkin"
      className="rounded-full bg-green-600 px-5 py-2 font-bold"
    >
      Check-In
    </Link>

    <button
      onClick={handleLogout}
      className="rounded-full bg-gray-700 px-5 py-2 font-bold"
    >
      Logout
    </button>

  </div>

</div>

  <button
    onClick={handleLogout}
    className="rounded-full bg-red-600 px-5 py-2 font-bold hover:bg-red-500"
  >
    Logout
  </button>

</div>

      <div className="mt-10 overflow-x-auto">

        <table className="w-full border border-white/20">

          <thead className="bg-red-600">
  <tr>
    <th className="p-3">Name</th>
    <th className="p-3">Age</th>
    <th className="p-3">Gender</th>
    <th className="p-3">City</th>
    <th className="p-3">Illness</th>
    <th className="p-3">Duration</th>
    <th className="p-3">WhatsApp</th>
    <th className="p-3">Hospital Record</th>
    <th className="p-3">Status</th>
    <th className="p-3">Check-In</th>
  </tr>
</thead>

          <tbody>

            {requests.map((person)=>(

              <tr
  key={person.id}
  className="border-t border-white/20 text-center"
>
  <td className="p-3">{person.full_name}</td>

  <td className="p-3">{person.age}</td>

  <td className="p-3">{person.gender}</td>

  <td className="p-3">{person.city}</td>

  <td className="p-3">{person.illness}</td>

  <td className="p-3">{person.duration}</td>

  <td className="p-3">{person.whatsapp}</td>

  <td className="p-3">
    {person.image_url ? (
      <>
        <a
          href={person.image_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline"
        >
          View
        </a>

        {" | "}

        <a
          href={person.image_url}
          download
          className="text-green-400 underline"
        >
          Download
        </a>
      </>
    ) : (
      <span className="text-gray-500">No File</span>
    )}
  </td>

  <td className="p-3">{person.status}</td>

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

export default PrayerAdmin;