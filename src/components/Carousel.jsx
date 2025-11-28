import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ items, renderItem }) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full">
      {/* Content */}
      <div className="overflow-hidden">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-500"
          style={{
            transform: `translateX(-${current * (100 / 3)}%)`,
            gridTemplateColumns: `repeat(${total}, minmax(300px, 1fr))`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-[350px]">
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="flex justify-between items-center mt-8 ">
        <p className="text-slate-600 flex flex-shrink-0 text-xl">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>

        <div className="flex items-center gap-4 w-full mx-6">
          <div className="w-full h-[3px] bg-slate-200 rounded-full">
            <div
              className="h-[3px] bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 border border-emerald-600 rounded-lg bg-white flex items-center justify-center hover:bg-emerald-50"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 border border-emerald-600 rounded-lg bg-white flex items-center justify-center hover:bg-emerald-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
