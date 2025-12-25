import { ArrowRight, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6 py-5 md:py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-pacifico text-waffle-chocolate">
              De <span className="text-waffle-strawberry">Enige Echte</span> Hartige Wafels van Nederland
            </h1>
            <p className="text-lg md:text-xl mb-8 text-waffle-chocolate/80">
              Onze signature waffle burger, philly cheese steak en bowl zijn nergens anders te vinden. 
              Ook heerlijke zoete varianten en onze nieuwe WaffleCups!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+31649100041" className="waffle-btn">
                Bel om te bestellen <Phone size={18} />
              </a>
              <Link to="/events" className="bg-waffle-pink text-waffle-strawberry hover:bg-waffle-pink/80 font-medium py-3 px-6 rounded-full transition-colors duration-300 inline-flex items-center gap-2">
                Ook op events! <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img
                src="/lovable-uploads/442e6b9e-a6ed-45b2-836b-1ada64824b2f.png"
                alt="Signature Wafel"
                className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-waffle-strawberry text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                <span className="text-sm">UNIEK IN NL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
