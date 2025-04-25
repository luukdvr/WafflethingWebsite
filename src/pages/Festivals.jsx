
import { useState } from 'react';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';

const festivals = [
  {
    id: 1,
    name: 'Food Festival Amsterdam',
    location: 'Westerpark, Amsterdam',
    date: '15-17 mei 2025',
    description: 'Een gezellig foodfestival met lokale en internationale gerechten.',
    image: '/lovable-uploads/78c84f6d-7c45-484d-a1c9-1b0b808d384f.png'
  },
  {
    id: 2,
    name: 'Smaak Festival Utrecht',
    location: 'Park Lepelenburg, Utrecht',
    date: '24-26 juni 2025',
    description: 'Ontdek de beste culinaire specialiteiten uit de regio Utrecht.',
    image: '/lovable-uploads/3b0e565a-55f0-4a64-9b93-89bbae36ff5e.png'
  },
  {
    id: 3,
    name: 'Zomer Festival Rotterdam',
    location: 'Kralingse Bos, Rotterdam',
    date: '8-10 juli 2025',
    description: 'Muziek, eten en zomerse sferen in het prachtige Kralingse Bos.',
    image: '/lovable-uploads/cf5b2c98-8f82-4dcf-9b5c-188204538051.png'
  },
  {
    id: 4,
    name: 'Foodtruck Festival Den Haag',
    location: 'Malieveld, Den Haag',
    date: '22-24 juli 2025',
    description: 'De beste foodtrucks uit binnen- en buitenland samengekomen op één plek.',
    image: '/lovable-uploads/0fd9724f-306a-4646-b67b-71058f4eef81.png'
  }
];

const months = [
  'Mei',
  'Juni',
  'Juli',
  'Augustus',
  'September'
];

const Festivals = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  
  const filteredFestivals = selectedMonth
    ? festivals.filter(festival => festival.date.includes(selectedMonth))
    : festivals;
  
  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Festivals & Evenementen</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Ontdek waar onze WaffleKing foodtruck de komende maanden te vinden is. 
            Kom langs en geniet van onze verse wafels op jouw favoriete festival!
          </p>
        </div>
        
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Onze Foodtruck</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/c0aa3dd4-3958-4b56-8072-edcde9ffc2ed.png" 
                  alt="WaffleKing Foodtruck" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="mb-4">
                  Onze opvallende foodtruck is niet te missen! Met onze vrolijke kleuren en heerlijke geuren
                  zijn we een ware publiekstrekker op elk festival of evenement.
                </p>
                <p className="mb-4">
                  In onze foodtruck bereiden we ter plekke verse wafels met jouw favoriete toppings.
                  Van klassiekers tot specials, we hebben voor ieder wat wils!
                </p>
                <p>
                  Ook voor private events en feesten kun je ons inhuren. Vraag vrijblijvend naar de mogelijkheden!
                </p>
                <div className="mt-6">
                  <a 
                    href="/contact" 
                    className="waffle-btn"
                  >
                    Neem contact op <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Festivalkalender</h2>
          
          <div className="flex overflow-x-auto space-x-2 py-4">
            <button
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedMonth === null
                  ? 'bg-waffle-caramel text-white'
                  : 'bg-white text-waffle-chocolate hover:bg-waffle-pink/20'
              }`}
              onClick={() => setSelectedMonth(null)}
            >
              Alle maanden
            </button>
            {months.map(month => (
              <button
                key={month}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-colors ${
                  selectedMonth === month 
                    ? 'bg-waffle-caramel text-white'
                    : 'bg-white text-waffle-chocolate hover:bg-waffle-pink/20'
                }`}
                onClick={() => setSelectedMonth(month)}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFestivals.map(festival => (
            <div key={festival.id} className="waffle-card">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-waffle-chocolate/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">{festival.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <CalendarDays size={18} className="text-waffle-strawberry mt-0.5 mr-2" />
                  <span>{festival.date}</span>
                </div>
                <div className="flex items-start mb-4">
                  <MapPin size={18} className="text-waffle-strawberry mt-0.5 mr-2" />
                  <span>{festival.location}</span>
                </div>
                <p className="text-waffle-chocolate/80 mb-4">{festival.description}</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-waffle-strawberry font-medium hover:text-waffle-caramel transition-colors"
                >
                  Route bekijken →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {filteredFestivals.length === 0 && (
          <div className="text-center bg-white rounded-xl shadow p-8 my-8">
            <h3 className="text-xl font-bold mb-2">Geen festivals gevonden</h3>
            <p className="text-waffle-chocolate/80">
              Er zijn geen festivals gevonden voor deze maand. Bekijk alle maanden om ons volledige schema te zien.
            </p>
            <button
              className="waffle-btn mt-4"
              onClick={() => setSelectedMonth(null)}
            >
              Toon alle festivals
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Festivals;
