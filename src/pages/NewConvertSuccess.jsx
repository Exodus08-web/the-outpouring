import { Link } from "react-router-dom";

function NewConvertSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1236] via-[#120c26] to-[#090613] flex items-center justify-center px-6">

      <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white">

        <div className="text-6xl">🎉</div>

        <h1 className="mt-6 text-4xl font-black">
          Welcome to the Family of God!
        </h1>

        <p className="mt-6 leading-8 text-white/80">
          Heaven rejoices over your decision.
          Our follow-up team will reach out to you soon.
        </p>

        <a
          href="https://chat.whatsapp.com/JDqFpyXzZET95HOFTjuFB0?s=cl&p=i&mlu=4&amv=1"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block rounded-2xl bg-[#7C3AED] px-8 py-4 font-bold"
        >
          Join Our WhatsApp Community
        </a>

        <Link
          to="/"
          className="mt-5 block text-white/70 underline"
        >
          Return Home
        </Link>

      </div>

    </div>
  );
}

export default NewConvertSuccess;