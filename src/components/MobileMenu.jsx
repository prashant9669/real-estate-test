import { Link } from "react-router-dom";

export default function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-darkCard z-50 border-l border-white/10 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col gap-6 text-lightText text-lg">
        <button
          className="self-end text-2xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link className="hover:text-primary">Properties</Link>
        <Link className="hover:text-primary">Agents</Link>
        <Link className="hover:text-primary">Contact</Link>
      </div>
    </div>
  );
}
