import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
  e.preventDefault();

  
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    alert(error.message);
    return;
  }

  navigate("/admin");
}

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-8">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl bg-white/10 p-10"
      >

        <h1 className="text-4xl font-black text-red-500">
          Admin Login
        </h1>

        <input
  type="email"
  className="mt-8 w-full rounded-xl bg-black/40 p-4 text-white"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

        <input
          type="password"
          className="mt-5 w-full rounded-xl bg-black/40 p-4 text-white"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
  type="submit"
  className="mt-8 w-full rounded-full bg-red-600 py-4 font-bold"
>
  Login
</button>

      </form>

    </section>
  );
}

export default AdminLogin;