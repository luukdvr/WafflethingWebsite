import { useState } from 'react';

const waffleCategories = [
  { id: 'waffles', name: 'Wafels' },
  { id: 'pancakes', name: 'Pannenkoeken' },
  { id: 'extras', name: 'Extra Opties' },
];

const menuItems = [
  {
    id: 1,
    name: 'Plain Waffel',
    description: 'Een eenvoudige wafel, perfect om zelf te personaliseren.',
    category: 'waffles',
  },
  {
    id: 2,
    name: 'Waffel Super Deluxe',
    description: 'Met slagroom, 1 topping en 1 saus naar keuze.',
    category: 'waffles',
  },
  {
    id: 3,
    name: 'Waffel Burger',
    description: 'Beef of kip tussen twee wafels.',
    category: 'waffles',
  },
  {
    id: 4,
    name: 'Waffel Dubbel Burger',
    description: 'Dubbele beef of kip tussen twee wafels.',
    category: 'waffles',
  },
  {
    id: 5,
    name: 'Waffel Box',
    description: '6 mini wafels, ideaal om te delen.',
    category: 'waffles',
  },
  {
    id: 6,
    name: 'Pancake Waffel',
    description: 'Drie lagen pannenkoekachtige wafels.',
    category: 'pancakes',
  },
  {
    id: 7,
    name: 'Pancake Plain',
    description: 'Een eenvoudige pannenkoek.',
    category: 'pancakes',
  },
  {
    id: 8,
    name: 'Pancake Deluxe',
    description: 'Met slagroom, 1 topping en 1 saus naar keuze.',
    category: 'pancakes',
  },
  {
    id: 9,
    name: 'Beslag Keuze',
    description: 'Kies tussen Oreo of Vanilla beslag.',
    category: 'extras',
  },
  {
    id: 10,
    name: 'Toppings',
    description: 'Raffaello, Ferrero Rocher, M&M, Aardbeien, Maltesers, Fruit (aardbei & banaan), Oreo, Snickers, Kinderbueno, Twix, KitKat, slagroom.',
    category: 'extras',
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('waffles');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ons Menu</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Ontdek onze exclusieve selectie van wafels, pannenkoeken en extra opties. 
            <strong>Deze unieke creaties vind je nergens anders in Nederland!</strong>
          </p>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Ontdek onze heerlijke selectie van wafels, pannenkoeken en extra opties.
          </p>
        </div>

        <div className="relative mb-8">
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {waffleCategories.map(category => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-waffle-caramel text-white'
                    : 'bg-white text-waffle-chocolate hover:bg-waffle-pink/20'
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
            <div key={item.id} className="waffle-card">
              <div className="p-6">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-waffle-chocolate/80 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
