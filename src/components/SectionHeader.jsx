export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-black">{title}</h2>
      {subtitle && (
        <p className="text-lightText mt-2">{subtitle}</p>
      )}
    </div>
  );
}
