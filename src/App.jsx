import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import GeneralRegister from "./pages/GeneralRegister";
import HealingRegister from "./pages/HealingRegister";
import Success from "./pages/Success";
import Admin from "./pages/Admin";
import PrayerAdmin from "./pages/PrayerAdmin";
import CheckIn from "./pages/CheckIn";
import RetrieveTicket from "./pages/RetrieveTicket";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/register/general"
          element={<GeneralRegister />}
        />

        <Route
          path="/register/healing"
          element={<HealingRegister />}
        />

        <Route
          path="/success"
          element={<Success />}
        />

        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
        <Route
  path="/admin/prayer"
  element={
    <ProtectedRoute>
      <PrayerAdmin />
    </ProtectedRoute>
  }
/>
<Route
  path="/checkin"
  element={
    <ProtectedRoute>
      <CheckIn />
    </ProtectedRoute>
  }
/>
<Route
  path="/retrieve-ticket"
  element={<RetrieveTicket />}
/>
<Route
  path="/admin-login"
  element={<AdminLogin />}
/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;