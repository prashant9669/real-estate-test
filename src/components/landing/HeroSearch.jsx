import AnimatedWrapper from "../AnimatedWrapper";
import {
  HERO_TABS,
  PROPERTY_TYPE_OPTIONS,
  CATEGORY_OPTIONS,
  BUDGET_OPTIONS,
} from "../../data/landingData";

export default function HeroSearch() {
  return (
    <section className=" relative pt-24 pb-10 h-[100vh]">
      <div
        className="absolute inset-0 bg-[url('./assets/bg.jpeg')] bg-cover bg-center"
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-b from-black/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative container mx-auto  h-full flex flex-col justify-end pb-10">
        <AnimatedWrapper>
          <div className="w-full bg-darkCard/20 border border-white/10 rounded-2xl shadow-xl backdrop-blur">
            <div className="flex gap-2 mb-6 text-lg font-medium p-5 pb-0">
              {HERO_TABS.map((tab, i) => (
                <button
                  key={tab}
                  className={`px-6 py-3 border font-bold transition-all ${
                    i === 0
                      ? "bg-transparent text-white border-b-[#3FD797]"
                      : "border-b bg-transparent text-white hover:border-primary/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex text-sm gap-3 w-full items-center bg-black/10 border border-white/10 p-5 rounded-2xl shadow-xl backdrop-blur">
              {/* Search input */}
              <div className="relative flex-3">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="bg-transparent border border-gray-300 rounded-xl px-4 py-4 text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-white w-full pl-12"
                  placeholder="Enter city, locality, project"
                />
              </div>

              {/* Property type */}
              <div className="relative flex-1">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <select className="bg-transparent border border-gray-300 rounded-xl px-4 py-4 text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-full pl-12 appearance-none cursor-pointer">
                  {PROPERTY_TYPE_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div className="relative flex-1">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <select className="bg-transparent border border-gray-300 rounded-xl px-4 py-4 text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-full pl-12 appearance-none cursor-pointer">
                  {CATEGORY_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div className="relative flex-1">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                <select className="bg-transparent border border-gray-300 rounded-xl px-4 py-4 text-[16px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-full pl-12 appearance-none cursor-pointer">
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <button className="py-4 text-sm flex-1 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-medium shadow-lg">
                Search
              </button>
            </div>
          </div>
        </AnimatedWrapper>

        <div className="text-center mt-6">
          <p className="text-lg text-white/80 backdrop-blur bg-darkCard/20 border border-white/10 rounded-2xl shadow-xl backdrop-blur px-6 py-3 inline-block">
            Are you a property owner?{" "}
            <span className="text-primary text-[#3FD797] cursor-pointer font-medium">
              Post for free
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
