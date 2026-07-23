import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

function NewConvert() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    whatsapp: "",
    phone: "",
    email: "",
    city: "",
    gender: "",
    age_range: "",
    decision: "",
    consent: false,
  });
  async function handleSubmit(e) {
  e.preventDefault();

  if (
    !form.first_name ||
    !form.last_name ||
    !form.whatsapp ||
    !form.city ||
    !form.gender ||
    !form.age_range ||
    !form.decision ||
    !form.consent
  ) {
    alert("Please complete all required fields.");
    return;
  }


const { error } = await supabase
  .from("new_converts")
  .insert([
    {
      first_name: form.first_name,
      last_name: form.last_name,
      whatsapp: form.whatsapp,
      phone: form.phone,
      email: form.email,
      city: form.city,
      gender: form.gender,
      age_range: form.age_range,
      decision: form.decision,
    },
  ]);

if (error) {
  console.error(error);
  alert("Something went wrong. Please try again.");
  return;
}

navigate("/new-convert-success");
}

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1236] via-[#120c26] to-[#090613] px-5 py-16 text-white">

      <div className="mx-auto max-w-2xl">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

          <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            Welcome Home
          </p>

          <h1 className="mt-4 text-center text-3xl font-black md:text-5xl">
            You Made The Best Decision ❤️
          </h1>

         <p className="mt-6 text-center leading-8 text-white/80"> 
            Heaven rejoices over your decision today, and so do we.
            We'd love to walk with you as you begin your journey with Jesus Christ.
            Kindly complete this short form.
          </p>
          <form
  onSubmit={handleSubmit}
  className="mt-12 space-y-8"
>

  <h2 className="text-xl font-bold text-[#d4af37]">
    Personal Information
  </h2>

  <div className="grid gap-5 md:grid-cols-2">

    <input
      type="text"
      placeholder="First Name"
      value={form.first_name}
      onChange={(e) =>
        setForm({ ...form, first_name: e.target.value })
      }
      className="rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#7C3AED]"
    />

    <input
      type="text"
      placeholder="Last Name"
      value={form.last_name}
      onChange={(e) =>
        setForm({ ...form, last_name: e.target.value })
      }
      className="rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#7C3AED]"
    />

  </div>

  <h2 className="text-xl font-bold text-[#d4af37]">
    Contact Information
  </h2>

  <div className="space-y-5">

    <input
      type="text"
      placeholder="WhatsApp Number"
      value={form.whatsapp}
      onChange={(e) =>
        setForm({ ...form, whatsapp: e.target.value })
      }
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#7C3AED]"
    />

    <input
      type="text"
      placeholder="Phone Number (Optional)"
      value={form.phone}
      onChange={(e) =>
        setForm({ ...form, phone: e.target.value })
      }
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#7C3AED]"
    />

    <input
      type="email"
      placeholder="Email Address (Optional)"
      value={form.email}
      onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      }
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#7C3AED]"
    />

  </div>

<h2 className="text-xl font-bold text-[#d4af37]">
  Personal Details
</h2>

<div className="space-y-5">

  <input
    type="text"
    placeholder="City"
    value={form.city}
    onChange={(e) =>
      setForm({
        ...form,
        city: e.target.value,
      })
    }
    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#7C3AED]"
  />

  <select
    value={form.gender}
    onChange={(e) =>
      setForm({
        ...form,
        gender: e.target.value,
      })
    }
    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#7C3AED]"
  >
    <option value="">Select Gender</option>
    <option>Male</option>
    <option>Female</option>
  </select>

  <select
    value={form.age_range}
    onChange={(e) =>
      setForm({
        ...form,
        age_range: e.target.value,
      })
    }
    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-[#7C3AED]"
  >
    <option value="">Select Age Range</option>

    <option>Under 13</option>

    <option>13 - 17</option>

    <option>18 - 24</option>

    <option>25 - 34</option>

    <option>35 - 44</option>

    <option>45 - 54</option>

    <option>55+</option>

  </select>

</div>
<h2 className="text-xl font-bold text-[#d4af37]">
  Your Decision Today
</h2>

<div className="grid gap-5 md:grid-cols-2">

  <button
    type="button"
    onClick={() =>
      setForm({
        ...form,
        decision: "First Time",
      })
    }
    className={`rounded-3xl border p-6 text-left transition-all ${
      form.decision === "First Time"
        ? "border-[#7C3AED] bg-[#7C3AED]/20"
        : "border-white/10 bg-white/5 hover:border-[#7C3AED]"
    }`}
  >
    <h3 className="text-xl font-bold">
      First Time
    </h3>

    <p className="mt-3 text-white/70 leading-7">
      I have given my life to Jesus Christ today for the first time.
    </p>
  </button>

  <button
    type="button"
    onClick={() =>
      setForm({
        ...form,
        decision: "Rededication",
      })
    }
    className={`rounded-3xl border p-6 text-left transition-all ${
      form.decision === "Rededication"
        ? "border-[#7C3AED] bg-[#7C3AED]/20"
        : "border-white/10 bg-white/5 hover:border-[#7C3AED]"
    }`}
  >
    <h3 className="text-xl font-bold">
       Rededication
    </h3>

    <p className="mt-3 text-white/70 leading-7">
      Today I am rededicating my life to Jesus Christ.
    </p>
  </button>
  </div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">

  <label className="flex items-start gap-4">

    <input
      type="checkbox"
      checked={form.consent}
      onChange={(e) =>
        setForm({
          ...form,
          consent: e.target.checked,
        })
      }
      className="mt-1 h-5 w-5"
    />
    

    <span className="text-sm leading-7 text-white/80">
      I have read and understood the privacy/consent statement above,
      and I consent to The Sent Network contacting me and securely
      storing my information for discipleship and follow-up purposes.
    </span>
  </label>

<button
  type="submit"
  disabled={!form.consent}
  className={`w-full rounded-2xl py-4 text-lg font-bold transition-all ${
    form.consent
      ? "bg-[#7C3AED] hover:bg-[#6D28D9]"
      : "cursor-not-allowed bg-gray-700"
  }`}
>
  Begin My Journey
</button>

</div>

</form>

</div>

</div>

</div>
  );
}

export default NewConvert;