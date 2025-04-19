import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r bg-slate-200 flex flex-col items-center justify-center text-black px-4 rounded-sm">
      <img
        src={assets.pagenotfound} // sample undraw image
        alt="404 Page not found"
        className="w-72 mb-6 rounded-2xl"
      />
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-center max-w-md mb-6">
        Looks like you’ve hit a dead end. Don’t worry — we’ll help you find your way back!
      </p>
      <Link
        to="/"
        className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-indigo-200 transition"
      >
        🏠 Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
