import { useState } from 'react';

const waffleCategories = [
  { id: 'savory', name: 'Hartige Wafels' },
  { id: 'sweet', name: 'Zoete Wafels' },
  { id: 'cups', name: 'Wafelbekers' },
  { id: 'extras', name: 'Extra Opties' },
];

const menuItems = [
  // Hartige Wafels - DE USP!
  {
    id: 1,
    name: 'Cheese Burger Wafel',
    description: 'Onze signature! Sappige halal beef burger, gesmolten kaas, verse sla, tomaat, ui en onze speciale saus tussen twee knapperige wafels.',
    category: 'savory',
    badge: 'BESTSELLER',
    popular: true
  },
  {
    id: 2,
    name: 'Double Cheese Burger Wafel',
    description: 'Dubbel zoveel smaak! Twee halal beef burgers, extra kaas, verse groenten en onze signature saus.',
    category: 'savory',
    popular: true
  },
  {
    id: 3,
    name: 'Steak Wafel',
    description: 'Premium! Malse halal steak, verse groenten en onze huisgemaakte saus tussen perfecte wafels.',
    category: 'savory',
    badge: 'PREMIUM',
    popular: true
  },
  {
    id: 4,
    name: 'Chicken Burger Wafel',
    description: 'Krokante halal kipburger met verse sla, tomaat en heerlijke saus.',
    category: 'savory',
  },
  {
    id: 5,
    name: 'Double Chicken Burger Wafel',
    description: 'Twee krokante halal kipburgers voor de echte honger!',
    category: 'savory',
  },
  
  // Zoete Wafels
  {
    id: 10,
    name: 'Plain Wafel',
    description: 'Een eenvoudige wafel, perfect om zelf te personaliseren.',
    category: 'sweet',
  },
  {
    id: 11,
    name: 'Wafel Super Deluxe',
    description: 'Met slagroom, 1 topping en 1 saus naar keuze.',
    category: 'sweet',
  },
  {
    id: 12,
    name: 'Aardbei Dream',
    description: 'Verse aardbeien, slagroom en witte chocolade - een klassieke favoriet!',
    category: 'sweet',
  },
  {
    id: 13,
    name: 'Choco Explosion',
    description: 'Pure chocolade, witte chocolade, Nutella en chocolade saus - voor echte chocoholics.',
    category: 'sweet',
  },
  {
    id: 14,
    name: 'Oreo Delight',
    description: 'Oreo wafelbeslag met Oreo stukjes, slagroom en witte chocolade.',
    category: 'sweet',
  },
  {
    id: 15,
    name: 'Wafel Box',
    description: '6 mini wafels, ideaal om te delen of voor jezelf!',
    category: 'sweet',
  },
  
  // Wafelbekers - NIEUW PRODUCT!
  {
    id: 20,
    name: 'Wafelbekers Classic',
    description: 'Knapperige wafelbeker gevuld met je favoriete topping en saus. Perfect als snack!',
    category: 'cups',
    badge: 'NIEUW',
  },
  {
    id: 21,
    name: 'Wafelbekers Deluxe',
    description: 'Wafelbeker met slagroom, 2 toppings en 2 sauzen naar keuze.',
    category: 'cups',
    badge: 'NIEUW',
  },
  {
    id: 22,
    name: 'Wafelbekers Aardbei',
    description: 'Wafelbeker vol met verse aardbeien, slagroom en witte chocolade.',
    category: 'cups',
    badge: 'NIEUW',
  },
  {
    id: 23,
    name: 'Wafelbekers Choco',
    description: 'Chocolade lovers opgelet! Wafelbeker met Nutella, pure chocolade en chocoladesaus.',
    category: 'cups',
    badge: 'NIEUW',
  },
  
  // Extra opties
  {
    id: 30,
    name: 'Beslag Keuze',
    description: 'Kies tussen Oreo, Vanilla of Classic beslag.',
    category: 'extras',
  },
  {
    id: 31,
    name: 'Toppings',
    description: 'Raffaello, Ferrero Rocher, M&M, Aardbeien, Maltesers, Fruit (aardbei & banaan), Oreo, Snickers, Kinderbueno, Twix, KitKat, slagroom.',
    category: 'extras',
  },
  {
    id: 32,
    name: 'Sauzen',
    description: 'Nutella, witte chocolade, pure chocolade, karamel, aardbeiensaus, speciale burger saus.',
    category: 'extras',
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('savory');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ons Unieke Menu</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto mb-2">
            <strong className="text-waffle-strawberry">Uniek in Nederland!</strong> Onze hartige wafels met premium burgers en steak 
            vind je nergens anders. Traditionele Afrikaanse recepten gecombineerd met moderne streetfood.
          </p>
          <p className="text-base text-waffle-chocolate/70 max-w-2xl mx-auto">
            🥩 Alle vlees is 100% halal • 🌟 Exclusieve recepten • 🎨 Elke wafel is een kunstwerk
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
        
        <div className="bg-white rounded-lg shadow-md p-8 text-center border-l-4 border-waffle-strawberry">
          <h3 className="text-2xl font-bold mb-3 text-waffle-chocolate">Wil je bestellen?</h3>
          <p className="mb-6 text-gray-700">Bel ons of kom langs! Onze hartige wafels zijn echt een ervaring die je moet proeven.</p>
          <a href="tel:+31649100041" className="bg-waffle-strawberry text-white hover:bg-waffle-caramel font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2">
            📞 Bestel Nu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
