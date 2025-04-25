
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const waffleCategories = [
  { id: 'classics', name: 'Klassiekers' },
  { id: 'special', name: 'Specials' },
  { id: 'savory', name: 'Hartig' },
  { id: 'drinks', name: 'Dranken' }
];

const menuItems = [
  {
    id: 1,
    name: 'Aardbei Deluxe',
    description: 'Verse aardbeien met slagroom en witte chocolade',
    image: '/lovable-uploads/d438d804-15e3-4ad9-b08e-e6666b4bc0cf.png',
    price: 7.50,
    category: 'classics'
  },
  {
    id: 2,
    name: 'Choco Dream',
    description: 'Rijkelijk versierd met pure en witte chocolade',
    image: '/lovable-uploads/db088c5b-154d-4e10-81b7-30231bad401f.png',
    price: 8.25,
    category: 'classics'
  },
  {
    id: 3,
    name: 'Karamel Stapel',
    description: 'Gestapelde wafels met karamelsaus en slagroom',
    image: '/lovable-uploads/a4d62a11-73ee-4f9b-8017-1cf831878c88.png',
    price: 9.50,
    category: 'special'
  },
  {
    id: 4,
    name: 'Berry Blast',
    description: 'Mix van vers fruit met aardbeiensaus en kokos',
    image: '/lovable-uploads/d55af6d2-4fa2-42ea-b4b1-e57d56af80f0.png',
    price: 8.75,
    category: 'special'
  },
  {
    id: 5,
    name: 'Kaas & Kruiden',
    description: 'Hartige wafel met oude kaas en verse kruiden',
    image: '/lovable-uploads/b9816e86-cc2d-49ad-bc56-4ee6ad91ff89.png',
    price: 7.25,
    category: 'savory'
  },
  {
    id: 6,
    name: 'Wafelburger',
    description: 'Hamburger tussen twee wafels met cheddar, sla en tomaat',
    image: '/lovable-uploads/b5b9788c-f1bc-4cee-a55e-d74e1e105aff.png',
    price: 10.95,
    category: 'savory'
  },
  {
    id: 7,
    name: 'Verse Muntthee',
    description: 'Heerlijke thee met verse munt',
    image: '/placeholder.svg',
    price: 3.50,
    category: 'drinks'
  },
  {
    id: 8,
    name: 'Warme Chocolademelk',
    description: 'Romige warme chocolademelk met slagroom',
    image: '/placeholder.svg',
    price: 4.25,
    category: 'drinks'
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('classics');
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ons Menu</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Ontdek onze heerlijke selectie van zoete en hartige wafels, bereid met alleen de beste ingrediënten.
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
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-waffle-strawberry font-bold">€{item.price.toFixed(2)}</span>
                </div>
                <p className="text-waffle-chocolate/80 mb-4">{item.description}</p>
                <button 
                  onClick={() => addToCart(item)}
                  className="waffle-btn w-full"
                >
                  In winkelwagen
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Winkelwagen */}
        <div className="fixed bottom-4 right-4 z-40">
          <div className="bg-waffle-chocolate text-white rounded-full p-4 shadow-lg relative cursor-pointer">
            <ShoppingCart size={28} />
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-waffle-strawberry rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </div>
            )}
            {totalItems > 0 && (
              <div className="absolute bottom-full right-0 mb-2 bg-white text-waffle-chocolate rounded-lg shadow-xl p-4 w-64">
                <h4 className="font-bold mb-2">Winkelwagen</h4>
                <div className="max-h-48 overflow-y-auto mb-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-waffle-chocolate/70 block">
                          {item.quantity} x €{item.price.toFixed(2)}
                        </span>
                      </div>
                      <span>€{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-2 mb-4">
                  <div className="flex justify-between font-bold">
                    <span>Totaal:</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button className="waffle-btn w-full">
                  Afrekenen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
