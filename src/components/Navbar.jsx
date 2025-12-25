import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clock, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Over ons', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Events', path: '/events' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/100' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="font-pacifico text-2xl md:text-3xl text-waffle-caramel">
              WaffelThingNl
            </span>
          </Link>

          {/* Desktop menu - centered */}
          <div className="hidden md:flex space-x-6 items-center absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium text-sm transition-colors hover:text-waffle-strawberry ${
                  location.pathname === item.path ? 'text-waffle-strawberry' : 'text-waffle-chocolate'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bestel button rechts */}
          <div className="hidden md:block">
            <a 
              href="tel:+31649100041" 
              className="waffle-btn"
            >
              Bestel nu
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-waffle-chocolate" />
            ) : (
              <Menu className="h-6 w-6 text-waffle-chocolate" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col space-y-3 animate-accordion-down">
            <div className="flex flex-col space-y-2 border-b border-gray-100 pb-3 mb-3">
              <a 
                href="tel:+31649100041" 
                className="flex items-center gap-2 text-waffle-chocolate"
              >
                <Phone size={16} />
                <span>06 49100041</span>
              </a>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors block py-2 hover:text-waffle-strawberry ${
                  location.pathname === item.path ? 'text-waffle-strawberry' : 'text-waffle-chocolate'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="tel:+31649100041" 
              className="waffle-btn w-full text-center"
            >
              Bestel nu
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
