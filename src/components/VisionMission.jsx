function VisionMission() {
  const vision = [
    "Taking the world by storm",
    "Raising solution carriers",
    "Transforming lives",
    "Discovering Purpose",
  ];

  const mission = [
    "Revealing Christ to the world by bringing people into an experience with the Holy Spirit through worship and fellowship, igniting a burning hunger and passion for God while reflecting His character everywhere.",
    "Wiping away tears by the power of God through miracles, signs, and wonders, raising believers who become carriers of God's miraculous power.",
    "Propagating the Gospel of the Kingdom, teaching the undiluted Word of God and empowering people to live victoriously and exercise dominion.",
    "Bringing people into their God-ordained purpose, helping them possess their promise lands and influence every sphere of society for Christ.",
    "Being a light to the nations through evangelism, outreaches, and crusades, bringing the unchurched and unbelievers to Christ through the preaching of the Gospel.",
  ];

  return (
    <section className="bg-[#080611] py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">

        <p className="text-center text-xs uppercase tracking-[0.4em] text-[#d4af37]">
          Vision & Mission
        </p>

        <h2 className="mt-4 text-center text-4xl font-black md:text-5xl">
          THE SENT NETWORK
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-[#d4af37]">
              Our Vision
            </h3>

            <ul className="mt-8 space-y-4">
              {vision.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#d4af37]">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-[#d4af37]">
              Our Mission
            </h3>

            <div className="mt-8 space-y-6">
              {mission.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37] font-bold text-black">
                    {index + 1}
                  </div>

                  <p className="leading-7 text-white/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default VisionMission;