function AboutTSN() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-12">

      {/* Red glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-700/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl">

        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-500">
          About Us
        </p>

        <h2 className="text-4xl font-black leading-tight md:text-6xl">
          THE SENT NETWORK
        </h2>

        <div className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">

          <p>
            The Sent Network is an interdenominational movement birthed with
            the mandate to equip and groom the end time armies for purpose
            discovery and maximum delivery.
          </p>

          <p className="mt-6">
            Through gatherings, teachings and spiritual encounters, we raise
            believers who are prepared to walk in purpose and impact their
            generation.
          </p>

        </div>

      </div>

    </section>
  );
}

export default AboutTSN;