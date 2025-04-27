import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center">
      <img 
        src={assets.empty_cart} 
        alt="Empty cart" 
        className="w-32 sm:w-40 md:w-52 h-auto mb-6 animate-bounce-slow"
      />
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
      <p className="text-gray-500 mb-6 text-sm sm:text-base max-w-md">Looks like you haven't added anything yet. Start exploring and fill your cart with amazing products!</p>
      <Link
        to="/collection"
        className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white rounded-full font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
