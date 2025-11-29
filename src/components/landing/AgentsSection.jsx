import { useState } from "react";
import Button from "../Button";
import AnimatedWrapper from "../AnimatedWrapper";
import { AGENTS } from "../../data/landingData";

export default function AgentsSection() {
  // ==== SLIDER LOGIC (same pattern as ServicesSection) ====
  const [current, setCurrent] = useState(0);
  const cardsPerSlide = 4;
  const total = Math.ceil(AGENTS.length / cardsPerSlide); // 4 agents per slide

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const progress = ((current + 1) / total) * 100;

  // chunk agents into groups of 4
  const chunked = [];
  for (let i = 0; i < AGENTS.length; i += cardsPerSlide) {
    chunked.push(AGENTS.slice(i, i + cardsPerSlide));
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-slate-900">
              Meet PROTIVA&apos;s{" "}
              <span className="text-[#13A655]">Verified Agents</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-500 max-w-xl">
              Connect with trusted, NIN-verified professionals ready to guide
              your property journey.
            </p>
          </div>

          <Button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#13A655] hover:bg-[#0f8544] text-white text-sm md:text-base font-semibold px-6 py-3 shrink-0">
            Explore agents
            <span className="text-lg leading-none">→</span>
          </Button>
        </div>

        {/* ================= CARDS CAROUSEL ================= */}
        <div className="overflow-hidden">
          <div
            className="flex transition-all duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {chunked.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full flex-shrink-0"
              >
                {group.map((card, index) => (
                  <AnimatedWrapper key={card.name || index}>
                    <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.18)] bg-slate-900/5">
                      <div
                        className="relative w-full aspect-[4/5] bg-slate-200 bg-center bg-cover"
                        style={{ backgroundImage: `url(${card.image})` }}
                      >
                        {/* gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          {card.verified && (
                            <span className="rounded-full bg-white/95 text-black text-[11px] font-semibold px-3 py-1 shadow">
                              Verified
                            </span>
                          )}
                          {card.topRated && (
                            <span className="rounded-full bg-white/95 text-black text-[11px] font-semibold px-3 py-1 shadow">
                              Top rated
                            </span>
                          )}
                        </div>

                        {/* bottom info */}
                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                          <div className="rounded-2xl bg-black/55 backdrop-blur-sm px-4 py-3">
                            <p className="text-base sm:text-lg font-semibold text-white mb-1">
                              {card.name}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-100/95 mb-1">
                              {card.role}
                            </p>
                            <p className="text-[11px] sm:text-xs text-slate-200/85">
                              {card.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ================= SLIDER CONTROLS ================= */}
        <div className="flex justify-between items-center mt-10">
          {/* slide count */}
          <p className="text-slate-700 text-xl">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>

          {/* progress bar */}
          <div className="flex-1 mx-6">
            <div className="w-full h-[2px] bg-slate-200">
              <div
                className="h-[2px] bg-emerald-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 border text-emerald-600 border-emerald-600 rounded-lg bg-white flex items-center justify-center hover:bg-emerald-50"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-10 h-10 border text-emerald-600 border-emerald-600 rounded-lg bg-white flex items-center justify-center hover:bg-emerald-50"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
