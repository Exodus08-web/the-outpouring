import { useEffect, useRef, useState } from "react";
import heroImage from "../assets/images/hero/hero-main.jpg";
import logo from "../assets/logos/tsnlogo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { supabase } from "../lib/supabase";

const EMBER_COUNT = 24;

function useEmbers(count) {
  const [embers] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      size: 2 + Math.random() * 4,
      duration: 6 + Math.random() * 7,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 70,
      opacity: 0.4 + Math.random() * 0.5,
    }))
  );
  return embers;
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [stickyButton, setStickyButton] = useState(false);
  const [content, setContent] = useState(null);
  const sectionRef = useRef(null);
  const embers = useEmbers(EMBER_COUNT);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      setLoaded(true);
    });
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    async function fetchContent() {
      const { data, error } = await supabase
        .from("website_content")
.select("*")
.eq("id", 1)
.single()

      if (error) {
        console.log(error);
        return;
      }
      setContent(data);
    }
    fetchContent();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setStickyButton(window.scrollY > 420);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-[92vh] min-h-[650px] overflow-hidden bg-[#0a050d] font-sans antialiased text-white selection:bg-purple-900 selection:text-amber-200"
    >
      {/* Mobile Hamburger */}
<div className="fixed top-5 right-5 z-[99999]">

  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-black/40
      backdrop-blur-xl
      text-white
      shadow-2xl
    "
  >
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>

</div>

{/* Mobile Menu */}
<div
  className={`
    fixed
    top-0
    right-0
    z-[99998]
    h-screen
    w-[280px]
    bg-[#090613]
    backdrop-blur-2xl
    transition-all
    duration-500
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
  `}
>

  <div className="mt-28 flex flex-col px-8 gap-6">

    <a href="#home" onClick={() => setMenuOpen(false)}>
  Home
</a>

<a href="#about" onClick={() => setMenuOpen(false)}>
  About The Outpouring
</a>

<a href="#past-moments" onClick={() => setMenuOpen(false)}>
  Past Outpouring Moments
</a>

<a href="#testimonies" onClick={() => setMenuOpen(false)}>
  Testimonies
</a>

<a href="#next-steps" onClick={() => setMenuOpen(false)}>
  Next Steps
</a>

<a href="#partnership" onClick={() => setMenuOpen(false)}>
  Partnership
</a>

<a 
  href="#connect"
  onClick={() => setMenuOpen(false)}
>
  Connect With Us
</a>

    <Link
      to="/register"
      onClick={() => setMenuOpen(false)}
      className="
        mt-6
        rounded-full
        bg-[#d4af37]
        py-4
        text-center
        font-bold
        text-black
      "
    >
      Register
    </Link>

  </div>

</div>

{/* Dark Overlay */}
{menuOpen && (
  <div
    onClick={() => setMenuOpen(false)}
    className="fixed inset-0 z-[99997] bg-black/60"
  />
)}
      {/* Background image — Increased opacity slightly so photo detail shines through */}
      {/* Background image */}
<img
  src={heroImage}
  alt="The Outpouring"
  className="absolute inset-0 h-full w-full object-cover object-center scale-105 opacity-40 animate-[heroPan_7s_ease-in-out_infinite_alternate]"
/>

      {/* Subtler Radial Glow: Softened purple (0.22 opacity) & richer crimson core */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_88%,rgba(225,29,72,0.5)_0%,rgba(88,28,135,0.22)_55%,transparent_85%)]" />
      
      {/* Base Darkening Layer: Toned down purple tint for a cleaner dark ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,5,13,0.88)_0%,rgba(15,7,24,0.45)_40%,rgba(10,5,13,0.82)_80%,#0a050d_100%)]" />

      {/* Presence light — Warm Crimson & Gold Shaft with subtle purple depth */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div
          className="absolute left-1/2 top-0 h-full w-[42%] -translate-x-1/2 opacity-0 animate-[shaftIn_2.4s_ease-out_0.2s_forwards]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(225,29,72,0.22) 0%, rgba(126,34,206,0.08) 45%, transparent 80%)",
            filter: "blur(12px)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2 opacity-0 animate-[shaftIn_2.4s_ease-out_0.4s_forwards]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(254,243,199,0.95) 0%, rgba(225,29,72,0.65) 40%, rgba(147,51,234,0.2) 75%, transparent)",
            filter: "blur(1.5px)",
            boxShadow: "0 0 50px 8px rgba(225,29,72,0.45)",
          }}
        />
      </div>

      {/* Mobile Stage Glow */}
      <div className="pointer-events-none absolute inset-0 md:hidden">
        <div
          className="absolute left-1/2 top-[38%] h-[46%] w-[130%] -translate-x-1/2 opacity-0 animate-[glowIn_2.4s_ease-out_0.3s_forwards]"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 40%, rgba(225,29,72,0.32) 0%, rgba(126,34,206,0.1) 50%, transparent 80%)",
            filter: "blur(14px)",
          }}
        />
        <div
          className="absolute left-1/2 top-[62%] h-[2px] w-[75%] -translate-x-1/2 opacity-0 animate-[glowIn_2.4s_ease-out_0.5s_forwards]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(225,29,72,0.85) 30%, rgba(254,243,199,0.95) 50%, rgba(225,29,72,0.85) 70%, transparent)",
            boxShadow: "0 0 35px 8px rgba(225,29,72,0.5)",
          }}
        />
      </div>

      {/* Crimson & Gold Drifting Embers */}
      <div className="pointer-events-none absolute inset-0">
        {embers.map((e) => (
          <span
            key={e.id}
            className="absolute rounded-full bg-[#fbbf24]"
            style={{
              left: `${e.left}%`,
              bottom: "-5%",
              width: e.size,
              height: e.size,
              opacity: 0,
              boxShadow: "0 0 8px 2px rgba(225,29,72,0.9)",
              animation: `emberRise ${e.duration}s ease-in ${e.delay}s infinite`,
              // eslint-disable-next-line react/forbid-dom-props
              "--drift": `${e.drift}px`,
              "--peak": e.opacity,
            }}
          />
        ))}
      </div>

      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette frame */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(10,5,13,0.8)]" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pt-8">
        
        {/* Logo */}
        <div
          className={`mb-6 transition-all duration-[1400ms] ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <img
            src={logo}
            alt="TSN Logo"
            className="h-16 w-auto md:h-20 drop-shadow-[0_0_20px_rgba(225,29,72,0.4)]"
          />
        </div>

        {/* Eyebrow */}
        <p
          className={`mb-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.55em] text-[#fcd34d] transition-all duration-[1200ms] ease-out delay-[300ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Welcome To
        </p>

        {/* Main Title Section */}
        <h1
          className={`mt-1 text-center uppercase transition-all duration-[1200ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="
              block
              font-serif
              font-medium
              text-amber-100/95
              tracking-[0.5em]
              text-[clamp(1.1rem,3vw,2rem)]
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]
            "
          >
            THE
          </span>

          <span
            className="
              block
              mt-2
              fire-text
              font-serif
              font-black
              leading-[0.92]
              tracking-[0.03em]
              text-[clamp(2.6rem,8.5vw,5.8rem)]
              break-words
            "
          >
            {content?.hero_title || "OUTPOURING"}
          </span>
        </h1>

        {/* Sub-Eyebrows */}
        <p
          className={`mt-6 text-[10px] md:text-xs font-medium uppercase tracking-[0.5em] text-amber-100/60 transition-all duration-[1200ms] delay-[700ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Presented By
        </p>

        <p
          className={`mt-2 font-serif text-base md:text-xl italic tracking-[0.3em] font-medium text-[#fef08a] transition-all duration-[1200ms] delay-[850ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          THE SENT NETWORK
        </p>

        {/* Supporting Line */}
        <p
          className={`mt-6 max-w-md text-sm md:text-base font-light tracking-wide leading-relaxed text-slate-200/90 transition-all duration-[1200ms] ease-out delay-[950ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {content?.hero_subtitle || "The End-time Armies Movement"}
        </p>

        {/* CTA Button */}
        <div
          className={`mt-9 transition-all duration-[1200ms] ease-out delay-[1150ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            to="/register"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              overflow-hidden
              rounded-full
              px-10
              py-4
              text-xs md:text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-950
              bg-gradient-to-r
              from-[#f59e0b]
              via-[#fbbf24]
              to-[#f59e0b]
              shadow-[0_0_28px_rgba(225,29,72,0.45)]
              transition-all
              duration-500
              hover:shadow-[0_0_40px_rgba(225,29,72,0.7)]
              hover:scale-105
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">Register Now</span>
          </Link>
        </div>
      </div>

      {/* CSS Styles & Keyframes */}
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

        /* Upgraded Flame Text Effect */
        .fire-text {
          display: inline-block;
          background: linear-gradient(
            180deg,
            #fffbeb 0%,
            #fde047 22%,
            #f59e0b 42%,
            #be123c 72%,
            #581c87 100%
          );
          background-size: 100% 260%;
          animation: fireFlicker 5s ease-in-out infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 25px rgba(190, 18, 60, 0.45));
        }

        @keyframes fireFlicker {
          0%   { background-position: 0% 100%; }
          20%  { background-position: 0% 80%; }
          35%  { background-position: 0% 95%; }
          50%  { background-position: 0% 68%; }
          65%  { background-position: 0% 88%; }
          80%  { background-position: 0% 75%; }
          100% { background-position: 0% 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-75">
        <div className="h-9 w-5 rounded-full border border-rose-200/40 flex justify-center p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-[#fde047] animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;