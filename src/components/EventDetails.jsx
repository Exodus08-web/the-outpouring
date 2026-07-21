import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";

function EventDetails() {
  const details = [
    {
      title: "Date",
      value: "July 30th, 2026",
    },
    {
      title: "Time",
      value: "7:00 PM",
    },
    {
      title: "Venue",
      value: "Chapel Hall, University of Ibadan",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white">

      {/* Red glow */}
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-red-700/20 blur-3xl"></div>


      <div className="relative z-10 mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.4em] text-red-500">
          Event Information
        </p>


        <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
          Be Part Of The Outpouring
        </h2>


        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
          Prepare your heart for a powerful gathering of worship,
          encounters and transformation.
          Join us at The Outpouring 2026.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {details.map((item) => (
            <div
              key={item.title}
              className="
              rounded-3xl
              border
              border-red-900
              bg-red-950/20
              p-8
              backdrop-blur-sm
              transition
              duration-300
              hover:border-red-500
              "
            >

              <p className="text-sm uppercase tracking-widest text-red-400">
                {item.title}
              </p>


              <h3 className="mt-4 text-xl font-bold leading-relaxed md:text-2xl">
                {item.value}
              </h3>

            </div>
          ))}

        </div>


        {/* Connect With Us */}
<div
  className="
    mt-12
    rounded-3xl
    border
    border-red-900/40
    bg-gradient-to-r
    from-red-950/30
    via-black
    to-yellow-900/20
    p-8
    backdrop-blur-md
  "
>

  <h3 className="text-center text-2xl font-black">
    Stay Connected
  </h3>


  <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5">

    <a
      href="https://www.facebook.com/share/1Brj8sr1hy/?mibextid=wwXIfr
"
      target="_blank"
      rel="noreferrer"
      className="
flex
h-12
w-12
sm:h-16
sm:w-16
items-center
justify-center
rounded-full
bg-white/5
text-xl
sm:text-2xl
text-white
transition-all
duration-300
hover:scale-110
"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.instagram.com/the_sent_network?igsh=MXMwaG50Z3U2NzB5Mg%3D%3D&utm_source=qr"
      target="_blank"
      rel="noreferrer"
      className="
flex
h-12
w-12
sm:h-16
sm:w-16
items-center
justify-center
rounded-full
bg-white/5
text-xl
sm:text-2xl
text-white
transition-all
duration-300
hover:scale-110
"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.tiktok.com/@thesentnetwork01?_r=1&_t=ZS-98CtTyiZH7t
"
      target="_blank"
      rel="noreferrer"
      className="
flex
h-12
w-12
sm:h-16
sm:w-16
items-center
justify-center
rounded-full
bg-white/5
text-xl
sm:text-2xl
text-white
transition-all
duration-300
hover:scale-110
"
    >
      <FaTiktok />
    </a>

    <a
      href="https://t.me/Thesentnetwork"
      target="_blank"
      rel="noreferrer"
      className="
flex
h-12
w-12
sm:h-16
sm:w-16
items-center
justify-center
rounded-full
bg-white/5
text-xl
sm:text-2xl
text-white
transition-all
duration-300
hover:scale-110
"
    >
      <FaTelegramPlane />
    </a>

  </div>

</div>


      </div>

    </section>
  );
}

export default EventDetails;