import Button from "../Button";
import AnimatedWrapper from "../AnimatedWrapper";
import { AGENTS } from "../../data/landingData";
import Carousel from "../Carousel";

export default function AgentsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* HEADER */}
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

        {/* CARDS / CAROUSEL */}
        <Carousel
          items={AGENTS}
          renderItem={(card) => (
            <AnimatedWrapper key={card.name}>
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.18)] bg-slate-900/5">
                <div
                  className="relative w-full h-[600px] aspect-[4/5] bg-slate-200 bg-center bg-cover"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                 
                  <div className="absolute top-4 left-4 flex gap-2">
                    {card.verified && (
                      <span className="rounded-full bg-white/95 text-[11px] font-semibold px-3 py-1 shadow">
                        Verified
                      </span>
                    )}
                    {card.topRated && (
                      <span className="rounded-full bg-white/95 text-[11px] font-semibold px-3 py-1 shadow">
                        Top rated
                      </span>
                    )}
                  </div>

                  
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
          )}
        />
      </div>
    </section>
  );
}
