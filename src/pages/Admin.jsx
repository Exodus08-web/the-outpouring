import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Admin() {
  const [registrations, setRegistrations] = useState([]);

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
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-black text-red-500">
        Admin Dashboard
      </h1>

      <p className="mt-2 text-gray-400">
        Total Registrations: {registrations.length}
      </p>

      <div className="mt-10 overflow-x-auto">

        <table className="w-full border border-white/20">

          <thead className="bg-red-600">

            <tr>

              <th className="p-3">First Name</th>

              <th className="p-3">Last Name</th>

              <th className="p-3">City</th>

              <th className="p-3">WhatsApp</th>

              <th className="p-3">Gender</th>

              <th className="p-3">First Time</th>

            </tr>

          </thead>

          <tbody>

            {registrations.map((person) => (

              <tr
                key={person.id}
                className="border-t border-white/20 text-center"
              >

                <td className="p-3">{person.first_name}</td>

                <td className="p-3">{person.last_name}</td>

                <td className="p-3">{person.city}</td>

                <td className="p-3">{person.whatsapp}</td>

                <td className="p-3">{person.gender}</td>

                <td className="p-3">
                  {person.first_time ? "Yes" : "No"}
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