import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-[200px]" />
          </Link>

          <button className="hidden md:flex items-center gap-1 bg-transparent text-white/80 text-xl">
            Lagos <ChevronDown size={16} />
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-white/90 text-sm bg-white/10 backdrop-blur-xl border-b border-white/20 px-6 py-3 rounded-full">
          <Link to="/property-details" className="text-white text-xl hover:text-primary transition">Buyer</Link>
          <Link to="/property-details" className="text-white text-xl hover:text-primary transition">Seller</Link>
          <Link to="/property-details" className="text-white text-xl hover:text-primary transition">Tenants</Link>
          <Link to="/property-details" className="text-white text-xl hover:text-primary transition">Post property</Link>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="p-3 rounded-xl bg-black/30 border border-white/10 text-white md:hidden"
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex flex-col p-8 text-white">
          <button className="self-end text-3xl mb-6" onClick={() => setOpen(false)}>×</button>

          <Link to="/property-details" className="py-3 text-lg">Buyer</Link>
          <Link to="/property-details" className="py-3 text-lg">Seller</Link>
          <Link to="/property-details" className="py-3 text-lg">Tenants</Link>
          <Link to="/property-details" className="py-3 text-lg">Post property</Link>
        </div>
      )}
    </header>
  );
}
