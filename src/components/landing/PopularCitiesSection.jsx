import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button";
import { POPULAR_CITIES } from "../../data/landingData";
import textbg1 from "../../assets/bg.jpeg";
import bgPattern from "../../assets/abuja.png"; // your dotted building background

export default function PopularCitiesSection() {
  const [current, setCurrent] = useState(0);
  const total = Math.ceil(POPULAR_CITIES.length / 4); // 4 cards per slide

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const progress = ((current + 1) / total) * 100;

  const chunked = [];
  for (let i = 0; i < POPULAR_CITIES.length; i += 4) {
    chunked.push(POPULAR_CITIES.slice(i, i + 4));
  }

  return (
    <section
      className="relative py-20 bg-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 ml-[100px]">
          <div className="max-w-lg relative text-center">
            <img
              src={textbg1}
              className="absolute w-[180px] -left-[140px] -top-5 -z-1 rounded-[20px]"
            />
            <img
              src={textbg1}
              className="absolute w-[180px] -right-[50px] -bottom-10 -z-1 rounded-[20px]"
            />

            <h2 className="relative z-11111 text-6xl font-medium text-black leading-tight">
              <span className="text-white">P</span>opular{" "}
              <span className="text-emerald-500">cities</span> <br />
              that we cover
            </h2>
          </div>

          <div className="justify-self-end max-w-md flex flex-col w-[30%]">
            <p className="mt-3 text-xl mb-2 text-end leading-relaxed">
              Explore cities where quality living meets <br /> great
              opportunities.
            </p>
            <Button className="self-start md:self-end border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2">
              All cities →
            </Button>
          </div>
        </div>

        <div className="overflow-hidden mt-[150px]">
          <div
            className="flex transition-all duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {chunked.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full flex-shrink-0"
              >
                {group.map((city, index) => (
                  <div
                    key={index}
                    className="
                      group relative 
                      rounded-[32px] 
                      overflow-hidden 
                      
                      bg-white
                      h-[260px] sm:h-[320px] lg:h-[60vh]
                    "
                  >
                    <img
                      src={city.image}
                      alt={city.city}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div
                      className="
                        absolute top-5 left-0
                        rounded-r-2xl 
                        bg-slate-800/70 
                        px-5 py-3 
                        text-white 
                        text-left 
                        backdrop-blur-sm
                      "
                    >
                      <p className="text-base font-semibold leading-tight">
                        {city.city}
                      </p>
                      <p className="text-xs opacity-80 mt-1">
                        {city.properties}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

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
              className="w-10 h-10 bg-transparent border border-emerald-500 rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 bg-transparent border border-emerald-500 rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
