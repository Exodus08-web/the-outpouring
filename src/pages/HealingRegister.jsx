import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function HealingRegister() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    age: "",
    gender: "",
    city: "",
    illness: "",
    duration: "",
    message: ""
  });

  const [hospitalRecord, setHospitalRecord] = useState(null);
  const handleSubmit = async (e) => {

  e.preventDefault();

  if (
    !formData.fullName ||
    !formData.whatsapp ||
    !formData.age ||
    !formData.gender ||
    !formData.city ||
    !formData.illness
  ) {
    alert("Please complete all required fields.");
    return;
  }
const { data: existingRequest, error: checkError } = await supabase
  .from("prayer_requests")
  .select("whatsapp")
  .eq("whatsapp", formData.whatsapp)
  .maybeSingle();


if (checkError) {
  alert("Something went wrong checking WhatsApp.");
  console.error(checkError);
  return;
}


if (existingRequest) {
  alert("This WhatsApp number has already submitted a prayer request.");
  return;
}
  setLoading(true);

  let imageUrl = "";

  if (hospitalRecord) {

    const fileName =
      Date.now() + "-" + hospitalRecord.name;

    const { data: uploadData, error: uploadError } =
  await supabase.storage
    .from("healing-images")
    .upload(fileName, hospitalRecord);

console.log("UPLOAD DATA:", uploadData);
console.log("UPLOAD ERROR:", uploadError);

if (uploadError) {
  alert(uploadError.message);
  console.error(uploadError);
  setLoading(false);
  return;
}

    const {
      data: { publicUrl }
    } = supabase.storage
      .from("healing-images")
      .getPublicUrl(fileName);

    imageUrl = publicUrl;
    console.log("Image URL:", imageUrl);

  }

  const { data, error } = await supabase
  .from("prayer_requests")
  .insert([
      {

  attendee_id:
    "HEAL-" +
    Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase(),

  full_name: formData.fullName,

  whatsapp: formData.whatsapp,

  age: Number(formData.age),

  gender: formData.gender,

  city: formData.city,

  illness: formData.illness,

  duration: formData.duration,

  message: formData.message,

  image_url: imageUrl,

  status: "Pending"

      }
    ])
.select()
.single();
console.log("INSERT DATA:", data);
console.log("INSERT ERROR:", error);

  setLoading(false);

  if (error) {
  console.log("DATABASE ERROR:", error);
  alert(JSON.stringify(error));
  return;
}


  navigate("/success", {
  state: {
    attendeeId: data.attendee_id,
    firstName: data.full_name,
  },
});

};
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">

      <div className="mx-auto max-w-3xl">

        <p className="text-sm uppercase tracking-[0.4em] text-red-500">
          Healing & Prayer Line
        </p>


        <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
          Experience the healing power of Jesus Christ.
        </h1>


        <p className="mt-5 text-gray-300">
          This is a special registation for those who wants to be prayed for
          directly by The Man of God concerning serious illness/diseases
          (preffered with medical report)
        </p>



        <form
onSubmit={handleSubmit}
className="mt-10 space-y-6"
>

          <input
  type="text"
  placeholder="Full Name"
  value={formData.fullName}
  onChange={(e) =>
    setFormData({
      ...formData,
      fullName: e.target.value,
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

<input
  type="number"
  placeholder="Age"
  value={formData.age}
  onChange={(e) =>
    setFormData({
      ...formData,
      age: e.target.value,
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
  <option value="">Select Gender</option>

  <option value="Male">Male</option>

  <option value="Female">Female</option>
</select>




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
  type="text"
  placeholder="Name of Sickness / Prayer Request"
  value={formData.illness}
  onChange={(e) =>
    setFormData({
      ...formData,
      illness: e.target.value,
    })
  }
  className="w-full rounded-xl bg-white/10 px-4 py-4 outline-none placeholder:text-gray-400"
/>



          <input
  type="text"
  placeholder="How long have you had this condition?"
  value={formData.duration}
  onChange={(e) =>
    setFormData({
      ...formData,
      duration: e.target.value,
    })
  }
  className="w-full rounded-xl bg-white/10 px-4 py-4 outline-none placeholder:text-gray-400"
/>


          <input
  type="file"
  accept="image/*,.pdf"
  onChange={(e) =>
    setHospitalRecord(e.target.files[0])
  }
  className="w-full rounded-xl bg-white/10 px-4 py-4 text-gray-300"
/>



         <textarea
  placeholder="Additional Message"
  rows={5}
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  className="
    w-full
    rounded-xl
    bg-white/10
    px-4 py-4
    outline-none
    placeholder:text-gray-400
  "
/>




          <button
  type="submit"
  disabled={loading}
  className="
    w-full
    rounded-full
    bg-red-600
    py-4
    text-lg
    font-bold
    transition
    hover:bg-red-500
    disabled:opacity-60
  "
>
  {loading ? "Submitting..." : "Submit Prayer Request"}
</button>


        </form>


      </div>

    </section>
  );
}

export default HealingRegister;