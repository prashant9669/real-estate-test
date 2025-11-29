import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ items, renderItem, itemsPerView = 3 }) {
  const [currentPage, setCurrentPage] = useState(0);

  const total = items.length;
  const totalPages = Math.ceil(total / itemsPerView);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const progress = ((currentPage + 1) / totalPages) * 100;

  // Pages banayenge: har page pe max itemsPerView items
  const pages = [];
  for (let i = 0; i < total; i += itemsPerView) {
    pages.push(items.slice(i, i + itemsPerView));
  }

  return (
    <div className="w-full">
      {/* Content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {pages.map((pageItems, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {pageItems.map((item, index) => (
                <div key={index}>{renderItem(item)}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="flex justify-between items-center mt-8">
        <p className="text-slate-600 flex flex-shrink-0 text-xl">
          {String(currentPage + 1).padStart(2, "0")} /{" "}
          {String(totalPages).padStart(2, "0")}
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
            className="w-10 h-10 border text-emerald-600 border-emerald-600 rounded-lg bg-white flex items-center justify-center hover:bg-emerald-50"                        >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 border text-emerald-600 border-emerald-600 rounded-lg bg-white flex items-center justify-center hover:bg-emerald-50"                        >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
