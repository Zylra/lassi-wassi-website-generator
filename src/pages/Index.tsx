import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FranchiseSection from "@/components/FranchiseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <LocationsSection />
      <TestimonialsSection />
      <FranchiseSection />
      <Footer />
    </div>
  );
};

export default Index;
