import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const reviews = [
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
    text: 'Wat een geweldige ervaring bij WaffleKing! De chocoladewafel was hemels en de service uitstekend.',
    image: '/lovable-uploads/e0484911-9f25-434a-9f23-cb8002a58501.png',
  },
  {
    id: 3,
    name: 'Emma Bakker',
    rating: 4,
    text: 'Super lekkere wafels en een gezellige sfeer. Mijn kinderen zijn er dol op!',
    image: '/lovable-uploads/635cc4c6-fcb0-466f-89fb-6b475ec680e2.png',
  },
  {
    id: 4,
    name: 'Sofie Hendriks',
    rating: 5,
    date: '5 februari 2025',
    text: 'Heerlijke wafels bij WaffleKing! De karamelsaus is goddelijk. Ik kon niet kiezen dus heb er twee besteld. Geen spijt van!',
    image: null,
  },
  {
    id: 5,
    name: 'Thijs de Jong',
    rating: 4,
    date: '29 januari 2025',
    text: 'Goede wafels en snelle service. Perfect voor als je haast hebt maar toch iets lekkers wilt. Volgende keer ga ik voor de special!',
    image: null,
  },
  {
    id: 6,
    name: 'Nina Vermeer',
    rating: 5,
    date: '15 januari 2025',
    text: 'Als Belgische ben ik kritisch op wafels, maar WaffleKing doet het echt goed! Authentieke smaak met een moderne twist. Aanrader!',
    image: null,
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Klantreviews</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Ontdek wat onze klanten van onze wafels vinden en deel jouw eigen ervaring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {reviews
            .slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage)
            .map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02] duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {review.image ? (
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-waffle-pink/50 flex items-center justify-center">
                        <User className="text-waffle-strawberry" size={20} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{review.name}</h3>
                    <p className="text-sm text-waffle-chocolate/60">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-waffle-chocolate/80">"{review.text}"</p>
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
