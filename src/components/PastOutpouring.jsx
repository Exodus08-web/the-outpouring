import four from "../assets/images/past-events/four.jpg";
import funaab from "../assets/images/past-events/funaab.jpg";

function PastOutpouring() {
  return (
    <section className="bg-black px-6 py-20 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.4em] text-red-500">
          Our Journey
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Past Outpouring Moments
        </h2>

        <p className="mt-6 max-w-2xl text-gray-300">
          Moments of worship, encounters and transformation from previous
          gatherings of The Outpouring.
        </p>


        <div className="mt-12 grid gap-8 md:grid-cols-2">


          <div className="overflow-hidden rounded-3xl">

            <img
              src={four}
              alt="Four Outpouring"
              className="h-[350px] w-full object-cover"
            />

            <h3 className="mt-5 text-2xl font-bold">
              Four Outpouring
            </h3>

          </div>



          <div className="overflow-hidden rounded-3xl">

            <img
              src={funaab}
              alt="FUNAAB Outpouring"
              className="h-[350px] w-full object-cover"
            />

            <h3 className="mt-5 text-2xl font-bold">
              FUNAAB Outpouring
            </h3>

          </div>


        </div>

      </div>

    </section>
  );
}

export default PastOutpouring;