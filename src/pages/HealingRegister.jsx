function HealingRegister() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">

      <div className="mx-auto max-w-3xl">

        <p className="text-sm uppercase tracking-[0.4em] text-red-500">
          Healing & Prayer Line
        </p>


        <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
          Submit Your Prayer Request
        </h1>


        <p className="mt-5 text-gray-300">
          Share your request with us. We believe in the power of prayer
          and standing together in faith.
        </p>



        <form className="mt-10 space-y-6">


          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl bg-white/10 p-4 outline-none placeholder:text-gray-400"
          />


          <input
            type="number"
            placeholder="Age"
            className="w-full rounded-xl bg-white/10 p-4 outline-none placeholder:text-gray-400"
          />



          <select
            className="w-full rounded-xl bg-white/10 p-4 text-gray-300 outline-none"
          >

            <option>
              Select Gender
            </option>

            <option>
              Male
            </option>

            <option>
              Female
            </option>

          </select>




          <input
            type="text"
            placeholder="Resident City"
            className="w-full rounded-xl bg-white/10 p-4 outline-none placeholder:text-gray-400"
          />



          <input
            type="text"
            placeholder="Name of Sickness / Prayer Request"
            className="w-full rounded-xl bg-white/10 p-4 outline-none placeholder:text-gray-400"
          />



          <input
            type="text"
            placeholder="How long have you had this condition?"
            className="w-full rounded-xl bg-white/10 p-4 outline-none placeholder:text-gray-400"
          />



          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Upload Hospital Record (Optional)
            </label>

            <input
              type="file"
              className="w-full rounded-xl bg-white/10 p-4 text-gray-300"
            />

          </div>




          <textarea
            placeholder="Additional Message"
            rows="5"
            className="
            w-full
            rounded-xl
            bg-white/10
            p-4
            outline-none
            placeholder:text-gray-400
            "
          />




          <button
            type="submit"
            className="
            w-full
            rounded-full
            bg-red-600
            py-4
            text-lg
            font-bold
            transition
            hover:bg-red-500
            "
          >
            Submit Prayer Request
          </button>



        </form>


      </div>

    </section>
  );
}

export default HealingRegister;