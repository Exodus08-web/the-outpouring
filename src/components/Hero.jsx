import { useEffect, useRef, useState } from "react";
import heroImage from "../assets/images/hero/hero-main.jpg";
import logo from "../assets/logos/tsnlogo.png";
import { Link } from "react-router-dom";

/**
 * THE OUTPOURING — Hero
 * Direction: presence descending, not tech-gradient glow.
 * A shaft of warm light "pours" down behind the logo, embers drift
 * upward through it, and the headline reveals word-by-word as if
 * being spoken into being. Everything else stays still and dark.
 */

const EMBER_COUNT = 22;

function useEmbers(count) {
  const [embers] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: 30 + Math.random() * 40, // wide enough for mobile glow line + desktop shaft
      size: 2 + Math.random() * 4,
      duration: 7 + Math.random() * 6,
      delay: Math.random() * 10,
      drift: (Math.random() - 0.5) * 60,
      opacity: 0.35 + Math.random() * 0.5,
    }))
  );
  return embers;
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [stickyButton, setStickyButton] = useState(false);
  const sectionRef = useRef(null);
  const embers = useEmbers(EMBER_COUNT);

  useEffect(() => {

  const t = requestAnimationFrame(() => {

    setLoaded(true);

  });

  return () => cancelAnimationFrame(t);

}, []);
useEffect(() => {

  const onScroll = () => {

    setStickyButton(window.scrollY > 420);

  };

  window.addEventListener("scroll", onScroll);

  return () => {

    window.removeEventListener("scroll", onScroll);

  };

}, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[92vh] overflow-hidden bg-[#0a0605]"
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt="The Outpouring"
        className="absolute inset-0 h-full w-full object-cover object-center scale-105 animate-[heroPan_28s_ease-in-out_infinite_alternate]"
      />

      {/* Base darkening + warm color grade (replaces flat red gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(177,18,38,0.68),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,6,5,0.92)_0%,rgba(10,6,5,0.55)_35%,rgba(10,6,5,0.75)_70%,#0a0605_100%)]" />

      {/* Presence light — a vertical shaft pouring down on desktop,
          a low stage-glow pooling behind the headline on mobile.
          Same idea ("light descending"), reshaped per viewport rather
          than squeezed into a narrow column that reads as a stray bug. */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div
          className="absolute left-1/2 top-0 h-full w-[38%] -translate-x-1/2 opacity-0 animate-[shaftIn_2.4s_ease-out_0.2s_forwards]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(201,150,44,0.28) 0%, rgba(201,150,44,0.12) 35%, transparent 75%)",
            filter: "blur(6px)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-full w-[6px] -translate-x-1/2 opacity-0 animate-[shaftIn_2.4s_ease-out_0.4s_forwards]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,237,227,0.9) 0%, rgba(201,150,44,0.5) 30%, transparent 70%)",
            filter: "blur(2px)",
            boxShadow: "0 0 60px 10px rgba(201,150,44,0.35)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 md:hidden">
        {/* Wide low glow sitting behind the headline, like light hitting a stage */}
        <div
          className="absolute left-1/2 top-[38%] h-[46%] w-[130%] -translate-x-1/2 opacity-0 animate-[glowIn_2.4s_ease-out_0.3s_forwards]"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 40%, rgba(201,150,44,0.32) 0%, rgba(201,150,44,0.1) 45%, transparent 75%)",
            filter: "blur(10px)",
          }}
        />
        {/* Thin horizontal ember line, the "source" the embers rise from */}
        <div
          className="absolute left-1/2 top-[62%] h-[2px] w-[70%] -translate-x-1/2 opacity-0 animate-[glowIn_2.4s_ease-out_0.5s_forwards]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(232,180,99,0.8) 30%, rgba(245,237,227,0.9) 50%, rgba(232,180,99,0.8) 70%, transparent)",
            boxShadow: "0 0 30px 6px rgba(201,150,44,0.4)",
          }}
        />
      </div>

      {/* Drifting embers rising through the shaft */}
      <div className="pointer-events-none absolute inset-0">
        {embers.map((e) => (
          <span
            key={e.id}
            className="absolute rounded-full bg-[#e8b463]"
            style={{
              left: `${e.left}%`,
              bottom: "-5%",
              width: e.size,
              height: e.size,
              opacity: 0,
              boxShadow: "0 0 6px 1px rgba(232,180,99,0.8)",
              animation: `emberRise ${e.duration}s ease-in ${e.delay}s infinite`,
              // eslint-disable-next-line react/forbid-dom-props
              "--drift": `${e.drift}px`,
              "--peak": e.opacity,
            }}
          />
        ))}
      </div>

      {/* Fine film grain for texture, kills the glossy-gradient AI look */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette to pull focus to center */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.65)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Logo — breathes in with the light */}
        <div
          className={`mb-8 transition-all duration-[1400ms] ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <img
            src={logo}
            alt="TSN Logo"
            className="h-16 w-auto md:h-20 drop-shadow-[0_0_18px_rgba(201,150,44,0.35)]"
          />
        </div>

        {/* Eyebrow */}
        <p
          className={`mb-5 text-[11px] md:text-xs font-medium uppercase tracking-[0.5em] text-[#d99a4e] transition-all duration-[1200ms] ease-out delay-[300ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          The Sent Network Presents
        </p>

        {/* Headline — word-by-word reveal with a light sweep */}
       {/* Main Title */}
{/* Main Title */}
<h1
  className={`
    mt-2
    text-center
    leading-none
    uppercase
    transition-all
    duration-[1200ms]
    ${
      loaded
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }
  `}
>
  {/* Elegant, clear "THE" */}
  <span
    className="
      block
      font-serif
      font-semibold
      text-amber-100/90
      tracking-[0.45em]
      text-[clamp(1.2rem,3.5vw,2.2rem)]
      drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
    "
  >
    THE
  </span>

  {/* Premium scaled "OUTPOURING" */}
  <span
    className="
      block
      mt-2
      fire-text
      font-serif
      font-extrabold
      leading-[0.95]
      tracking-[0.02em]
      text-[clamp(2.5rem,8vw,5.5rem)]
      break-words
    "
  >
    OUTPOURING
  </span>
</h1>
        {/* Supporting line */}
        <p
          className={`mt-7 max-w-md text-base leading-relaxed text-[#d9cdbf] md:text-lg transition-all duration-[1200ms] ease-out delay-[950ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          The End-time Armies Movement
        </p>

        {/* CTA — rises last, ember-lit on hover */}
        <div
          className={`mt-10 transition-all duration-[1200ms] ease-out delay-[1150ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
  to="/register"
  className={`
group
z-50
inline-flex
items-center
justify-center
overflow-hidden
rounded-full
font-bold
uppercase
tracking-wide
transition-all
duration-700
ease-[cubic-bezier(0.22,1,0.36,1)]

${
   "relative px-10 py-4 text-base bg-[#d13912] text-[#0a0605] scale-100"
}
`}
>

<span
className="
absolute
inset-0
-translate-x-full
bg-gradient-to-r
from-transparent
via-white/30
to-transparent
transition-transform
duration-700
group-hover:translate-x-full
"/>

<span className="relative">
Register Now
</span>

</Link>
        </div>
      </div>


      <style>{`
        @keyframes heroPan {
          0% { transform: scale(1.05) translateY(0); }
          100% { transform: scale(1.12) translateY(-1.5%); }
        }
        @keyframes shaftIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes glowIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes emberRise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: var(--peak); }
          80% { opacity: var(--peak); }
          100% { transform: translateY(-115vh) translateX(var(--drift)); opacity: 0; }
        }

        /* Fire-text: flickering ember gradient licking up through the letters,
           upright, no slant. Layered gradient position shifts create the flicker. */
        .fire-text{
  display:inline-block;
  background:linear-gradient(
      180deg,
      #fff7d6 0%,
      #ffd866 25%,
      #f3b329 48%,
      #d51d28 70%,
      #8d0d15 100%
  );

  background-size:100% 250%;
  animation:fireFlicker 5s ease-in-out infinite;

  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;

  text-shadow:
      0 0 18px rgba(255,180,40,.18),
      0 0 45px rgba(180,0,0,.18);
}
        .fire-text--lit {
          opacity: 1;
          animation: fireFlicker 4.5s ease-in-out 0.9s infinite;
        }
        @keyframes fireFlicker {
          0%   { background-position: 0% 100%; }
          20%  { background-position: 0% 82%; }
          35%  { background-position: 0% 94%; }
          50%  { background-position: 0% 70%; }
          65%  { background-position: 0% 88%; }
          80%  { background-position: 0% 76%; }
          100% { background-position: 0% 100%; }
        }
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(0.3); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70">


  <div className="h-10 w-6 rounded-full border border-white/40 flex justify-center">
    <div className="mt-2 h-2 w-2 rounded-full bg-red-500 animate-bounce"></div>
  </div>
</div>
    </section>
  );
}

export default Hero;