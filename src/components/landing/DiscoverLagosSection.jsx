import Button from "../Button";
import AnimatedWrapper from "../AnimatedWrapper";
import bgPattern from "../../assets/abuja.png";

export default function DiscoverLagosSection() {
  return (
    <section className="relative  py-20 overflow-hidden"
     style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
    >
      {/* LIGHT CITY PATTERN BACKDROP */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-[-120px] h-[420px] bg-[url('./assets/city-dots.png')] bg-bottom bg-no-repeat opacity-40" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* ================= LEFT: HEADING + BUTTON + INFO CARDS ================= */}
          <div className="max-w-xl">
            <AnimatedWrapper>
              <h2 className="text-[38px] leading-[1.15] md:text-[44px] font-semibold text-black tracking-tight">
                Discover <span className="text-[#3FD797]">Lagos</span>{" "}
                Neighborhood <span className="text-[#3FD797]">Trends</span> and{" "}
                <span className="text-[#3FD797]">Insights</span>
              </h2>

              <p className="mt-4 text-[15px] md:text-[16px] text-slate-600 max-w-md">
                Discover trending areas and property values to make smarter
                investment decisions.
              </p>

              <Button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3FD797] px-6 py-2 text-sm font-medium text-white shadow-[0_14px_30px_rgba(34,197,94,0.35)] hover:bg-[#27c381] transition">
                View All
                <span className="text-lg leading-none">→</span>
              </Button>
            </AnimatedWrapper>

            {/* INFO CARDS ROW */}
            <div className="mt-10">
              <AnimatedWrapper>
                <div className="grid gap-6 sm:grid-cols-2 items-stretch">
                  {/* WHAT'S GREAT */}
                  <div className="relative overflow-hidden rounded-2xl border border-emerald-50 bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                    <h4 className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-slate-800">
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
                    <ul className="space-y-2 text-[12px] md:text-[13px] leading-relaxed text-slate-600">
                      <li>
                        Popular hub with modern 2BHK and 3BHK apartments.
                      </li>
                      <li>
                        Close to business centers like Victoria Island and
                        Ikoyi.
                      </li>
                      <li>
                        Shopping malls, schools, and hospitals within short
                        distance.
                      </li>
                      <li>
                        Strong demand from diaspora buyers and long-term
                        investors.
                      </li>
                    </ul>
                  </div>

                  {/* WHAT NEEDS ATTENTION */}
                  <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                    <h4 className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-slate-800">
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
                          <circle cx="10" cy="14.5" r="1" fill="#F97316" />
                        </svg>
                      </span>
                      What needs attention!
                    </h4>
                    <ul className="space-y-2 text-[12px] md:text-[13px] leading-relaxed text-slate-600">
                      <li>
                        Traffic congestion on Lekki–Epe Expressway during rush
                        hours.
                      </li>
                      <li>Property prices are higher than suburban options.</li>
                      <li>
                        Limited land supply restricts large new developments.
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>

          {/* ================= RIGHT: AREA CARDS GRID ================= */}
          <AnimatedWrapper>
            <div className="grid grid-cols-2 gap-6 w-full max-w-xl lg:mt-4">
              {/* CARD BASE */}
              {[
                {
                  area: "Ikoyi",
                  tag: "+10% YoY Appreciation",
                  price: "₦ 55M",
                  img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
                },
                {
                  area: "Victoria Island",
                  tag: "Affordable & Growing",
                  price: "₦ 24M",
                  img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
                },
                {
                  area: "Lekki",
                  tag: "Luxury Demand Rising",
                  price: "₦ 85M",
                  img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
                },
                {
                  area: "Ajah",
                  tag: "Popular among young",
                  price: "₦ 31M",
                  img: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=800&q=80",
                },
              ].map((card) => (
                <div
                  key={card.area}
                  className="bg-white rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.12)] overflow-hidden aspect-[4/3] flex flex-col"
                >
                  {/* IMAGE + LABEL */}
                  <div className="relative h-[55%] w-full overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.area}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-[0_6px_18px_rgba(15,23,42,0.25)]">
                      <span className="inline-flex items-center justify-center rounded-md bg-emerald-50 p-[3px]">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M4 12.5L7.5 9l3 3 5-6"
                            stroke="#22C55E"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {card.area}
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="flex-1 px-4 pb-4 pt-3">
                    <p className="text-sm text-slate-800">{card.tag}</p>
                    <p className="mt-1 text-sm">
                      <span className="text-slate-500">Avg price: </span>
                      <span className="font-semibold text-[#3FD797]">
                        {card.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
