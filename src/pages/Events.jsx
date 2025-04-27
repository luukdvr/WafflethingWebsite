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
            Wil je onze WaffelThingNL foodtruck op jouw evenement? Of het nu een verjaardag, bedrijfsfeest, bruiloft of festival is, wij zorgen voor een onvergetelijke wafelervaring!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map(event => (
            <div key={event.id} className="waffle-card">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-waffle-chocolate/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">{event.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <CalendarDays size={18} className="text-waffle-strawberry mt-0.5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-start mb-4">
                  <MapPin size={18} className="text-waffle-strawberry mt-0.5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-waffle-chocolate/80 mb-4">{event.description}</p>
                <a 
                  href="/contact" 
                  className="text-waffle-strawberry font-medium hover:text-waffle-caramel transition-colors"
                >
                  Boek nu →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foodtruck;
