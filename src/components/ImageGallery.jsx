import { useState } from "react";

export default function ImageGallery({ images }) {
  const [main, setMain] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main */}
      <div className="w-full h-72 rounded-lg overflow-hidden bg-gray-700">
        <img src={main} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setMain(img)}
            className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border ${
              main === img ? "border-primary" : "border-white/20"
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
