import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const ProductNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 to-indigo-500 flex flex-col items-center justify-center text-white px-4">
      <img
        src={assets.productnotfound} // sample undraw image
        alt="Product not found"
        className="w-72 mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">Oops! Product Not Found</h1>
      <p className="text-lg text-center max-w-md mb-6">
        The product you're looking for doesn't seem to exist. Maybe it was removed or the ID is wrong.
      </p>
      <Link
        to="/collection"
        className="bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-100 transition"
      >
        🔙 Routing Back to Collection ...
      </Link>
    </div>
  );
};

export default ProductNotFound;
