import logo from "../assets/logos/tsnlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-5 py-4 md:px-10">

        <img
          src={logo}
          alt="TSN Logo"
          className="h-12 w-auto"
        />

        

      </div>
    </header>
  );
}

export default Navbar;