import { useLocation } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { toPng } from "html-to-image";

function Success() {
  const location = useLocation();

  const attendeeId = location.state?.attendeeId || "Unknown";
  const firstName = location.state?.firstName || "";
  const qrRef = useRef(null);

const downloadQR = async () => {
  if (!qrRef.current) return;

  const dataUrl = await toPng(qrRef.current);

  const link = document.createElement("a");

  link.download = `${attendeeId}.png`;

  link.href = dataUrl;

  link.click();
};

  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white flex items-center justify-center">

      <div className="max-w-xl text-center rounded-3xl border border-red-900 bg-red-950/20 p-10">

        <div className="text-6xl">
          🎉
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-3xl md:text-5xl">
          Registration Successful
        </h1>

        <p className="mt-5 text-gray-300">
          Thank you {firstName} for registering for The Outpouring 2026.
        </p>

        <div className="mt-10 rounded-2xl bg-black/40 p-6">

          <p className="text-sm uppercase tracking-widest text-red-400">
            Your Attendee ID
          </p>

          <h2 className="mt-3 text-3xl font-black text-red-500">
            {attendeeId}
          </h2>

        </div>

        <div
  ref={qrRef}
  className="mt-10 rounded-2xl bg-white p-8 text-center"
>
          <QRCodeSVG
  value={attendeeId}
  size={180}
/>

<p className="mt-5 text-black text-xl font-bold">
  THE OUTPOURING 2026
</p>

<p className="text-gray-700">
  {firstName}
</p>

<p className="mt-2 text-red-600 font-bold">
  {attendeeId}
</p>
        </div>

        <button
          onClick={downloadQR}
          className="mt-8 rounded-full bg-red-600 px-8 py-4 font-bold hover:bg-red-500"
        >
          Download My QR
        </button>

      </div>

    </section>
  );
}

export default Success;