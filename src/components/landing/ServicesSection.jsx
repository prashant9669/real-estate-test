import { useState } from "react";
import SectionHeader from "../SectionHeader";
import AnimatedWrapper from "../AnimatedWrapper";
import { SERVICES } from "../../data/landingData";
import Button from "../Button";

export default function ServicesSection() {
  const [current, setCurrent] = useState(0);
  const total = Math.ceil(SERVICES.length / 4); // 4 cards per slide

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const progress = ((current + 1) / total) * 100;

  // chunk data into groups of 4 (same logic as PopularCitiesSection)
  const chunked = [];
  for (let i = 0; i < SERVICES.length; i += 4) {
    chunked.push(SERVICES.slice(i, i + 4));
  }

  return (
    <section className="bg-[url('./assets/services.png')] bg-cover bg-center py-20 h-[100vh]">
      <div className="container mx-auto ">
        {/* ======= TOP HEADING + BUTTON (same as your code) ======= */}
        <div className="flex flex-col md:justify-between gap-6 mb-8 ">
          <div className="max-w-2xl relative text-start">
            <h2 className="relative z-11111 text-6xl font-medium text-black leading-tight">
              <span className="text-[#3FD797]">Reliable Services</span> to Guide
              Your Investments
            </h2>
          </div>
          <div className="justify-between flex w-full">
            <p className="mt-3 text-xl mb-2 text-start text-black leading-relaxed w-[30%]">
              Discover handpicked properties in Lagos's most desirable
              locations.
            </p>
            <Button className="self-start md:self-end border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2">
              View All →
            </Button>
          </div>
        </div>

        {/* ======= CARDS CAROUSEL (same behavior as PopularCitiesSection) ======= */}
        <div className="overflow-hidden mt-10">
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
                  <AnimatedWrapper key={card.title || index}>
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                      <div
                        className="h-[50vh] bg-slate-300 relative bg-cover bg-center"
                        style={{ backgroundImage: `url(${card.image})` }}
                      >
                        <div className="p-6 absolute top-0 text-center text-white w-full backdrop-blur-sm bg-gradient-to-b from-black/60 via-black/30 to-transparent">
                          <h3 className="text-4xl font-medium mb-1">
                            {card.title}
                          </h3>
                          <p className="text-white/80 text-lg mb-2">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ======= SLIDER CONTROLS (same style as Popular Cities) ======= */}
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
