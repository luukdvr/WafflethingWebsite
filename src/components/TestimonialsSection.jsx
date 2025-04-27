import { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Lisa de Vries',
    rating: 5,
    text: 'De lekkerste wafels die ik ooit heb gegeten! De aardbeiwafel is mijn favoriet. Echt een aanrader!',
    image: '/lovable-uploads/6eaabd4d-2454-4b09-a02e-58e2007d96ef.png',
  },
  {
    id: 2,
    name: 'Mark Jansen',
    rating: 5,
    text: 'Wat een geweldige ervaring bij WaffelThingNL! De chocoladewafel was hemels en de service uitstekend.',
    image: '/lovable-uploads/e0484911-9f25-434a-9f23-cb8002a58501.png',
  },
  {
    id: 3,
    name: 'Emma Bakker',
    rating: 4,
    text: 'Super lekkere wafels en een gezellige sfeer. Mijn kinderen zijn er dol op!',
    image: '/lovable-uploads/635cc4c6-fcb0-466f-89fb-6b475ec680e2.png',
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-16 bg-waffle-caramel/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat Klanten Zeggen</h2>
          <p className="text-lg text-waffle-chocolate/80 max-w-2xl mx-auto">
            Ontdek waarom onze klanten steeds terugkomen voor onze heerlijke wafels van WaffelThingNL.
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
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-center md:justify-start mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i + testimonial.rating} size={18} className="text-gray-300 fill-gray-300" />
                        ))}
                      </div>
                      <div className="mb-4 text-center md:text-left">
                        <p className="text-lg mb-4 italic text-waffle-chocolate/80">"{testimonial.text}"</p>
                        <p className="font-bold">{testimonial.name}</p>
                      </div>
                    </div>
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
