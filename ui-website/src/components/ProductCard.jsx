import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-3 right-3">
          <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.description.substring(0, 60)}...</p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>

          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`${
              isAdding 
                ? 'bg-green-500' 
                : 'bg-teal-600 hover:bg-teal-700'
            } text-white py-2 px-4 rounded-full transition-all duration-300 flex items-center cursor-pointer`}
          >
            {isAdding ? (
              <>Added</>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-1" />
                Buy Now
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
