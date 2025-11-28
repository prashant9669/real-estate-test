import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Section components
import HeroSearch from "../components/landing/HeroSearch";
import DreamHomeSection from "../components/landing/DreamHomeSection";
import TopLocationsSection from "../components/landing/TopLocationsSection";
import FeaturedProjectSection from "../components/landing/FeaturedProjectSection";
import PopularCitiesSection from "../components/landing/PopularCitiesSection";
import ServicesSection from "../components/landing/ServicesSection";
import DevelopersSection from "../components/landing/DevelopersSection";
import DiscoverLagosSection from "../components/landing/DiscoverLagosSection";
import AgentsSection from "../components/landing/AgentsSection";
import FAQSection from "../components/landing/FAQSection";
import BigCtaBand from "../components/landing/BigCtaBand";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import BottomSearchStrip from "../components/landing/BottomSearchStrip";

export default function LandingPage() {
  return (
    <div className="text-lightText min-h-screen m-auto">
      <Navbar />

      <HeroSearch />
      <DreamHomeSection />
      <TopLocationsSection />
      <FeaturedProjectSection />
      <PopularCitiesSection />
      <ServicesSection />
      <DevelopersSection />
      <DiscoverLagosSection />
      <AgentsSection />
      <FAQSection />
      <BigCtaBand />
      <TestimonialsSection />
      <BottomSearchStrip />

      <Footer />
    </div>
  );
}
