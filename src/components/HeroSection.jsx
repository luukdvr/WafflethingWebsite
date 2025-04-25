
import { ArrowRight, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-waffle-cream to-waffle-pink min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-waffle-caramel/5 pattern-waffle"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ontdek de Heerlijkste <span className="text-waffle-strawberry">Wafels</span> van Nederland
            </h1>
            <p className="text-lg md:text-xl mb-8 text-waffle-chocolate/80">
              Huisgemaakte wafels met de verrukkelijkste toppings, ambachtelijk bereid en perfect voor elk moment van de dag.
            </p>
            
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 mb-8">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-waffle-strawberry" />
                  <div>
                    <h3 className="font-bold">Openingstijden</h3>
                    <p>Dinsdag t/m Zondag: 11:00 - 20:00</p>
                    <p className="text-sm text-waffle-chocolate/70">Maandag gesloten</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-waffle-strawberry" />
                  <div>
                    <h3 className="font-bold">Telefonisch bestellen</h3>
                    <p>06 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+31612345678" className="waffle-btn">
                Bel om te bestellen <Phone size={18} />
              </a>
              <Link to="/festivals" className="bg-waffle-pink text-waffle-strawberry hover:bg-waffle-pink/80 font-medium py-3 px-6 rounded-full transition-colors duration-300 inline-flex items-center gap-2">
                Bekijk festivals <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img
                src="/lovable-uploads/442e6b9e-a6ed-45b2-836b-1ada64824b2f.png"
                alt="Heerlijke wafel met aardbeien en slagroom"
                className="w-full h-full object-cover rounded-full shadow-xl animate-float border-8 border-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-waffle-strawberry text-white w-24 h-24 rounded-full flex items-center justify-center font-bold transform rotate-12 shadow-lg">
                <span className="text-sm">NIEUW!</span>
              </div>
              <div className="absolute -top-6 -left-6 bg-waffle-caramel text-white w-20 h-20 rounded-full flex items-center justify-center font-pacifico transform -rotate-12 shadow-lg">
                <span className="text-sm">Wow!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
