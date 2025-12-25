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
              De enige plek voor hartige wafels met premium burgers en steak. 
              Traditionele Afrikaanse recepten ontmoeten moderne streetfood.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/wafflethingsnl/" target="_blank" rel="noopener noreferrer" className="text-waffle-cream hover:text-waffle-strawberry transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@wafflethingrotterdam" target="_blank" rel="noopener noreferrer" className="text-waffle-cream hover:text-waffle-strawberry transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.snapchat.com/add/wafflethingsnl" target="_blank" rel="noopener noreferrer" className="text-waffle-cream hover:text-waffle-strawberry transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.206 2.003a9.69 9.69 0 0 0-7.477 3.52A9.69 9.69 0 0 0 2.003 12.5a9.69 9.69 0 0 0 3.52 7.477 9.69 9.69 0 0 0 7.477 2.726 9.69 9.69 0 0 0 7.477-3.52A9.69 9.69 0 0 0 22.203 12a9.69 9.69 0 0 0-3.52-7.477 9.69 9.69 0 0 0-7.477-2.52zm0 1.5c1.655 0 3.25.453 4.635 1.314a8.19 8.19 0 0 1 3.347 3.347c.861 1.385 1.314 2.98 1.314 4.635s-.453 3.25-1.314 4.635a8.19 8.19 0 0 1-3.347 3.347c-1.385.861-2.98 1.314-4.635 1.314s-3.25-.453-4.635-1.314a8.19 8.19 0 0 1-3.347-3.347A8.19 8.19 0 0 1 3.503 12.5c0-1.655.453-3.25 1.314-4.635a8.19 8.19 0 0 1 3.347-3.347A8.19 8.19 0 0 1 12.206 3.503z"/>
                  <path d="M12.144 8.246c-.854 0-1.547.692-1.547 1.546v2.06c-.294.113-.584.235-.87.37a3.35 3.35 0 0 0-.494.32c-.106.09-.254.228-.413.343a3.35 3.35 0 0 1-.548.302c-.213.09-.435.159-.665.206a1.35 1.35 0 0 1-.394.028c-.132-.012-.258-.04-.377-.084a.95.95 0 0 1-.302-.183.87.87 0 0 1-.198-.28 1.05 1.05 0 0 1-.07-.387c0-.133.023-.263.069-.387a.87.87 0 0 1 .198-.28.95.95 0 0 1 .302-.183 1.05 1.05 0 0 1 .377-.084l.085.006c.054.006.107.015.159.027l.156.042c.05.015.098.032.145.05.047.02.092.04.136.063.088.045.17.096.248.152a2.18 2.18 0 0 0 .246.182c.083.055.168.106.255.152a2.5 2.5 0 0 0 .268.123 2.18 2.18 0 0 0 .28.083c.093.021.188.034.284.038v-2.46c0-.854.692-1.546 1.547-1.546.854 0 1.546.692 1.546 1.546v2.46c.096-.004.191-.017.284-.038.093-.021.186-.05.28-.083.093-.032.183-.07.268-.123a2.5 2.5 0 0 0 .255-.152 2.18 2.18 0 0 0 .246-.182 1.35 1.35 0 0 0 .248-.152c.044-.023.089-.043.136-.063.047-.018.095-.035.145-.05l.156-.042c.052-.012.105-.02.159-.027l.085-.006c.132 0 .258.028.377.084a.95.95 0 0 1 .302.183c.086.085.152.182.198.28.046.124.069.254.069.387 0 .133-.023.263-.069.387a.87.87 0 0 1-.198.28.95.95 0 0 1-.302.183c-.119.044-.245.072-.377.084a1.35 1.35 0 0 1-.394-.028 2.5 2.5 0 0 1-.665-.206 3.35 3.35 0 0 1-.548-.302c-.159-.115-.307-.253-.413-.343a3.35 3.35 0 0 0-.494-.32c-.286-.135-.576-.257-.87-.37v-2.06c0-.854-.692-1.546-1.546-1.546z"/>
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
            <span className="block mt-2 text-waffle-strawberry font-semibold">Hartige wafels, alleen bij ons verkrijgbaar! 🥩🧇</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
