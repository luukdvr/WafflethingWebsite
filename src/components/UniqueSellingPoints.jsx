import { CheckCircle } from 'lucide-react';

const UniqueSellingPoints = () => {
  const usps = [
    {
      icon: '🍔',
      title: 'Alleen bij ons',
      description: 'De enige plek voor hartige wafels met premium burgers en steak'
    },
    {
      icon: '🥩',
      title: 'Premium Kwaliteit',
      description: 'Al ons vlees is van de hoogste kwaliteit'
    },
    {
      icon: '🌍',
      title: 'Werelds lekker',
      description: 'Onze wafels zijn buiten gewoon lekker, die moet je proeven!'
    },
    {
      icon: '✨',
      title: 'Exclusieve Recepten',
      description: 'Onze signature recepten zijn nergens anders verkrijgbaar'
    },
  ];

  return (
    <section className="py-16 bg-waffle-chocolate text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Waarom It's a Waffle Thing?</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Ontdek wat ons zo speciaal maakt in de Nederlandse streetfood scene
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20"
            >
              <div className="text-5xl mb-4">{usp.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{usp.title}</h3>
              <p className="text-white">{usp.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Onze Signature Producten</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-300 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1 text-white">Waffle Burger</h4>
                  <p className="text-sm text-white">Sappige beef burger tussen knapperige wafels</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-300 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1 text-white">Philly Cheese Steak</h4>
                  <p className="text-sm text-white">Premium steak met verse groenten</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-300 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1 text-white">Bowl</h4>
                  <p className="text-sm text-white">Heerlijke bowl combinatie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSellingPoints;
