function Experience() {
  const experiences = [
    {
      title: "Deep Worship",
      text: "An atmosphere of worship, praise and genuine encounters with God.",
    },
    {
      title: "Purpose Discovery",
      text: "A gathering designed to awaken purpose and direction.",
    },
    {
      title: "Divine Encounters",
      text: "Moments of prayer, healing and transformation.",
    },
  ];

  return (
    <section className="bg-black px-6 py-20 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.4em] text-red-500">
          The Experience
        </p>

        <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
          What To Expect
        </h2>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="
              rounded-3xl
              border
              border-red-900
              bg-red-950/20
              p-8
              "
            >

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-300 leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;