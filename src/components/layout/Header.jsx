import Navbar from "./Navbar";
import { useState } from "react";
import AuthModal from "../auth/AuthModal";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-black text-white text-center py-2 text-sm">
        Free Shipping Above ₹999
      </div>

      <Navbar />
    </header>
  );
};

export default Header;