import heroImage from "../assets/images/hero/hero-main.jpg";
import logo from "../assets/logos/tsnlogo.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <img
        src={heroImage}
        alt="The Outpouring"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Red + Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-950/60 to-black"></div>


      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">

        <img
          src={logo}
          alt="TSN Logo"
          className="mb-8 h-20 w-auto"
        />

        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-400">
          The Sent Network Presents
        </p>


        <h1 className="text-5xl font-black leading-tight md:text-7xl">
          THE
          <br />
          OUTPOURING
        </h1>


        <p className="mt-6 max-w-md text-lg text-gray-200">
          A generation hungry for God's presence,
          purpose and transformation.
        </p>


        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
  to="/register"
  className="
  mt-10
  rounded-xl
  bg-yellow-500
  px-8
  py-4
  text-lg
  font-bold
  text-black
  transition
  hover:scale-105
  hover:bg-yellow-400
  "
>
  Register Now
</Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;