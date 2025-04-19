import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const Notification = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div 
      className={`fixed top-20 right-4 bg-white shadow-lg rounded-lg p-4 transform transition-all duration-300 flex items-center z-50 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <CheckCircle className="text-teal-600 w-5 h-5 mr-2" />
      <span className="text-gray-800">{message}</span>
    </div>
  );
};

export default Notification;
