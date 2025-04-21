import React, { useEffect, useState } from 'react';
import { ShoppingBag, Footprints } from 'lucide-react';

const Header = ({ scrollToProducts, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    if (section === 'Shop') {
      scrollToProducts();
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* <Footprints className="w-8 h-8 text-teal-600" /> */}
          <span className={`text-2xl font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            STRIDE
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { name: 'Home', section: 'Home' },
                { name: 'Shop', section: 'Shop' },
                { name: 'Men', section: 'Men' },
                { name: 'Women', section: 'Women' },
                { name: 'Kids', section: 'Kids' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href="#"
                    onClick={(e) => handleNavClick(e, item.section)}
                    className={`font-medium hover:text-teal-600 transition-colors ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              className={`relative ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-teal-600 transition-colors`}
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
