import React, { useState, useRef } from 'react';
import { Footprints, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef(null);

  const handleSubscribe = () => {
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Footprints className="w-8 h-8 text-teal-400 mr-2" />
              <span className="text-2xl font-semibold">STRIDE</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium footwear for every occasion. Step into comfort and style with our expertly crafted shoes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Shop</h3>
            <ul className="space-y-3">
              {['Men\'s', 'Women\'s', 'Kids', 'Collections', 'New Arrivals', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Sustainability', 'Store Locator', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Care</h3>
            <ul className="space-y-3 mb-6">
              {['Help Center', 'Shipping & Returns', 'Size Guide', 'Track Order', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Join Our Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l bg-gray-800 text-white placeholder-gray-500"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-teal-400 hover:bg-teal-500 px-4 py-2 rounded-r text-gray-900 font-semibold"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && <p className="text-green-400 mt-2">Thank you for subscribing!</p>}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 STRIDE. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Cookie Settings'].map((item) => (
                <a key={item} href="#" className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
