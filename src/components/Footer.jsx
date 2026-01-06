import { Link } from 'react-router-dom';
import { Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-waffle-chocolate text-waffle-cream">
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-pacifico mb-4 text-waffle-strawberry">WaffelThingNL</h3>
            <p className="mb-4">
              De enige plek voor hartige waffles met premium burgers en steak. 
              Moderne streetfood met unieke smaakcombinaties.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61570846263695" target="_blank" rel="noopener noreferrer" className="text-waffle-cream hover:text-waffle-strawberry transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-pacifico mb-4 text-waffle-strawberry">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-waffle-strawberry transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-waffle-strawberry transition-colors">Over ons</Link>
              </li>
              <li>
                <Link to="/menu" onClick={() => window.scrollTo(0, 0)} className="hover:text-waffle-strawberry transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/events" onClick={() => window.scrollTo(0, 0)} className="hover:text-waffle-strawberry transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/reviews" onClick={() => window.scrollTo(0, 0)} className="hover:text-waffle-strawberry transition-colors">Reviews</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-waffle-strawberry transition-colors">Contact</Link>
              </li>
            </ul>
            
            <h4 className="text-lg font-pacifico mt-6 mb-3 text-waffle-strawberry">Juridisch</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/algemene-voorwaarden" onClick={() => window.scrollTo(0, 0)} className="hover:text-waffle-strawberry transition-colors">Algemene Voorwaarden</Link>
              </li>
              <li>
                <Link to="/privacybeleid" onClick={() => window.scrollTo(0, 0)} className="hover:text-waffle-strawberry transition-colors">Privacybeleid</Link>
              </li>
              <li>
                <Link to="/cookiebeleid" onClick={() => window.scrollTo(0, 0)} className="hover:text-waffle-strawberry transition-colors">Cookiebeleid</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-pacifico mb-4 text-waffle-strawberry">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone size={18} className="mr-2 text-waffle-strawberry" />
                <span>06 49100041</span>
              </p>
              <p className="text-sm">
                Rotterdam, Nederland<br />
                <span className="text-waffle-cream/70">Afhaal & Bezorging</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-waffle-caramel/30 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} WaffelThingNL - It's a Waffle Thing. Alle rechten voorbehouden. 
            <span className="block mt-2 text-waffle-strawberry font-semibold">Hartige waffles, alleen bij ons verkrijgbaar! 🥩🧇</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
