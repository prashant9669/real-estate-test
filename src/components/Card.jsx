export default function Card({ image, title, subtitle, price }) {
  return (
    <div className="bg-darkCard border border-white/10 rounded-xl overflow-hidden hover:-translate-y-2 transition duration-300 hover:shadow-xl">
      <div className="w-full h-48 bg-gray-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        {subtitle && (
          <p className="text-lightText mt-1 text-sm">{subtitle}</p>
        )}
        {price && (
          <p className="text-primary mt-2 font-semibold">{price}</p>
        )}
      </div>
    </div>
  );
}
