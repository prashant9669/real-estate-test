import { useState } from "react";
import AnimatedWrapper from "../AnimatedWrapper";
import Hostspot from "../../assets/featureBG.avif";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedProjectSection() {
  const slides = [
    {
      id: 1,
      title: "A new icon of coastal living",
      highlight: "Eko Atlantic City",
      subtitle: "— by ITB Nigeria Ltd",
      desc: "This year's most talked about off-plan project exploring new horizons of ultra-luxury living in Nigeria. Choose one of three iconic automotive aesthetics for your ready-to-move-in interiors, complete with stunning lagoon views.",
      img: "/assets/featured-eko.jpg",
    },
    {
      id: 2,
      title: "World-class smart apartments",
      highlight: "Victoria Island — Lagos",
      subtitle: "",
      desc: "Premium waterfront homes with futuristic interiors, rooftop lounges and private marina access. Live where technology meets luxury.",
      img: "/assets/featured-2.jpg",
    },
    {
      id: 3,
      title: "Lagoon-facing luxury living",
      highlight: "Banana Island Residences",
      subtitle: "",
      desc: "A peaceful sanctuary of modern design, panoramic skyline views, and exclusive amenities for elite families.",
      img: "/assets/featured-3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const progress = ((current + 1) / total) * 100;

  return (
    <section className="relative h-[80vh] my-[100px] w-full overflow-hidden">

      <div className="absolute inset-0">
        <img src={Hostspot} className="w-full h-full object-cover" />
      </div>

      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[current].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

      <div className="relative h-full flex items-center">
        <div className="container mx-auto ">
          <AnimatedWrapper key={current}>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl max-w-xl border border-white/20">

              <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                {slides[current].title} <br />
                <span className="text-emerald-400">{slides[current].highlight}</span>{" "}
                <span className="text-white">{slides[current].subtitle}</span>
              </h2>

              <p className="text-sm text-white/90 mt-4 leading-relaxed">
                {slides[current].desc}
              </p>

              
            </div>
            <button className="mt-[150px] bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-xl text-sm font-semibold shadow-lg">
                See details →
              </button>
          </AnimatedWrapper>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 ">
        <div className="container mx-auto flex justify-between items-center">

          <p className="text-white text-xl tracking-wider">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>

          <div className="flex-1 mx-6">
            <div className="w-full h-[3px] bg-white/40 rounded-full">
              <div
                className="h-[3px] bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white/10 border border-white/40 rounded-lg flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-10 h-10 text-black bg-white/10 border border-white/40 rounded-lg flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
