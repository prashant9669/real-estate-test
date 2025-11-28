// src/components/sections/FAQSection.jsx

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../../data/landingData";
import AnimatedWrapper from "../AnimatedWrapper";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative py-20">
      <div
        className="bg-[url('./assets/building.jpg')] absolute inset-0  bg-cover bg-center"
        aria-hidden="true"
      />
      

      <div className="relative container mx-auto px-6 flex flex-col lg:flex-row  gap-10">
        <div className="w-[40%] text-white">
          <h2 className="text-4xl md:text-5xl lg:text-5xl  leading-tight">
            Real Estate{" "}
            <span className="text-[#3FD797]">FAQs</span>
            <br />
            for
            <br />
            Buyers &amp; Investors
          </h2>
        </div>

        <div className="w-full ">
          <div className="bg-white/5 border border-white/10 rounded-[32px] px-6 md:px-10 py-6 md:py-8 text-white backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <AnimatedWrapper key={item.question}>
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className={`w-full bg-transparent text-left py-4 md:py-5 flex items-center gap-4 border-b-0 border-white/10 last:border-b-1 group`}
                  >
                    <div className="flex-1">
                      <p className="text-sm md:text-base font-medium">
                        {item.question}
                      </p>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full border transition-all duration-300
                      ${
                        isOpen
                          ? "border-[#3FD797] bg-[#3FD797]/10"
                          : "border-[#3FD797]/60 bg-transparent"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 text-[#3FD797] ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>
                </AnimatedWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
