import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ahmed K.',
    rating: 5,
    date: '10 december 2024',
    text: 'De cheese burger wafel is echt next level! Nooit gedacht dat een hartige wafel zo lekker kon zijn. Het vlees is mals, de kaas perfect gesmolten en de wafel knapperig. Uniek concept en 100% halal, perfect! Ga zo door WaffelThingNL!',
    image: '/Nieuwe-foto%27s/20251120-Wafflethings-9769-Web.jpg',
  },
  {
    id: 2,
    name: 'Lisa de Vries',
    rating: 5,
    date: '5 december 2024',
    text: 'Wow! De steak wafel overtrof al mijn verwachtingen. Zo\'n mooie combinatie van Afrikaanse wafels en moderne streetfood. De steak is perfect gebakken en de sauzen zijn heerlijk. Echt nergens anders te vinden!',
    image: '/Nieuwe-foto%27s/20251120-Wafflethings-9717-Web.jpg',
  },
  {
    id: 3,
    name: 'Fatima H.',
    rating: 5,
    date: '28 november 2024',
    text: 'Eindelijk een plek waar ik hartige wafels kan eten die ook nog eens halal zijn! De chicken burger wafel is zo goed, en de porties zijn royaal. Mijn nieuwe favoriete plek!',
    image: null,
  },
  {
    id: 4,
    name: 'Emma Bakker',
    rating: 5,
    date: '20 november 2024',
    text: 'De wafelbekers zijn geweldig! Mijn kinderen zijn er dol op en ik vind de hartige varianten heerlijk. Perfecte mix van zoet en hartig op het menu. De presentatie is ook prachtig!',
    image: '/Nieuwe-foto%27s/20251120-Wafflethings-9630-Web.jpg',
  },
  {
    id: 5,
    name: 'Thijs de Jong',
    rating: 5,
    date: '15 november 2024',
    text: 'Als streetfood liefhebber ben ik echt onder de indruk. De double cheese burger wafel is waanzinnig! Zo veel smaak en de wafels zijn perfect gebakken. Dit is echt iets unieks in Nederland.',
    image: null,
  },
  {
    id: 6,
    name: 'Yasmin A.',
    rating: 5,
    date: '8 november 2024',
    text: 'De Aardbei Deluxe wafel voor toe na mijn cheese burger wafel - perfecte combinatie! De zoete wafels zijn ook super, maar die hartige wafels maken het echt speciaal. Top service ook!',
    image: '/Nieuwe-foto%27s/20251120-Wafflethings-9625-Web.jpg',
  }
];

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });
  const [submitted, setSubmitted] = useState(false);
  
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };
  
  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Normaal gesproken zou je hier de review naar een server sturen
    console.log('Nieuwe review:', newReview);
    setNewReview({ name: '', rating: 5, text: '' });
    setSubmitted(true);
  };
  
  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wat Onze Fans Zeggen</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Ontdek wat onze klanten vinden van onze unieke hartige wafels en heerlijke zoete varianten. 
            <strong className="text-waffle-strawberry"> Lees waarom iedereen zo enthousiast is!</strong>
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {reviews
            .slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage)
            .map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg duration-300 border border-gray-100"
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-waffle-chocolate">{review.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">"{review.text}"</p>
              </div>
            ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-12">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`p-2 rounded-full ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-waffle-caramel hover:bg-waffle-pink/20'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-waffle-chocolate">
              Pagina {currentPage + 1} van {totalPages}
            </span>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className={`p-2 rounded-full ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-waffle-caramel hover:bg-waffle-pink/20'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Deel Jouw Ervaring</h2>
          
          {submitted ? (
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-green-600 mb-2">Bedankt voor je review!</h3>
              <p className="mb-4">Je feedback is ontvangen en helpt anderen om onze wafels te ontdekken.</p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="waffle-btn"
              >
                Schrijf nog een review
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitReview}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-waffle-chocolate font-medium mb-2">Je naam</label>
                <input 
                  type="text" 
                  id="name"
                  className="waffle-input w-full"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-waffle-chocolate font-medium mb-2">Je beoordeling</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setNewReview({...newReview, rating})}
                      className="focus:outline-none"
                    >
                      <Star 
                        size={24} 
                        className={rating <= newReview.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="review" className="block text-waffle-chocolate font-medium mb-2">Je review</label>
                <textarea 
                  id="review"
                  rows="4"
                  className="waffle-input w-full"
                  value={newReview.text}
                  onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button type="submit" className="waffle-btn">
                  Plaats review
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
