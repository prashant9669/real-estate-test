import Button from "../Button";

export default function BottomSearchStrip() {
  return (
    <section className="bg-darkBg border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Find the best properties in Nigeria
          </h3>
          <p className="text-sm text-lightText/70 mt-1">
            Lagos • Buyers • Sellers • Tenants
          </p>
        </div>
        <div className="w-full lg:max-w-xl flex flex-col sm:flex-row gap-3">
          <input
            className="flex-1 bg-darkCard border border-white/15 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-primary placeholder:text-lightText/40"
            placeholder="Enter city or locality"
          />
          <Button className="w-full sm:w-auto">Search</Button>
        </div>
      </div>
    </section>
  );
}
