import React, { useEffect, useRef, useState } from 'react';
import { Footprints } from 'lucide-react';
import { products } from './data/products';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import Notification from './components/Notification';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState({
    message: '',
    isVisible: false
  });

  const productSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setNotification({
      message: `${product.name} added to cart!`,
      isVisible: true
    });
  };

  const closeNotification = () => {
    setNotification((prev) => ({
      ...prev,
      isVisible: false
    }));
  };

  return (
    <>
      {isLoading && <Loader />}

      <div className="min-h-screen bg-white">
        <Header scrollToProducts={scrollToProducts} cartCount={cartItems.length} />
        <Hero scrollToProducts={scrollToProducts} />
        <ProductSection
          ref={productSectionRef}
          products={products}
          onAddToCart={handleAddToCart}
        />
        <Footer />
        <Notification
          message={notification.message}
          isVisible={notification.isVisible}
          onClose={closeNotification}
        />
      </div>
    </>
  );
}

export default App;
