import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Het Verhaal van It’s a Waffle Thing</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            It’s a Waffle Thing brengt traditionele Afrikaanse wafelrecepten samen met moderne streetfood-invloeden. 
            We serveren exclusieve wafels in zoete en hartige varianten, met unieke toppings zoals seizoensfruit, 
            premium chocolade en halal vlees- en kipburgers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-waffle-caramel">Onze Missie</h2>
            <p className="mb-4 text-lg">
              <strong className="text-waffle-strawberry">Uniek in Nederland:</strong> Wij zijn de enige die 
              hartige wafels combineren met premium streetfood. Onze signature cheese burger wafels en steak wafels 
              zijn nergens anders te vinden!
            </p>
            <p className="mb-4">
              We starten in Rotterdam met een afhaal- en bezorglocatie en werken toe naar uitbreiding met een restaurant, 
              foodtruck en uiteindelijk een franchiseconcept. Onze missie: innovatieve wafels toegankelijk 
              maken voor een breed publiek.
            </p>
            <p className="mb-4">
              Met focus op kwaliteit, creativiteit en visuele beleving willen we een onvergetelijke streetfood-ervaring bieden. 
              Door samenwerkingen met artiesten en influencers bouwen we snel aan onze naamsbekendheid.
            </p>
            <p className="font-semibold text-waffle-chocolate">
              It's a Waffle Thing – waar innovatie en streetfood samenkomen. 🥩 100% Halal • 🌟 Exclusieve Recepten • 🎨 Uniek in NL
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/Nieuwe-foto's/20251120-Wafflethings-9717-Web.jpg" 
              alt="It's a Waffle Thing"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/Nieuwe-foto's/20251120-Wafflethings-9630-Web.jpg" 
                alt="Wafelbekers - Nieuw Product"
                className="rounded-lg shadow-md hover:scale-105 transition-transform h-64 object-cover w-full"
              />
              <img 
                src="/Nieuwe-foto's/20251120-Wafflethings-9769-Web.jpg" 
                alt="Cheese Burger Wafel"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow h-64 object-cover w-full"
              />
              <img 
                src="/lovable-uploads/635cc4c6-fcb0-466f-89fb-6b475ec680e2.png" 
                alt="Zoete Wafel"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow h-64 object-cover w-full"
              />
              <img 
                src="/lovable-uploads/a4d62a11-73ee-4f9b-8017-1cf831878c88.png" 
                alt="Choco Wafel"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow h-64 object-cover w-full"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Wat Ons Uniek Maakt</h2>
            <p className="mb-4">
              Bij WaffleThingNL geloven we dat de beste wafels alleen gemaakt kunnen worden met de beste ingrediënten. 
              We gebruiken biologische bloem, verse eieren van lokale boerderijen en echte Belgische roomboter.
            </p>
            <p className="mb-4">
              Onze toppings worden elke dag vers bereid, en we werken samen met lokale producenten voor onze 
              aardbeien, chocolade en andere lekkernijen.
            </p>
            <p className="mb-4">
              Bij WaffelThingNL geloven we in unieke smaken. Onze exclusieve wafelrecepten zijn zorgvuldig ontwikkeld en 
              nergens anders in Nederland verkrijgbaar. Dit maakt elke hap een unieke ervaring!
            </p>
            <p>
              Ook vinden we duurzaamheid belangrijk. Onze verpakkingen zijn biologisch afbreekbaar en we proberen 
              voedselverspilling tegen te gaan door dagelijks precies de juiste hoeveelheid te bereiden.
            </p>
          </div>
        </div>
        
        <div className="bg-waffle-pink/30 rounded-xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-waffle-strawberry mb-2">20+</h3>
              <p className="text-lg">Unieke wafelrecepten</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-waffle-strawberry mb-2">50+</h3>
              <p className="text-lg">Festivals per jaar</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-waffle-strawberry mb-2">15.000+</h3>
              <p className="text-lg">Tevreden klanten</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Klaar om te proeven?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="waffle-btn">
              Bekijk ons menu <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="bg-waffle-pink text-waffle-strawberry hover:bg-waffle-pink/80 font-medium py-3 px-6 rounded-full transition-colors duration-300 inline-flex items-center gap-2">
              Neem contact op <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
