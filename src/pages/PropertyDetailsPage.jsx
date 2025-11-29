// pages/PropertyDetailsPage.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyGallery from "../components/PropertyGallery";
import AgentInfoCard from "../components/AgentInfoCard";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/dream1.jpg";

// ================== DYNAMIC DATA ==================
const IMAGES = [
  // yahan tum apni local imported images bhi de sakte ho
  image1,image2,image3,image4,image5
];

const BASIC_STATS = [
  { label: "Price", value: "₹3.8 Cr" },
  { label: "Bedrooms", value: "3" },
  { label: "Bathrooms", value: "3" },
  { label: "Area", value: "1,850 sqft" },
];

const TABS = [
  "Description",
  "Information",
  "Essential info",
  "Facts & features",
  "Price history",
];

const ESSENTIAL_INFO = [
  { label: "Transaction", value: "For Sale" },
  { label: "Property type", value: "Apartment" },
  { label: "Structure", value: "New" },
  { label: "Floor", value: "12 of 20" },
  { label: "Bedrooms", value: "3" },
  { label: "Bathrooms", value: "3" },
  { label: "Parking", value: "2 Covered" },
  { label: "Year built", value: "2020" },
];

const FACTS_FEATURES_GROUPS = [
  {
    title: "Interior",
    items: [
      "Fully furnished",
      "Modular kitchen",
      "Air conditioning",
      "Built-in wardrobes",
    ],
  },
  {
    title: "Exterior",
    items: ["Balcony", "Garden view", "Gated society", "Kids play area"],
  },
  {
    title: "Utilities",
    items: ["Power backup", "24x7 water", "High-speed internet", "Gas pipeline"],
  },
  {
    title: "Community",
    items: ["Clubhouse", "Swimming pool", "Gym", "Indoor games"],
  },
];

const FACILITIES = [
  "Restaurant",
  "Free parking",
  "Kids friendly",
  "Breakfast included",
  "Pet allowed",
  "Smoke free rooms",
];

const NEARBY_SCHOOLS = [
  {
    name: "Oxford International School",
    distance: "0.4 km",
    rating: 4.6,
  },
  {
    name: "City Montessori High School",
    distance: "0.9 km",
    rating: 4.4,
  },
  {
    name: "Sunrise Kids Academy",
    distance: "1.2 km",
    rating: 4.3,
  },
];

const NEARBY_HEALTH = [
  {
    name: "Lotus Multispeciality Hospital",
    distance: "0.6 km",
    rating: 4.5,
  },
  {
    name: "City Care Medical Center",
    distance: "1.0 km",
    rating: 4.2,
  },
  {
    name: "GreenLife Diagnostics",
    distance: "1.4 km",
    rating: 4.1,
  },
];



