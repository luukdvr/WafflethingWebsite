import { Link } from 'react-router-dom';

const waffles = [
  {
    id: 1,
    name: 'Cheese Burger Wafel',
    description: 'Onze signature hartige wafel met sappige beef burger, gesmolten kaas, verse groenten en speciale saus',
    image: '/Nieuwe-foto%27s/20251120-Wafflethings-9769-Web.jpg',
    badge: 'BESTSELLER'
  },
  {
    id: 2,
    name: 'Wafelbekers',
    description: 'Onze nieuwe creatie! Knapperige wafelbekers gevuld met jouw favoriete toppings en sauzen',
    image: '/Nieuwe-foto%27s/20251120-Wafflethings-9630-Web.jpg',
    badge: 'NIEUW'
  },
  {
    id: 3,
    name: 'Aardbei Deluxe',
    description: 'Verse aardbeien met slagroom en witte chocolade - perfect voor zoetekauwen',
    image: '/Nieuwe-foto%27s/20251120-Wafflethings-9625-Web.jpg'
  }
];

const FeaturedWaffles = () => {
  return (
    <section className="py-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-waffle-chocolate">Onze signature producten</h2>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            <strong className="text-waffle-strawberry">Uniek in Nederland!</strong> Wij zijn de énige die hartige wafels serveren met premium burgers en steak. 
            Een smaakexplosie die je nergens anders vindt!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waffles.map((waffle) => (
            <div key={waffle.id} className="waffle-card relative group">
              {waffle.badge && (
                <div className="absolute top-4 right-4 z-10 bg-waffle-strawberry text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {waffle.badge}
                </div>
              )}
              <div className="h-56 overflow-hidden rounded-t-xl">
                <img
                  src={waffle.image}
                  alt={waffle.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{waffle.name}</h3>
                <p className="text-waffle-chocolate/80 text-sm mb-4">{waffle.description}</p>
                <Link to="/menu" className="text-waffle-strawberry font-medium hover:text-waffle-caramel transition-colors text-sm">
                  Bekijk details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu" className="waffle-btn">
            Bekijk volledige menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWaffles;
