import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function GeneralRegister() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  city: "",
  whatsapp: "",
  gender: "",
  firstTime: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  // Simple validation
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.city ||
    !formData.whatsapp ||
    !formData.gender ||
    !formData.firstTime
  ) {
    alert("Please fill in all fields.");
    return;
  }

  // Check if WhatsApp already exists
  
  const { data: existingUser, error: checkError } = await supabase
    .from("registrations")
    .select("whatsapp")
    .eq("whatsapp", formData.whatsapp)
    .maybeSingle();

  if (checkError) {
    alert("Something went wrong. Please try again.");
    console.error(checkError);
    return;
  }

  if (existingUser) {
    alert("This WhatsApp number has already been registered.");
    return;
  }

  // Save to database
 const { data, error } = await supabase
  .from("registrations")
  .insert([
    {
      attendee_id:
        "OUT-" +
        Math.random()
          .toString(36)
          .substring(2, 8)
          .toUpperCase(),

      first_name: formData.firstName,
      last_name: formData.lastName,
      city: formData.city,
      whatsapp: formData.whatsapp,
      gender: formData.gender,
      first_time: formData.firstTime,
    },
  ])
  .select()
  .single();

  if (error) {
  console.error(error);
  alert(error.message);
  return;
}

  navigate("/success", {
  state: {
    attendeeId: data.attendee_id,
    firstName: data.first_name,
  },
});
};
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">

      <div className="mx-auto max-w-3xl">

        <p className="text-sm uppercase tracking-[0.4em] text-red-500">
          General Registration
        </p>


        <h1 className="mt-5 text-4xl font-black md:text-6xl">
          Reserve Your Place
        </h1>


        <p className="mt-5 text-gray-300">
          Fill in your details to register for The Outpouring 2026.
        </p>


        <form 
  onSubmit={handleSubmit}
  className="mt-10 space-y-6"
>

          <div className="grid gap-6 md:grid-cols-2">

            <input
  type="text"
  placeholder="First Name"
  value={formData.firstName}
  onChange={(e) =>
    setFormData({
      ...formData,
      firstName: e.target.value,
    })
  }
  className="rounded-xl bg-white/10 px-4 py-4 outline-none placeholder:text-gray-400"
/>


            <input
  type="text"
  placeholder="Last Name"
  value={formData.lastName}
  onChange={(e) =>
    setFormData({
      ...formData,
      lastName: e.target.value,
    })
  }
  className="rounded-xl bg-white/10 px-4 py-4 outline-none placeholder:text-gray-400"
/>
          </div>


          <input
  type="text"
  placeholder="Resident City"
  value={formData.city}
  onChange={(e) =>
    setFormData({
      ...formData,
      city: e.target.value,
    })
  }
  className="w-full rounded-xl bg-white/10 px-4 py-4 outline-none placeholder:text-gray-400"
/>


          <input
  type="tel"
  placeholder="WhatsApp Number"
  value={formData.whatsapp}
  onChange={(e) =>
    setFormData({
      ...formData,
      whatsapp: e.target.value,
    })
  }
  className="w-full rounded-xl bg-white/10 px-4 py-4 outline-none placeholder:text-gray-400"
/>

          <select
  value={formData.gender}
  onChange={(e) =>
    setFormData({
      ...formData,
      gender: e.target.value,
    })
  }
  className="w-full rounded-xl bg-white/10 px-4 py-4 text-gray-300 outline-none"
>

  <option value="">
    Select Gender
  </option>

  <option value="Male">
    Male
  </option>

  <option value="Female">
    Female
  </option>

</select>



          <select
  value={formData.firstTime}
  onChange={(e) =>
    setFormData({
      ...formData,
      firstTime: e.target.value,
    })
  }
  className="w-full rounded-xl bg-white/10 px-4 py-4 text-gray-300 outline-none"
>

  <option value="">
    Is this your first Outpouring?
  </option>

  <option value="Yes">
    Yes
  </option>

  <option value="No">
    No
  </option>

</select>



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
            Complete Registration
          </button>

        </form>


      </div>

    </section>
  );
}

export default GeneralRegister;