import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { supabase } from "../lib/supabase";
import successSound from "../assets/success chime.mp3";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CheckIn() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

async function handleLogout() {
  await supabase.auth.signOut();
  navigate("/admin-login");
}

  async function handleScan(results) {
    if (!results || results.length === 0) return;

    const attendeeId = results[0].rawValue;

    let { data, error } = await supabase
  .from("registrations")
  .select("*")
  .eq("attendee_id", attendeeId)
  .maybeSingle();

let table = "registrations";

if (!data) {
  const prayerResult = await supabase
    .from("prayer_requests")
    .select("*")
    .eq("attendee_id", attendeeId)
    .maybeSingle();

  data = prayerResult.data;
  error = prayerResult.error;
  table = "prayer_requests";
}
     if (data && data.checked_in) {
  const name = data.first_name
    ? `${data.first_name} ${data.last_name}`
    : data.full_name;

  setMessage(`⚠️ ${name} has already checked in.`);
  return;
}
new Audio(successSound).play();

    if (error || !data) {
      setMessage("❌ Attendee not found");
      return;
    }

   const { data: updatedData, error: updateError } = await supabase
  .from(table)
  .update({ checked_in: true })
  .eq("attendee_id", attendeeId)
  .select();

console.log("TABLE:", table);
console.log("ATTENDEE:", attendeeId);
console.log("UPDATED DATA:", updatedData);
console.log("UPDATE ERROR:", updateError);

    if (updateError) {
      setMessage("❌ Could not check in attendee");
      return;
    }

    const name = data.first_name
  ? `${data.first_name} ${data.last_name}`
  : data.full_name;

setMessage(`✅ ${name} has been checked in!`);
  }

  return (
    <section className="min-h-screen bg-black text-white p-8">

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  <h1 className="text-2xl md:text-4xl font-black text-red-500">
    QR Check-In
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

      <div className="max-w-md mx-auto">
        <Scanner
          onScan={handleScan}
          onError={(err) => {
  console.error(err);
  alert(JSON.stringify(err));
}}
        />
      </div>

      <p className="mt-8 text-center text-2xl font-bold">
        {message}
      </p>

    </section>
  );
}

export default CheckIn;