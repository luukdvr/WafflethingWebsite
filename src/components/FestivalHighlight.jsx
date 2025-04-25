
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

const FestivalHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-waffle-pink to-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vind ons op Festivals!</h2>
            <p className="text-lg text-waffle-chocolate/80 mb-6">
              Onze kleurrijke foodtruck is te vinden op diverse festivals door heel Nederland. 
              Kom langs en geniet van onze verse wafels in de buitenlucht!
            </p>
            <div className="bg-white/70 backdrop-blur rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Komende festivals:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CalendarDays size={20} className="text-waffle-strawberry mt-1 mr-3" />
                  <div>
                    <span className="font-bold">15-17 mei:</span> Food Festival Amsterdam
                  </div>
                </li>
                <li className="flex items-start">
                  <CalendarDays size={20} className="text-waffle-strawberry mt-1 mr-3" />
                  <div>
                    <span className="font-bold">24-26 juni:</span> Smaak Festival Utrecht
                  </div>
                </li>
                <li className="flex items-start">
                  <CalendarDays size={20} className="text-waffle-strawberry mt-1 mr-3" />
                  <div>
                    <span className="font-bold">8-10 juli:</span> Zomer Festival Rotterdam
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/festivals" className="waffle-btn">
              Bekijk alle festivals
            </Link>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/c0aa3dd4-3958-4b56-8072-edcde9ffc2ed.png"
                alt="WaffleKing Foodtruck"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-waffle-chocolate/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold mb-2">WaffleKing Foodtruck</h3>
                <p>Met liefde en passie aanwezig op de leukste evenementen!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalHighlight;
