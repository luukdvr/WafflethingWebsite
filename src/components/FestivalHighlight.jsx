import { CalendarDays } from 'lucide-react';

const FestivalHighlight = () => {
  return (
    <section
      className="py-16 bg-gradient-to-br from-waffle-pink to-waffle-cream relative"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Boek Ons Voor Jouw Event!</h2>
            <p className="text-lg text-waffle-chocolate/80 mb-4">
              Onze foodtruck is dé hit op elk evenement! Met onze unieke hartige wafels (cheese burger & steak) 
              en heerlijke zoete varianten zorgen we voor een onvergetelijke culinaire ervaring.
            </p>
            <p className="text-base text-waffle-chocolate/80 mb-6">
              🍔 Premium Kwaliteit • 🌟 Alleen bij ons • 🎉 Perfect voor festivals, bruiloften & bedrijfsfeesten
            </p>
            <a 
              href="/events" 
              className="inline-flex items-center gap-2 bg-waffle-strawberry text-white hover:bg-waffle-caramel font-semibold py-3 px-8 rounded-full transition-colors"
            >
              <CalendarDays size={20} />
              Boek Nu
            </a>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/c0aa3dd4-3958-4b56-8072-edcde9ffc2ed.png"
                alt="It's a Waffle Thing Foodtruck"
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-waffle-chocolate mb-1">It's a Waffle Thing</h3>
                  <p className="text-gray-700">Unieke hartige wafels voor jouw event!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-waffle-cream/50 z-0"></div>
    </section>
  );
};

export default FestivalHighlight;
