// src/components/sections/TopLocationsSection.jsx

import { TOP_LOCATIONS } from "../../data/landingData";
import hostspot from "../../assets/Hotspot.png";

export default function TopLocationsSection() {
    return (
        <section className="relative h-[100vh] bg-slate-50 overflow-hidden text-slate-900">
            {/* MAP BACKGROUND */}
            <div className="absolute inset-0">
                <img
                    src={hostspot}
                    alt=""
                    className="w-full h-full object-cover"
                />
            
            </div>

            {/* CONTENT */}
            <div className="relative h-full container mx-auto flex flex-col items-center pt-16">
                {/* HEADER */}
                <div className="text-center max-w-7xl">
                    <h2 className="text-3xl md:text-8xl  leading-snug">
                        <span className="text-[#13A655]">Top locations</span>{" "}
                        <span className="text-slate-900">
                            we recommend
                            <br />
                            based on interest
                        </span>
                    </h2>
                    <p className="mt-6 text-xl  text-slate-500">
                        Discover properties that match your lifestyle and search needs
                    </p>
                </div>

                {/* MAP PINS LAYER */}
                <div className="relative mt-12 w-full flex-1">
                    {TOP_LOCATIONS.map((loc) => (
                        <div
                            key={loc.id}
                            className={`group absolute ${loc.positionClass} transform -translate-x-1/2 -translate-y-1/2`}
                        >
                            {/* WRAPPER */}
                            <div
                                className="
                                        relative w-16 h-16 md:w-20 md:h-20    
                                        group-hover:w-72 group-hover:h-80 md:group-hover:w-80 md:group-hover:h-[340px]
                                        bg-white border border-slate-200 shadow-[0_15px_35px_rgba(15,23,42,0.35)]
                                        rounded-full group-hover:rounded-2xl
                                        overflow-hidden cursor-pointer
                                        transition-all duration-500 ease-out
                                        "
                            >
                                {/* IMAGE */}
                                <img
                                    src={loc.image}
                                    alt=""
                                    className="
        w-full h-full object-cover
        transition-all duration-500 ease-out
        group-hover:h-40
      "
                                />

                                <div
                                    className="
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500 delay-200 ease-out
        p-4
      "
                                >
                                    <p className="text-[11px] uppercase tracking-wide text-emerald-500 font-semibold">
                                        {loc.type}
                                    </p>
                                    <h3 className="mt-1 text-base md:text-lg font-semibold text-slate-900">
                                        {loc.propertyTitle}
                                    </h3>
                                    <p className="mt-1 text-xs md:text-sm text-slate-500">
                                        {loc.propertyLocation}
                                    </p>

                                    <div className="mt-3 flex items-center justify-between">
                                        <p className="text-xs text-slate-400">{loc.desc}</p>
                                        <p className="text-sm md:text-base font-semibold text-emerald-600">
                                            {loc.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}
