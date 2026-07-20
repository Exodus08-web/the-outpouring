import { useEffect, useState } from "react";

function Countdown() {
  const eventDate = new Date("July 30, 2026 19:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(eventDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(eventDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateTime = () => {
    const totalSeconds = Math.max(
      Math.floor(timeLeft / 1000),
      0
    );

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(
      (totalSeconds % (3600 * 24)) / 3600
    );
    const minutes = Math.floor(
      (totalSeconds % 3600) / 60
    );
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = calculateTime();

  return (
    <section className="relative bg-black px-6 py-20 text-white">

      <div className="absolute inset-0 bg-red-950/20"></div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <p className="uppercase tracking-[0.4em] text-red-500">
          The Outpouring 2026
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Something Powerful Is Coming
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

          {[
            ["Days", days],
            ["Hours", hours],
            ["Minutes", minutes],
            ["Seconds", seconds],
          ].map(([label, value]) => (
            <div
              key={label}
              className="
              rounded-3xl
              border
              border-red-600/40
              bg-red-950/40
              p-6
              "
            >
              <h3 className="text-4xl font-black md:text-6xl">
                {String(value).padStart(2, "0")}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                {label}
              </p>
            </div>
          ))}

        </div>

        <p className="mt-8 text-lg text-gray-300">
          July 30th, 2026 • 7:00 PM
        </p>

      </div>

    </section>
  );
}

export default Countdown;