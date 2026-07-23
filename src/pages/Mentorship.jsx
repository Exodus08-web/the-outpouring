import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Mentorship() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-[#1b1236] via-[#120c26] to-[#090613] text-white px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Mentorship & Community
          </p>

          <h1 className="mt-5 text-center text-4xl md:text-6xl font-black">
            Grow in Christ With a Mentor
          </h1>

          <p className="mt-8 text-center text-lg leading-9 text-white/80">
            Your decision to follow Christ is only the beginning. Every believer
            grows stronger through discipleship, fellowship, sound teaching,
            prayer, and godly relationships.
          </p>

          <p className="mt-6 text-center text-lg leading-9 text-white/80">
            At <span className="font-bold text-[#d4af37]">The Sent Network</span>,
            we are passionate about raising believers who are deeply rooted in
            God's Word, led by the Holy Spirit, and equipped to live out their
            calling. Whether you've just given your life to Christ, you're
            seeking a deeper relationship with God, or you're looking for a
            spiritual family where you can grow, you don't have to walk alone.
          </p>

          <div className="mt-12 rounded-3xl border border-[#d4af37]/40 bg-[#d4af37]/10 p-8">

            <p className="text-center italic text-xl leading-9">
              "Follow my example, as I follow the example of Christ."
            </p>

            <p className="mt-4 text-center font-bold text-[#d4af37]">
              — 1 Corinthians 11:1
            </p>

          </div>

          <p className="mt-10 text-center text-lg leading-9 text-white/80">
            That is the heart of biblical mentorship—not following a person for
            their own sake, but walking alongside men and women who are
            wholeheartedly following Jesus Christ. Through discipleship,
            accountability, prayer, sound doctrine, and genuine fellowship, we
            grow together into the fullness of Christ.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

              <h2 className="text-2xl font-bold">
                💬 Join Our WhatsApp Community
              </h2>

              <p className="mt-5 leading-8 text-white/80">
                join our private mentorshi/discipleship community 
              </p>

              <a
                href="https://chat.whatsapp.com/JDqFpyXzZET95HOFTjuFB0?s=cl&p=i&mlu=4&amv=1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-2xl bg-green-600 px-8 py-4 font-bold hover:bg-green-700 transition"
              >
                Join WhatsApp Community
              </a>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

              <h2 className="text-2xl font-bold">
                📢 Join Our Telegram Channel
              </h2>

              <p className="mt-5 leading-8 text-white/80">
                Receive prophetic sounds, powerful messages, worship sessions,
             teachings and important ministry updates wherever you are.
            
              </p>

              <a
                href="https://t.me/Thesentnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-2xl bg-sky-600 px-8 py-4 font-bold hover:bg-sky-700 transition"
              >
                Join Telegram Channel
              </a>

            </div>
<Link
  to="/"
  className="mt-16 inline-flex rounded-2xl border border-white/20 px-8 py-4 font-bold hover:bg-white/10 transition"
>
  ← Back to Home
</Link>
          </div>

        </div>

      </div>
    </>
  );
}

export default Mentorship;