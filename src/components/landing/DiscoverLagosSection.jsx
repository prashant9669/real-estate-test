import Button from "../Button";
import AnimatedWrapper from "../AnimatedWrapper";

export default function DiscoverLagosSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* subtle city dots / pattern bg – replace with your own image if you want */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(circle_at_top,_#cbd5f54d,_transparent_55%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ================== TOP: TEXT + 4 CARDS ================== */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-12">
          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h2 className="text-[40px] leading-snug md:text-5xl font-medium text-black tracking-tight">
              Discover <span className="text-[#3FD797]">Lagos</span>{" "}
              Neighborhood <span className="text-[#3FD797]">Trends</span> and{" "}
              <span className="text-[#3FD797]">Insights</span>
            </h2>

            <p className="mt-4 text-[15px] md:text-lg text-slate-600 max-w-md">
              Discover trending areas and property values to make smarter
              investment decisions.
            </p>

            <Button className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-6 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-500/10">
              View All
              <span className="text-lg leading-none">→</span>
            </Button>

            {/* ================== BOTTOM: INFO CARDS + BIG IMAGE ================== */}
        <div className="grid gap-10  items-stretch">
          {/* LEFT 2 CARDS */}
          <AnimatedWrapper>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* WHAT'S GREAT */}
              <div className="relative overflow-hidden rounded-2xl border border-emerald-50 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4 10.5L8 14.5L16 6.5"
                        stroke="#10B981"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  What’s great here!
                </h4>
                <ul className="space-y-2 text-xs md:text-[13px] leading-relaxed text-slate-600">
                  <li>• Popular hub with modern 2BHK and 3BHK apartments.</li>
                  <li>• Close to business centers like Victoria Island and Ikoyi.</li>
                  <li>• Shopping malls, schools, and hospitals within short distance.</li>
                  <li>• Strong demand from diaspora buyers and long-term investors.</li>
                </ul>
              </div>

              {/* NEEDS ATTENTION */}
              <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-50">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 4v6"
                        stroke="#F97316"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="10"
                        cy="14.5"
                        r="1"
                        fill="#F97316"
                      />
                    </svg>
                  </span>
                  What needs attention!
                </h4>
                <ul className="space-y-2 text-xs md:text-[13px] leading-relaxed text-slate-600">
                  <li>• Traffic congestion on Lekki–Epe Expressway during rush hours.</li>
                  <li>• Property prices are higher than suburban alternatives.</li>
                  <li>• Limited land supply restricts large new developments.</li>
                </ul>
              </div>
            </div>
          </AnimatedWrapper>

         
        </div>
          </div>

          {/* RIGHT – 4 SMALL AREA CARDS */}
          <AnimatedWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* IKOYI */}
              <div className="w-[260px] bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <div className="h-32 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
                    alt="Ikoyi aerial"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4 pb-4 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-lg bg-emerald-50 px-1.5 py-1 text-[11px] font-semibold text-emerald-600">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mr-1"
                      >
                        <path
                          d="M3 12.5L6.2 9.3L9.4 12.5L13.8 8.1L17 11.3"
                          stroke="#10B981"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Trend
                    </span>
                    <span className="text-sm font-medium text-slate-800">
                      Ikoyi
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-800">
                    +10% YoY Appreciation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#3FD797]">
                    Avg price: ₦ 55M
                  </p>
                </div>
              </div>

              {/* VICTORIA ISLAND */}
              <div className="w-[260px] bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <div className="h-32 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
                    alt="Victoria Island aerial"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4 pb-4 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-lg bg-emerald-50 px-1.5 py-1 text-[11px] font-semibold text-emerald-600">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mr-1"
                      >
                        <path
                          d="M3 12.5L6.2 9.3L9.4 12.5L13.8 8.1L17 11.3"
                          stroke="#10B981"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Trend
                    </span>
                    <span className="text-sm font-medium text-slate-800">
                      Victoria Island
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-800">
                    Affordable &amp; Growing
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#3FD797]">
                    Avg price: ₦ 24M
                  </p>
                </div>
              </div>

              {/* LEKKI */}
              <div className="w-[260px] bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <div className="h-32 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1542097246-020ba836eab5?auto=format&fit=crop&w=600&q=80"
                    alt="Lekki aerial"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4 pb-4 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-lg bg-emerald-50 px-1.5 py-1 text-[11px] font-semibold text-emerald-600">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mr-1"
                      >
                        <path
                          d="M3 12.5L6.2 9.3L9.4 12.5L13.8 8.1L17 11.3"
                          stroke="#10B981"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Trend
                    </span>
                    <span className="text-sm font-medium text-slate-800">
                      Lekki
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-800">
                    Luxury Demand Rising
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#3FD797]">
                    Avg price: ₦ 85M
                  </p>
                </div>
              </div>

              {/* AJAH */}
              <div className="w-[260px] bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <div className="h-32 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=600&q=80"
                    alt="Ajah aerial"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="px-4 pb-4 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-lg bg-emerald-50 px-1.5 py-1 text-[11px] font-semibold text-emerald-600">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mr-1"
                      >
                        <path
                          d="M3 12.5L6.2 9.3L9.4 12.5L13.8 8.1L17 11.3"
                          stroke="#10B981"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Trend
                    </span>
                    <span className="text-sm font-medium text-slate-800">
                      Ajah
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-800">
                    Popular among young
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#3FD797]">
                    Avg price: ₦ 31M
                  </p>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>

        
      </div>
    </section>
  );
}
