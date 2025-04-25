
import HeroSection from "../components/HeroSection";
import FeaturedWaffles from "../components/FeaturedWaffles";
import FestivalHighlight from "../components/FestivalHighlight";
import TestimonialsSection from "../components/TestimonialsSection";

const Index = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturedWaffles />
      <FestivalHighlight />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
