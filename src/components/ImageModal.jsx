import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageModal({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]">
      {/* CLOSE */}
      <button
        className="absolute top-6 right-6 text-white p-2 bg-black/40 rounded-full"
        onClick={onClose}
      >
        <X size={26} />
      </button>

      {/* LEFT ARROW */}
      <button
        className="absolute left-6 text-white p-2 bg-black/40 rounded-full"
        onClick={prev}
      >
        <ChevronLeft size={32} />
      </button>

      {/* IMAGE */}
      <img
        src={images[current]}
        className="max-w-[80%] max-h-[80%] object-contain rounded-lg"
        alt=""
      />

      {/* RIGHT ARROW */}
      <button
        className="absolute right-6 text-white p-2 bg-black/40 rounded-full"
        onClick={next}
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
