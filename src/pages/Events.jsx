import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Verjaardagsfeest',
    location: 'Bij jou thuis of op locatie',
    date: 'Op aanvraag',
    description: 'Maak je verjaardag extra speciaal met onze heerlijke wafels.',
    image: 'https://img.freepik.com/free-photo/playful-games-birthday-party-nature-background_1268-30629.jpg?t=st=1745758645~exp=1745762245~hmac=1f21c2773160d64d809c0facc97fa80f7a51d253cdb39c820bd79ad68f643a75&w=826'
  },
  {
    id: 2,
    name: 'Bedrijfsfeest',
    location: 'Op kantoor of een externe locatie',
    date: 'Op aanvraag',
    description: 'Trakteer je collega\'s op een unieke wafelervaring.',
    image: 'https://img.freepik.com/free-photo/group-friends-toasting-party_23-2148231953.jpg?t=st=1745758693~exp=1745762293~hmac=7f71945c820d5d469b3fb24c8fc9d0fdbacb951491ce12c6a15bbcd7996d14d1&w=740'
  },
  {
    id: 3,
    name: 'Bruiloft',
    location: 'Op jouw droomlocatie',
    date: 'Op aanvraag',
    description: 'Voeg een zoete touch toe aan je speciale dag.',
    image: 'https://img.freepik.com/free-photo/people-celebrating-wedding-beach_23-2149043928.jpg?t=st=1745758733~exp=1745762333~hmac=fc96b4e834d88ada4f46c0b45fee50a17e512a056f6903f799ac4e3bf49de238&w=740'
  },
  {
    id: 4,
    name: 'Festival',
    location: 'Overal in Nederland',
    date: 'Op aanvraag',
    description: 'Onze foodtruck is een hit op elk festival!',
    image: 'https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543833.jpg?ga=GA1.1.1417643153.1741123423&semt=ais_hybrid&w=740'
  }
];

const Foodtruck = () => {
  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Boek onze Foodtruck</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Wil je onze hartige wafels op jouw evenement? Of het nu een verjaardag, bedrijfsfeest, bruiloft of festival is, 
            wij zorgen voor een onvergetelijke wafelervaring met onze unieke cheese burger en steak wafels!
          </p>
          <p className="text-base text-waffle-strawberry font-semibold mt-2">
            🍔 Signature Hartige Wafels • 🥩 100% Halal • 🎉 Perfect voor elk event!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-waffle-strawberry/10 p-4 rounded-lg">
                  <CalendarDays className="text-waffle-strawberry" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-waffle-chocolate mb-2">{event.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-1">
                    <CalendarDays size={16} className="text-waffle-strawberry mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin size={16} className="text-waffle-strawberry mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 text-white bg-waffle-strawberry hover:bg-waffle-caramel font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Boek nu <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foodtruck;
