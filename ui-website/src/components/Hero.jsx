import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ scrollToProducts }) => {
  return (
    <section className="relative h-screen w-full bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Step into <span className="text-teal-400">comfort</span> and style
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-lg">
            Discover our latest collection of premium footwear designed for those who appreciate both fashion and function.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToProducts}
              className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-full font-medium flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg group cursor-pointer"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div 
          onClick={scrollToProducts}
          className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center cursor-pointer animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
