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
              <a href="https://www.instagram.com/wafflethingsnl/" target="_blank" rel="noopener noreferrer" className="text-waffle-cream hover:text-waffle-strawberry transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@wafflethingrotterdam" target="_blank" rel="noopener noreferrer" className="text-waffle-cream hover:text-waffle-strawberry transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path>
                </svg>
              </a>
              <a href="https://www.snapchat.com/@wafflethingsnl" target="_blank" rel="noopener noreferrer" className="text-waffle-cream hover:text-waffle-strawberry transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.206 2.003a7.482 7.482 0 00-7.429 6.654c-.04.6.005 1.045.078 1.519.03.192.068.399.056.645a2.152 2.152 0 01-.068.482 2.524 2.524 0 01-.275.534 2.03 2.03 0 01-.282.31c-.109.091-.202.165-.332.234-.298.157-.542.275-.832.399-.275.118-.568.26-.808.465a.95.95 0 00-.344.697c-.01.187.058.384.214.534.124.118.313.206.545.278.347.109.777.171 1.257.26.045.01.113.022.158.033.056.022.124.056.18.101.135.118.202.316.214.534.01.192-.023.399-.045.588-.034.27-.068.534-.011.79.09.405.337.743.676.968.338.214.743.316 1.134.316.26 0 .519-.045.765-.124.27-.09.508-.203.743-.316.202-.1.405-.192.631-.271a2.77 2.77 0 01.832-.135c.27 0 .565.045.854.135.225.079.428.171.631.271.235.113.473.225.743.316.247.079.508.124.765.124.393 0 .799-.101 1.134-.316.337-.225.586-.563.676-.968.056-.256.022-.52-.011-.79a3.295 3.295 0 01-.045-.588c.011-.218.079-.416.214-.534.056-.045.124-.079.18-.101.045-.011.113-.022.158-.033.48-.09.91-.151 1.257-.26.231-.073.42-.16.545-.278a.733.733 0 00.214-.534.95.95 0 00-.344-.697c-.24-.206-.533-.347-.808-.465-.29-.124-.534-.242-.832-.399a3.242 3.242 0 01-.332-.234 2.03 2.03 0 01-.282-.31 2.524 2.524 0 01-.275-.534 2.152 2.152 0 01-.068-.482c-.011-.246.025-.453.056-.645.073-.473.118-.92.078-1.519a7.482 7.482 0 00-7.429-6.654z"></path>
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
