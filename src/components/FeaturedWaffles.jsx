
import { Link } from 'react-router-dom';

const waffles = [
  {
    id: 1,
    name: 'Aardbei Deluxe',
    description: 'Verse aardbeien met slagroom en witte chocolade',
    image: '/lovable-uploads/e0484911-9f25-434a-9f23-cb8002a58501.png',
    price: '€7,50'
  },
  {
    id: 2,
    name: 'Choco Dream',
    description: 'Rijkelijk versierd met pure en witte chocolade',
    image: '/lovable-uploads/a4d62a11-73ee-4f9b-8017-1cf831878c88.png',
    price: '€8,25'
  },
  {
    id: 3,
    name: 'Karamel Stapel',
    description: 'Gestapelde wafels met karamelsaus en slagroom',
    image: '/lovable-uploads/635cc4c6-fcb0-466f-89fb-6b475ec680e2.png',
    price: '€9,50'
  }
];

const FeaturedWaffles = () => {
  return (
    <section className="py-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Populairste Wafels</h2>
          <p className="text-lg text-waffle-chocolate/80 max-w-2xl mx-auto">
            Huisgemaakte lekkernijen die je niet mag missen. Elk met liefde bereid en met de beste ingrediënten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {waffles.map((waffle) => (
            <div key={waffle.id} className="waffle-card">
              <div className="h-64 overflow-hidden">
                <img
                  src={waffle.image}
                  alt={waffle.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{waffle.name}</h3>
                  <span className="text-waffle-strawberry font-bold">{waffle.price}</span>
                </div>
                <p className="text-waffle-chocolate/80 mb-4">{waffle.description}</p>
                <Link to="/menu" className="text-waffle-strawberry font-medium hover:text-waffle-caramel transition-colors">
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
