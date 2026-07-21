import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

        <p className="text-sm uppercase tracking-[0.4em] text-red-500">
          Registration
        </p>


        <h1 className="mt-5 text-4xl font-black md:text-6xl">
          Join The Outpouring
        </h1>


        <p className="mt-6 max-w-xl text-gray-300">
          Choose the registration option that applies to you.
          We can't wait to welcome you.
        </p>


        <div className="mt-12 grid w-full gap-8 md:grid-cols-2">


          {/* General Registration */}

          <div className="rounded-3xl border border-red-900 bg-red-950/20 p-8 text-left">

            <h2 className="text-3xl font-black">
              General Registration
            </h2>

            <p className="mt-4 text-gray-300">
              Register your attendance for The Outpouring 2026.
            </p>


            <Link
              to="/register/general"
              className="
              mt-8
              inline-block
              rounded-full
              bg-red-600
              px-8
              py-3
              font-bold
              transition
              hover:bg-red-500
              "
            >
              Register Now
            </Link>

          </div>



          {/* Healing Registration */}

          <div className="rounded-3xl border border-red-900 bg-red-950/20 p-8 text-left">

            <h2 className="text-3xl font-black">
              Healing & Prayer Line
            </h2>


            <p className="mt-4 text-gray-300">
              Submit your prayer request and join the healing line.
            </p>


            <Link
              to="/register/healing"
              className="
              mt-8
              inline-block
              rounded-full
              bg-red-600
              px-8
              py-3
              font-bold
              transition
              hover:bg-red-500
              "
            >
              Continue
            </Link>

          </div>
<Link
  to="/retrieve-ticket"
  className="
    mt-6
    inline-block
    rounded-full
    border
    border-red-600
    px-8
    py-4
    font-bold
    text-red-500
    transition
    hover:bg-red-600
    hover:text-white
  "
>
  🎟 Lost Your Ticket?
</Link>

        </div>

      </div>

    </section>
  );
}

export default Register;