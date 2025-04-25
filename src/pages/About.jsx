import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Het Verhaal van WaffleThing</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Leer ons beter kennen en ontdek waar onze passie voor wafels vandaan komt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Onze Roots</h2>
            <p className="mb-4">
              WaffleThing begon in 2023 als een klein familieproject in de keuken van oprichter Marlon. 
              Met een oud recept begon hij te experimenteren met verschillende wafelsoorten en toppings.
            </p>
            <p className="mb-4">
              Wat begon als een hobby, groeide al snel uit tot een passie. Vrienden en familie waren zo enthousiast over zijn wafels 
              dat Marlon besloot om zijn creaties te delen met een groter publiek.
            </p>
            <p>
              In 2024 begon WaffleThing met een kleine foodtruck op lokale markten, en het duurde niet lang voordat we werden uitgenodigd 
              voor festivals en evenementen door heel Nederland. Vandaag de dag zijn we trots op onze reputatie als één van de beste wafelmakers van het land.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/fotos/Afbeelding van WhatsApp op 2025-04-23 om 13.55.30_737a6d52.jpg" 
              alt="WaffleThing oprichter"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/6eaabd4d-2454-4b09-a02e-58e2007d96ef.png" 
                alt="Wafel close-up"
                className="rounded-lg shadow-md"
              />
              <img 
                src="/lovable-uploads/a4d62a11-73ee-4f9b-8017-1cf831878c88.png" 
                alt="Wafel met toppings"
                className="rounded-lg shadow-md"
              />
              <img 
                src="/lovable-uploads/635cc4c6-fcb0-466f-89fb-6b475ec680e2.png" 
                alt="Tevreden klant"
                className="rounded-lg shadow-md"
              />
              <img 
                src="/lovable-uploads/d55af6d2-4fa2-42ea-b4b1-e57d56af80f0.png" 
                alt="Wafel met aardbeien"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Wat Ons Uniek Maakt</h2>
            <p className="mb-4">
              Bij WaffleThing geloven we dat de beste wafels alleen gemaakt kunnen worden met de beste ingrediënten. 
              We gebruiken biologische bloem, verse eieren van lokale boerderijen en echte Belgische roomboter.
            </p>
            <p className="mb-4">
              Onze toppings worden elke dag vers bereid, en we werken samen met lokale producenten voor onze 
              aardbeien, chocolade en andere lekkernijen.
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
