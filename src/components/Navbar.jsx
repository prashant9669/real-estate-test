import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50  /80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-primary text-2xl font-bold">
          PROTIVA
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-lightText">
  <Link to="/" className="hover:text-primary transition">Home</Link>
  <Link to="/property-details" className="hover:text-primary transition">Properties</Link>
  <Link to="/agents" className="hover:text-primary transition">Agents</Link>
  <Link to="/contact" className="hover:text-primary transition">Contact</Link>
</nav>


        {/* CTA */}
        <div className="hidden md:flex">
          <Button>Login / Signup</Button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-lightText text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
