function Success() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white flex items-center justify-center">

      <div className="max-w-xl text-center rounded-3xl border border-red-900 bg-red-950/20 p-10">

        <div className="text-6xl">
          🎉
        </div>


        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Registration Successful
        </h1>


        <p className="mt-5 text-gray-300">
          Thank you for registering for The Outpouring 2026.
          We can't wait to welcome you.
        </p>


        <div className="mt-10 rounded-2xl bg-black/40 p-6">

          <p className="text-sm uppercase tracking-widest text-red-400">
            Your Attendee ID
          </p>


          <h2 className="mt-3 text-3xl font-black">
            TSN-2026-0001
          </h2>

        </div>


        <p className="mt-8 text-sm text-gray-400">
          Your QR ticket will appear here after confirmation.
        </p>


      </div>

    </section>
  );
}

export default Success;