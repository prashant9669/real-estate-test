import { useState } from "react";
import ImageModal from "./ImageModal";

export default function PropertyGallery({ images }) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleOpen = (index) => {
    setStartIndex(index);
    setOpen(true);
  };

  return (
    <>
      {/* MAIN GALLERY */}
      <div className="grid grid-cols-4 gap-4">
        {/* BIG IMAGE */}
        <div
          className="col-span-3 h-[380px] rounded-xl overflow-hidden cursor-pointer"
          onClick={() => handleOpen(0)}
        >
          <img
            src={images[0]}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* RIGHT SMALL IMAGES */}
        <div className="flex flex-col gap-4">
          {images.slice(1, 4).map((img, index) => (
            <div
              key={index}
              className="h-[118px] rounded-xl overflow-hidden cursor-pointer relative"
              onClick={() => handleOpen(index + 1)}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt=""
              />

              {/* LAST IMAGE WITH OVERLAY */}
              {index === 2 && (
                <div
                  onClick={() => handleOpen(0)}
                  className="absolute inset-0 bg-black/60 text-white flex items-center justify-center text-3xl font-semibold"
                >
                  +{images.length - 3}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE MODAL */}
      {open && (
        <ImageModal
          images={images}
          startIndex={startIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
