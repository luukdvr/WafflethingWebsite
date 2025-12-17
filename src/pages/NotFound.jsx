
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-waffle-cream p-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-waffle-caramel">404</h1>
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-waffle-pink rounded-full animate-bounce-subtle"></div>
          <img 
            src="/lovable-uploads/442e6b9e-a6ed-45b2-836b-1ada64824b2f.png" 
            alt="Wafel" 
            className="relative z-10 w-full h-full object-contain"
          />
        </div>
        <p className="text-xl md:text-2xl text-waffle-chocolate mb-8">Oeps! Deze wafel vinden we niet terug!</p>
        <Link to="/" className="waffle-btn">
          Terug naar Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
