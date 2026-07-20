import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import GeneralRegister from "./pages/GeneralRegister";
import HealingRegister from "./pages/HealingRegister";
import Success from "./pages/Success";
import Admin from "./pages/Admin";

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
          element={<Admin />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;