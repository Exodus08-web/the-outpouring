import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import GeneralRegister from "./pages/GeneralRegister";
import HealingRegister from "./pages/HealingRegister";
import Success from "./pages/Success";
import Admin from "./pages/Admin";
import WebsiteContent from "./pages/WebsiteContent";
import PrayerAdmin from "./pages/PrayerAdmin";
import CheckIn from "./pages/CheckIn";
import RetrieveTicket from "./pages/RetrieveTicket";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import NewConvert from "./pages/NewConvert";
import Mentorship from "./pages/Mentorship";
import NewConvertSuccess from "./pages/NewConvertSuccess";
import NewConvertsAdmin from "./pages/NewConvertsAdmin";
import AdminTestimonies from "./pages/AdminTestimonies";
import Healing from "./pages/Healing";

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
  path="/admin/content"
  element={
    <ProtectedRoute>
      <WebsiteContent />
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
<Route
  path="/new-convert"
  element={<NewConvert />}
/>
<Route
  path="/new-convert-success"
  element={<NewConvertSuccess />}
/>
<Route
  path="/admin/new-converts"
  element={<NewConvertsAdmin />}
/>
<Route path="/mentorship" element={<Mentorship />} />
<Route
  path="/admin/testimonies"
  element={
    <ProtectedRoute>
      <AdminTestimonies />
    </ProtectedRoute>
  }
/>
<Route
  path="/healing"
  element={<Healing />}
/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;