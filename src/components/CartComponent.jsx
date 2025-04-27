import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const CartComponent = ({ item }) => {
  const { 
    ruppees,
    updateCartItemCount,
    removeFromCart
  } = useContext(ShopContext);
  
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle quantity changes
  const handleCountChange = (e) => {
    const newCount = Math.max(1, parseInt(e.target.value) || 1);
    updateCartItemCount(item.productId, item.size, newCount);
  };

  const incrementCount = () => {
    updateCartItemCount(item.productId, item.size, item.count + 1);
  };

  const decrementCount = () => {
    const newCount = item.count - 1;
    if (newCount > 0) {
      updateCartItemCount(item.productId, item.size, newCount);
    } else {
      handleRemove();
    }
  };

  const handleRemove = () => {
    setIsDeleting(true);
    setTimeout(() => {
      removeFromCart(item.productId, item.size);
    }, 300);
  };

  return (
    <div className={`relative overflow-hidden ${isDeleting ? 'animate-slide-out' : 'animate-slide-in'} transition-all duration-300`}>
      <section className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 w-full border-b border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
        {/* Left Part: Image and Item Details */}
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full sm:w-2/3 mb-4 sm:mb-0">
          <div className="relative">
            <img 
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-cover rounded-lg border border-gray-200 transition-transform hover:scale-105 duration-200" 
              src={item.productImage} 
              alt={item.productName} 
              loading="lazy"
            />
            <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {item.size}
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-sm sm:text-xl font-semibold text-gray-800 line-clamp-2">
              {item.productName}
            </h3>
            <p className="text-lg font-medium text-amber-600">
              {ruppees} {item.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">In stock • Ready to ship</p>
          </div>
        </div>

        {/* Right Part: Quantity Controls and Delete */}
        <div className="flex flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
            <button 
              onClick={decrementCount}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <input 
              className="w-12 text-center py-2 border-x border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              type="number" 
              value={item.count} 
              onChange={handleCountChange}
              min="1"
              aria-label="Quantity"
            />
            <button 
              onClick={incrementCount}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={handleRemove}
            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CartComponent;