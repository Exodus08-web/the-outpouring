import { useState, useRef } from "react";
import { supabase } from "../lib/supabase";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";

function RetrieveTicket() {
  const [whatsapp, setWhatsapp] = useState("");
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(false);
  const qrRef = useRef(null);

const downloadQR = async () => {
  if (!qrRef.current) return;

  const dataUrl = await toPng(qrRef.current);

  const link = document.createElement("a");

  link.download = `${person.attendee_id}.png`;

  link.href = dataUrl;

  link.click();
};

  async function handleSearch(e) {
    e.preventDefault();

    setLoading(true);

    // Search General Registration
let { data, error } = await supabase
  .from("registrations")
  .select("*")
  .eq("whatsapp", whatsapp)
  .maybeSingle();

// If not found, search Prayer Line
if (!data) {
  const prayerResult = await supabase
    .from("prayer_requests")
    .select("*")
    .eq("whatsapp", whatsapp)
    .maybeSingle();

  data = prayerResult.data;
  error = prayerResult.error;
}

if (error) {
  setLoading(false);
  alert(error.message);
  return;
}

if (!data) {
  setLoading(false);
  alert("No ticket found.");
  return;
}


    setPerson(data);
    setLoading(false);
  }

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center p-8">

      <div className="w-full max-w-xl">

        <h1 className="text-4xl font-black text-red-500">
          Retrieve My Ticket
        </h1>

        <form
          onSubmit={handleSearch}
          className="mt-8"
        >

          <input
            type="text"
            placeholder="Enter WhatsApp Number"
            value={whatsapp}
            onChange={(e)=>setWhatsapp(e.target.value)}
            className="w-full rounded-xl bg-white/10 p-4"
          />

          <button
            className="mt-5 w-full rounded-full bg-red-600 py-4 font-bold"
          >
            {loading ? "Searching..." : "Retrieve Ticket"}
          </button>

        </form>

        {person && (

          <div
  ref={qrRef}
  className="mt-10 rounded-3xl border border-red-900 bg-red-950/20 p-10 text-center"
>

  <div className="text-5xl">
    🎟
  </div>

  <h2 className="mt-5 text-4xl font-black">
    Ticket Retrieved
  </h2>

  <p className="mt-3 text-gray-300">
    Welcome back,
    <br />
   {person.first_name
  ? `${person.first_name} ${person.last_name}`
  : person.full_name}
  </p>

  <div className="mt-8 rounded-2xl bg-black/40 p-6">

    <p className="uppercase tracking-widest text-red-400 text-sm">
      Attendee ID
    </p>

    <h2 className="mt-3 text-3xl font-black text-red-500">
      {person.attendee_id}
    </h2>

  </div>

  <div
    className="mt-10 rounded-2xl bg-white p-8 inline-block"
  >
    <QRCodeSVG
      value={person.attendee_id}
      size={180}
    />
  </div>
  <button
  onClick={downloadQR}
  className="
    mt-8
    w-full
    rounded-full
    bg-red-600
    py-4
    text-lg
    font-bold
    transition
    hover:bg-red-500
  "
>
  Download My QR
</button>

</div>

        )}

      </div>

    </section>
  );
}

export default RetrieveTicket;