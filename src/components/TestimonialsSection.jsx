import { useState } from 'react';
import { Star } from 'lucide-react';

  const testimonials = [
  {
    id: 1,
    name: 'Ahmed K.',
    rating: 5,
    text: 'De cheese burger wafel is echt next level! Nooit gedacht dat een hartige wafel zo lekker kon zijn. Uniek concept en 100% halal, perfect!'
  },
  {
    id: 2,
    name: 'Lisa de Vries',
    rating: 5,
    text: 'Wow! De steak wafel overtrof al mijn verwachtingen. Perfect gebakken steak met heerlijke sauzen. Echt nergens anders te vinden!'
  },
  {
    id: 3,
    name: 'Emma Bakker',
    rating: 5,
    text: 'De wafelbekers zijn geweldig! Mijn kinderen zijn er dol op en ik vind de hartige varianten heerlijk. Perfecte mix van zoet en hartig op het menu!'
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-16 bg-waffle-caramel/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat Onze Fans Zeggen</h2>
          <p className="text-lg text-waffle-chocolate/80 max-w-2xl mx-auto">
            Ontdek waarom iedereen zo enthousiast is over onze unieke hartige wafels en nieuwe wafelbekers!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`
                  transition-opacity duration-500 
                  ${activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}
                `}
              >
                <div className="bg-white rounded-lg shadow-md p-10 border border-gray-100">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg mb-6 text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-waffle-chocolate">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-waffle-strawberry' : 'bg-waffle-caramel/40'
                }`}
                aria-label={`Ga naar testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
