import React, { forwardRef } from 'react';
import ProductCard from './ProductCard';

const ProductSection = forwardRef((props, ref) => {
  const { products, onAddToCart } = props;

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium footwear, designed for comfort, style, and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProductSection;
