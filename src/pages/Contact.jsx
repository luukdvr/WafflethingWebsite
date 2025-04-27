import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normaal gesproken zou je hier het formulier naar een server sturen
    console.log('Formulier ingediend:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="pt-24 pb-16 bg-waffle-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-lg text-waffle-chocolate/80 max-w-3xl mx-auto">
            Heb je vragen of wil je onze foodtruck boeken voor een evenement? We horen graag van je!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Neem contact op</h2>
            
            {submitted ? (
              <div className="bg-green-50 rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-xl font-bold text-green-600 mb-2">Bedankt voor je bericht!</h3>
                <p>We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
                <button 
                  className="waffle-btn mt-4"
                  onClick={() => setSubmitted(false)}
                >
                  Verstuur nog een bericht
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-waffle-chocolate font-medium mb-2">Naam</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="waffle-input w-full"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-waffle-chocolate font-medium mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="waffle-input w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-waffle-chocolate font-medium mb-2">Onderwerp</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="waffle-input w-full"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-waffle-chocolate font-medium mb-2">Bericht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="waffle-input w-full"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="waffle-btn">
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contactinformatie</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-waffle-strawberry mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold mb-1">Telefoon</h3>
                    <p>+31 6 49100041</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-waffle-strawberry mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold mb-1">E-mail</h3>
                    <p>info@WaffelThing.nl</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-waffle-strawberry mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold mb-1">Adres</h3>
                    <p>
                      Wafelstraat 123<br />
                      1234 AB Amsterdam<br />
                      Nederland
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78447.17884169646!2d4.8138076!3d52.3702157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1snl!2snl!4v1619011862745!5m2!1snl!2snl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="WaffelThing locatie"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="bg-waffle-pink/30 rounded-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Boek onze Foodtruck</h2>
            <p className="text-waffle-chocolate/80 max-w-2xl mx-auto">
              Wil je onze WaffelThing foodtruck boeken voor jouw evenement, bruiloft of bedrijfsfeest? 
              We maken er graag een onvergetelijke wafelervaring van!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
