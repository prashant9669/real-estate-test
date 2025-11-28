import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyGallery from "../components/PropertyGallery";
import AgentInfoCard from "../components/AgentInfoCard";
import { MapPin, School, Hospital, Utensils, Building2 } from "lucide-react";

export default function PropertyDetailsPage() {
  const IMAGES = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    "https://images.unsplash.com/photo-1586105251261-72a756497a12",
    "https://images.unsplash.com/photo-1600585154356-596af9009e82",
    "https://images.unsplash.com/photo-1600585153837-0c8c8f775012",
    "https://images.unsplash.com/photo-1600585154234-da1bbf130a99",
  ];

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <div className="container mx-auto px-6 py-10">

        {/* GALLERY */}
        <PropertyGallery images={IMAGES} />

        {/* TITLE + PRICE */}
        <div className="mt-10 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold">Imperial Crest Residences</h1>
            <p className="mt-2 text-sm text-slate-600">
              Plot No. 14, Dr. Annie Besant Road, Worli, Mumbai
            </p>
          </div>

          <div className="text-right">
            <p className="text-3xl font-bold text-black">₹3.8 Cr</p>
            <p className="text-slate-500 text-sm">₹8000/sqft</p>
          </div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-12">

            {/* DESCRIPTION */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quos habitant donec aliquet interdum massa bibendum tellus.
              </p>
            </section>

            {/* PROPERTY DETAILS */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Property details</h2>

              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <p>Total area: <span className="font-semibold">100 sq.ft</span></p>
                <p>Elevator: <span className="font-semibold">2</span></p>

                <p>Bedrooms: <span className="font-semibold">2</span></p>
                <p>Parking: <span className="font-semibold">Yes</span></p>

                <p>Bathrooms: <span className="font-semibold">2</span></p>
                <p>Wi-Fi: <span className="font-semibold">Yes</span></p>

                <p>Floor: <span className="font-semibold">3rd</span></p>
                <p>Cable TV: <span className="font-semibold">Yes</span></p>

                <p>Construction year: <span className="font-semibold">2020</span></p>
              </div>
            </section>

            {/* NEARBY SECTION */}
            <section>
              <h2 className="text-xl font-semibold mb-4">What's nearby</h2>

              {/* Education */}
              <div className="mb-6">
                <div className="flex gap-2 items-center mb-2 font-medium">
                  <School size={18} /> Education
                </div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Allen Academy – 0.089km</li>
                  <li>St. Joseph School – 0.028km</li>
                  <li>George Washington School – 0.059km</li>
                </ul>
              </div>

              {/* Health */}
              <div className="mb-6">
                <div className="flex gap-2 items-center mb-2 font-medium">
                  <Hospital size={18} /> Health & Medicine
                </div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Allen Hospital – 0.087km</li>
                  <li>St. Joseph Health Center – 0.028km</li>
                  <li>George Washington Clinic – 0.059km</li>
                </ul>
              </div>

              {/* Food */}
              <div className="mb-6">
                <div className="flex gap-2 items-center mb-2 font-medium">
                  <Utensils size={18} /> Food
                </div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Cafe Aroma – 0.089km</li>
                  <li>Starlight Dine – 0.028km</li>
                  <li>Urban Hut – 0.059km</li>
                </ul>
              </div>

              {/* Culture */}
              <div className="mb-6">
                <div className="flex gap-2 items-center mb-2 font-medium">
                  <Building2 size={18} /> Culture
                </div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Heritage Museum – 0.086km</li>
                  <li>City Art Center – 0.028km</li>
                  <li>Modern Gallery – 0.059km</li>
                </ul>
              </div>
            </section>

            {/* MAP */}
            <section>
              <h2 className="text-xl font-semibold mb-3">Location map</h2>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609825886!2d72.74110190517925!3d19.082197839449975"
                width="100%"
                height="350"
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl border"
              ></iframe>
            </section>

            {/* APARTMENT PLAN */}
            <section className="bg-[#0B0D27] text-white p-10 rounded-xl">
              <h2 className="text-xl font-semibold mb-6">Apartment plan</h2>
              <img
                src="https://via.placeholder.com/600x300?text=Floor+Plan"
                className="mx-auto opacity-90"
                alt=""
              />
            </section>

          </div>

          {/* RIGHT COLUMN (AGENT + RELATED PROPERTIES) */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-4">Agent Information</h2>
              <AgentInfoCard />
            </section>

            {/* Related */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Related Properties</h2>

              <div className="border rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1586105251261-72a756497a12"
                  alt=""
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold">
                    Skyline Heights – Luxury Residences
                  </h3>
                  <p className="text-xs text-slate-600">
                    Bandra West, Mumbai
                  </p>

                  <p className="mt-2 font-semibold text-sm">
                    ₹1.9 Cr – ₹3.2 Cr
                  </p>

                  <div className="flex gap-4 text-xs mt-3">
                    <p>3 Beds</p>
                    <p>2 Baths</p>
                    <p>1200 sqft</p>
                    <p>3 Garages</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
