import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const waffleCategories = [
  { id: 'savory', name: 'Hartige Menu' },
  { id: 'sweet', name: 'Zoete Menu' },
];

const menuItems = [
  // Hartige Wafels
  {
    id: 1,
    name: 'WAFFLE Burger',
    description: 'Sappige beef burger, verse sla, tomaat, ui en onze speciale saus tussen twee knapperige wafels.',
    category: 'savory',
    badge: 'BESTSELLER',
    popular: true
  },
  {
    id: 2,
    name: 'WAFFLE Cheeseburger',
    description: 'Sappige beef burger met gesmolten kaas, verse groenten en onze signature saus.',
    category: 'savory',
    popular: true
  },
  {
    id: 3,
    name: 'WAFFLE Philly Cheese Steak',
    description: 'Premium steak, verse groenten en onze huisgemaakte saus tussen perfecte wafels.',
    category: 'savory',
    badge: 'PREMIUM',
    popular: true
  },
  {
    id: 4,
    name: 'WAFFLE Philly Steak Bowl',
    description: 'Heerlijke bowl met premium steak en verse ingrediënten.',
    category: 'savory',
    popular: true
  },
  {
    id: 5,
    name: 'Grilled Flame WAFFLE',
    description: 'Een unieke gegrilde waffle ervaring met speciale smaak.',
    category: 'savory',
  },
  
  // Zoete Wafels
  {
    id: 10,
    name: 'WAFFLE Cups',
    description: 'Knapperige waffle cups gevuld met jouw favoriete topping en saus. Perfect als snack!',
    category: 'sweet',
    badge: 'NIEUW',
  },
  {
    id: 11,
    name: 'WAFFLE Plain',
    description: 'Een eenvoudige waffle, perfect om zelf te personaliseren.',
    category: 'sweet',
  },
  {
    id: 12,
    name: 'WAFFLE Sweet Deluxe',
    description: 'Met slagroom, 1 topping en 1 saus naar keuze.',
    category: 'sweet',
  },
  {
    id: 13,
    name: 'WAFFLE Tower',
    description: 'Een indrukwekkende toren van heerlijke wafels met toppings.',
    category: 'sweet',
  },
  {
    id: 14,
    name: 'WAFFLE Sweet Box',
    description: '6 mini wafels, ideaal om te delen of voor jezelf!',
    category: 'sweet',
  },
  {
    id: 15,
    name: 'WAFFLE Sticks',
    description: 'Handige waffle sticks perfect voor onderweg.',
    category: 'sweet',
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('savory');
  const location = useLocation();

  useEffect(() => {
    // Check for hash in URL and set active category accordingly
    const hash = location.hash.replace('#', '');
    if (hash === 'sweet' || hash === 'savory') {
      setActiveCategory(hash);
    }
  }, [location]);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ons Menu</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto mb-2">
            Onze hartige wafels met premium burgers en steak vind je nergens anders. Traditionele Afrikaanse recepten gecombineerd met moderne streetfood.
          </p>
          <p className="text-base text-waffle-chocolate/70 max-w-2xl mx-auto">
            🥩 Al ons vlees is van de hoogste kwaliteit • 🌟 Exclusieve recepten • 🎨 Elke wafel is een kunstwerk
          </p>
        </div>

        <div className="relative mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {waffleCategories.map(category => (
              <button
                key={category.id}
                className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeCategory === category.id 
                    ? 'bg-waffle-caramel text-white shadow-lg'
                    : 'bg-white text-waffle-chocolate hover:bg-waffle-pink/30 shadow-md'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map(item => (
            <div key={item.id} className={`waffle-card relative overflow-hidden group ${item.popular ? 'ring-2 ring-waffle-strawberry' : ''}`}>
              {item.badge && (
                <div className="absolute top-4 right-4 z-10 bg-waffle-strawberry text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {item.badge}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-waffle-chocolate">{item.name}</h3>
                <p className="text-waffle-chocolate/80 mb-4">{item.description}</p>
                {item.popular && (
                  <div className="mt-3 inline-block bg-waffle-pink px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-waffle-strawberry">⭐ Populair</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
