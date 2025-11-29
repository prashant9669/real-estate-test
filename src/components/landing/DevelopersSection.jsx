import { useState } from "react";
import AnimatedWrapper from "../AnimatedWrapper";
import Button from "../Button";
import { DEVELOPERS } from "../../data/landingData";
import Icon from "../../assets/dream1.jpg";

export default function DevelopersSection() {
  return (
    <section className="relative bg-[url('./assets/building.jpg')] bg-cover bg-center h-[82vh] py-20 mt-[150px]">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-6 mb-8">
          <h2 className="text-6xl font-medium text-white leading-tight">
            Featured <span className="text-[#3FD797]">Developers</span> in Lagos
          </h2>

          <div className="flex justify-between w-full">
            <p className="text-xl text-white w-[30%] leading-relaxed">
              Prominent real-estate builders you can trust.
            </p>

            <Button className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2">
              View All →
            </Button>
          </div>
        </div>
      </div>

     
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-6">
        {DEVELOPERS.map((dev, index) => (
          <AnimatedWrapper key={index}>
            <DeveloperCard developer={dev} />
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
}

function DeveloperCard({ developer }) {
  const [activeTab, setActiveTab] = useState(developer.tabs[0]);

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-white shadow-xl">

     
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 bg-white/20 rounded-lg">
        <img src={Icon} alt="" className="w-12 h-12 object-cover" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold">{developer.name}</h3>

          <div className="flex gap-6 text-sm text-white/80 mt-1">
            <span>{developer.established}</span>
            <span>{developer.projects}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-white/70 leading-relaxed mt-3">
        {developer.description}
      </p>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/20 mt-4 pb-2">
        {developer.tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm pb-2 transition-all ${
              activeTab === tab
                ? "border-b-2 border-[#3FD797] text-white"
                : "text-white/60 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-4 overflow-x-scroll mt-4 pb-2 pr-3 scrollbar-hide">
        {developer.properties[activeTab].map((prop, i) => (
          <div
            key={i}
            className="min-w-[180px] bg-white/5 border border-white/10 rounded-lg p-2"
          >
            <div className="w-full h-32 bg-gray-500/30 rounded-md mb-2">
            <img src={prop.image} alt="" className=" w-full h-32 object-cover" />
            </div>

            <h4 className="text-sm">{prop.title}</h4>
            <p className="text-xs text-white/70 mt-1">
              Price: {prop.priceRange}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
