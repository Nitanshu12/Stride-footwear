import React, { useEffect, useState } from 'react';
import { Footprints } from 'lucide-react';

const Loader = () => {
  const [opacity, setOpacity] = useState(1);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      style={{ 
        opacity, 
        transition: 'opacity 0.5s ease-out',
        pointerEvents: opacity === 0 ? 'none' : 'auto'
      }}
    >
      <div className="flex flex-col items-center">
        <Footprints className="w-20 h-20 text-teal-600 animate-pulse" />
        <div className="mt-4 text-2xl font-light text-gray-800">
          STRIDE
        </div>
        <div className="mt-2 w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-teal-600 animate-[loader_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