export default function PropertyDetailsPage() {
  return (
    <div className="bg-[#F9FAFB] text-slate-900 min-h-screen">
      
        <Navbar />
      <main className="container mx-auto px-4 lg:px-0 pt-28 pb-16">
       
        <PropertyGallery images={IMAGES} />

    
        <section className="mt-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">
                136 Canterbury Lane
              </h1>
              <p className="mt-1 text-xs md:text-sm text-slate-500">
                Lowerdensity, MI 80053
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-2xl md:text-3xl font-bold text-emerald-600">
                839,000
              </p>
              <p className="text-xs md:text-sm text-slate-500">
                Studio • 2 bd • 2 ba • 1,315 sqft
              </p>
            </div>
          </div>

          {/* SMALL STATS BOXES */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {BASIC_STATS.map((item) => (
              <div
                key={item.label}
                className="border border-slate-200 rounded-lg px-3 py-2 bg-white"
              >
                <p className="text-[11px] text-slate-500">{item.label}</p>
                <p className="text-sm font-semibold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =============== MAIN LAYOUT =============== */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(260px,0.9fr)] gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* TABS */}
            <div className="border-b border-slate-200 overflow-x-auto">
              <div className="flex gap-6 text-xs md:text-sm whitespace-nowrap">
                {TABS.map((tab, idx) => (
                  <button
                    key={tab}
                    type="button"
                    className={`py-3 border-b-2 ${
                      idx === 0
                        ? "border-emerald-500 text-emerald-600 font-medium"
                        : "border-transparent text-slate-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-2">
                Description
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Welcome to your living room in the highly sought-after Rolling
                Meadows community of Lowerdensity. This elegant 3-bedroom,
                2-bathroom smart home offers an open-concept layout with floor
                to ceiling windows, premium wood flooring, and a sun-drenched
                balcony with park views. The modern kitchen features quartz
                countertops, a breakfast bar, and fully integrated appliances.
              </p>
            </div>

            {/* LOCATION MAP */}
            <div className="space-y-3">
              <h2 className="text-base md:text-lg font-semibold">
                Local information
              </h2>
              <div className="w-full h-72 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.028300360014!2d75.8615113753039!3d22.689990379408282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcfabafa14b9%3A0x8c7a302459aaec0!2sDollop%20Infotech%20Pvt.%20Ltd.%20%7C%20Indore%20%7C%20India!5e0!3m2!1sen!2sin!4v1764409566971!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen=""
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* ESSENTIAL INFO */}
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-3">
                Essential info
              </h2>
              <div className="bg-white rounded-xl border border-slate-200 p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] md:text-xs">
                {ESSENTIAL_INFO.map((item) => (
                  <div key={item.label}>
                    <p className="text-slate-500">{item.label}</p>
                    <p className="font-semibold mt-1 text-slate-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FACTS & FEATURES */}
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-3">
                Facts & features
              </h2>
              <div className="bg-white rounded-xl border border-slate-200 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] md:text-xs">
                {FACTS_FEATURES_GROUPS.map((group) => (
                  <div key={group.title}>
                    <p className="font-semibold mb-2 text-slate-900">
                      {group.title}
                    </p>
                    <ul className="space-y-1 text-slate-600">
                      {group.items.map((it) => (
                        <li key={it}>• {it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* FACILITIES */}
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-3">
                Facilities
              </h2>
              <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap gap-2 text-[11px] md:text-xs">
                {FACILITIES.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* VIRTUAL TOUR */}
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-3">
                Virtual tour
              </h2>
              <div className="relative overflow-hidden rounded-xl bg-black h-56 md:h-64">
                {/* yahan bhi tum apna real video/iframe daal sakte ho */}
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a5345e273?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="w-full h-full object-cover opacity-90"
                />
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow">
                    <span className="ml-0.5 border-l-[10px] border-l-slate-800 border-y-[6px] border-y-transparent" />
                  </span>
                </button>
              </div>
            </div>

            {/* NEARBY SECTION */}
            <div className="space-y-4">
              <h2 className="text-base md:text-lg font-semibold">
                What's nearby?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Schools */}
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs">
                  <h3 className="font-semibold mb-3 text-slate-900">School</h3>
                  <ul className="space-y-3">
                    {NEARBY_SCHOOLS.map((s) => (
                      <li
                        key={s.name}
                        className="flex items-center justify-between gap-3"
                      >
                        <div>
                          <p className="text-sm font-medium">{s.name}</p>
                          <p className="text-[11px] text-slate-500">
                            {s.distance} away
                          </p>
                        </div>
                        <span className="text-[11px] px-2 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700">
                          ★ {s.rating}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Health & Medical */}
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs">
                  <h3 className="font-semibold mb-3 text-slate-900">
                    Health & Medical
                  </h3>
                  <ul className="space-y-3">
                    {NEARBY_HEALTH.map((h) => (
                      <li
                        key={h.name}
                        className="flex items-center justify-between gap-3"
                      >
                        <div>
                          <p className="text-sm font-medium">{h.name}</p>
                          <p className="text-[11px] text-slate-500">
                            {h.distance} away
                          </p>
                        </div>
                        <span className="text-[11px] px-2 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700">
                          ★ {h.rating}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – STICKY AGENT CARD */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
              <h2 className="text-sm font-semibold mb-4">Agent details</h2>
              <AgentInfoCard />

              {/* Visit schedule small form – placeholder */}
              <div className="mt-5 border-t border-slate-200 pt-4 space-y-3">
                <p className="text-xs font-semibold text-slate-900">
                  Take a tour with agent
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    className="text-[11px] px-2 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <input
                    type="time"
                    className="text-[11px] px-2 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <input
                    type="text"
                    placeholder="Your name"
                    className="col-span-2 text-[11px] px-2 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button className="col-span-2 text-[11px] py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition">
                    Request info
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </section>

       
      </main>

      <Footer />
    </div>
  );
}
