import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Verjaardagsfeest',
    location: 'Bij jou thuis of op locatie',
    date: 'Op aanvraag',
    description: 'Maak je verjaardag extra speciaal met onze heerlijke wafels.',
    fullDescription: 'Vier je verjaardag op een unieke manier met onze signature hartige en zoete wafels! We zorgen voor een complete wafel-ervaring op jouw feest. Of het nu een kinderfeestje, volwassen verjaardag of een mijlpaal is, onze wafels maken het perfect. We kunnen op locatie komen of je bestelt een wafel-pakket dat wij bezorgen.',
    image: 'https://img.freepik.com/free-photo/playful-games-birthday-party-nature-background_1268-30629.jpg?t=st=1745758645~exp=1745762245~hmac=1f21c2773160d64d809c0facc97fa80f7a51d253cdb39c820bd79ad68f643a75&w=826',
    bookingInfo: 'Neem minimaal 2 weken van tevoren contact op voor beschikbaarheid. Prijzen vanaf €150 afhankelijk van aantal gasten en gewenste opties.'
  },
  {
    id: 2,
    name: 'Bedrijfsfeest',
    location: 'Op kantoor of een externe locatie',
    date: 'Op aanvraag',
    description: 'Trakteer je collega\'s op een unieke wafelervaring.',
    fullDescription: 'Perfect voor teambuilding events, netwerkborrels, of personeelsfeesten! Onze food corner biedt iets voor iedereen: van hartige waffle burgers tot zoete deluxe wafels. We kunnen ons aanbod volledig aanpassen aan jouw wensen en het aantal gasten. Inclusief professionele presentatie en bediening.',
    image: 'https://img.freepik.com/free-photo/group-friends-toasting-party_23-2148231953.jpg?t=st=1745758693~exp=1745762293~hmac=7f71945c820d5d469b3fb24c8fc9d0fdbacb951491ce12c6a15bbcd7996d14d1&w=740',
    bookingInfo: 'Ideaal voor groepen vanaf 25 personen. Flexibele pakketten beschikbaar. Stuur ons een e-mail of bel voor een vrijblijvende offerte.'
  },
  {
    id: 3,
    name: 'Bruiloft',
    location: 'Op jouw droomlocatie',
    date: 'Op aanvraag',
    description: 'Voeg een zoete touch toe aan je speciale dag.',
    fullDescription: 'Maak je bruiloft onvergetelijk met onze exclusieve wafel catering! Perfect als dessert, tussendoortje of late-night snack. We kunnen een wafel-bar inrichten waar gasten hun eigen creaties maken, of een volledig verzorgde service aanbieden. Vegetarische opties beschikbaar.',
    image: 'https://img.freepik.com/free-photo/people-celebrating-wedding-beach_23-2149043928.jpg?t=st=1745758733~exp=1745762333~hmac=fc96b4e834d88ada4f46c0b45fee50a17e512a056f6903f799ac4e3bf49de238&w=740',
    bookingInfo: 'Boek minimaal 3 maanden vooruit voor je bruiloftsdatum. We kunnen proefmomenten organiseren. Speciale bruiloftspakketten beschikbaar.'
  },
  {
    id: 4,
    name: 'Festival',
    location: 'Overal in Nederland',
    date: 'Op aanvraag',
    description: 'Onze food corner is een hit op elk festival!',
    fullDescription: 'Al jaren een begrip op festivals door heel Nederland! Van muziekfestivals tot foodtruckfestivals, onze unieke hartige wafels trekken altijd veel bezoekers. We hebben ervaring met grote evenementen en beschikken over alle benodigde vergunningen. Onze food corner is volledig zelfvoorzienend.',
    image: 'https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543833.jpg?ga=GA1.1.1417643153.1741123423&semt=ais_hybrid&w=740',
    bookingInfo: 'Ervaring met festivals tot 10.000+ bezoekers. Neem tijdig contact op voor populaire festival data. We kunnen ook exclusiviteitsdeals afsluiten.'
  }
];

const Foodtruck = () => {
  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Boek onze Food Corner</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Wil je onze hartige wafels op jouw evenement? Of het nu een verjaardag, bedrijfsfeest, bruiloft of festival is, 
            wij zorgen voor een onvergetelijke wafelervaring met onze signature waffle burger, philly cheese steak en bowl!
          </p>
          <p className="text-base text-waffle-strawberry font-semibold mt-2">
            🍔 Signature Hartige Wafels • 🥩 Premium Kwaliteit • 🎉 Perfect voor elk event!
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
              <p className="text-gray-700 mb-4 leading-relaxed font-semibold">{event.description}</p>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.fullDescription}</p>
              <div className="bg-waffle-cream/50 p-4 rounded-lg mb-6">
                <p className="text-sm text-waffle-chocolate font-medium">
                  <span className="font-bold">📋 Boekingsinformatie:</span><br />
                  {event.bookingInfo}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a 
                  href="tel:+31649100041" 
                  className="inline-flex items-center justify-center gap-2 text-white bg-waffle-strawberry hover:bg-waffle-caramel font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  📞 Bel direct: 06 49100041
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 text-waffle-strawberry bg-white border-2 border-waffle-strawberry hover:bg-waffle-pink/20 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Stuur een bericht <ArrowRight size={18} />
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
