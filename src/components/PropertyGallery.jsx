// components/PropertyGallery.jsx
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function PropertyGallery({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openModal = (index) => {
    setStartIndex(index);
    setShowModal(true);
  };

  const mainImage = images[0];
  const sideImages = images.slice(1, 4); // 3 side images

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* MAIN IMAGE */}
        <button
          type="button"
          className="relative md:col-span-2 h-64 md:h-80 rounded-xl overflow-hidden group"
          onClick={() => openModal(0)}
        >
          <img
            src={mainImage}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            Click to view photos
          </span>
        </button>

        {/* RIGHT SIDE SMALL IMAGES */}
        <div className="grid grid-rows-3 gap-4 h-64 md:h-80">
          {sideImages.map((img, idx) => {
            const realIndex = idx + 1; // because main is 0
            const isLast = idx === 2 && images.length > 4;

            return (
              <button
                key={realIndex}
                type="button"
                onClick={() => openModal(realIndex)}
                className="relative rounded-xl overflow-hidden group"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />

                {/* LAST BOX WITH +24 OVERLAY */}
                {isLast && (
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                    <p className="text-white text-lg font-semibold">
                      +{images.length - 4}
                    </p>
                    <p className="text-white text-xs opacity-80 mt-1">
                      View all photos
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {showModal && (
        <ImageModal
          images={images}
          startIndex={startIndex}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
