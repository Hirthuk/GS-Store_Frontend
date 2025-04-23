import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets"; // Assuming you have an illustration or icon
import { ShopContext } from "../context/ShopContext";

const NoResultsFound = () => {
  const {setSearch} = useContext(ShopContext);
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6 col-span-full animate-fade-in -mt-20">
      {/* Optional cool image/icon */}
      <img
        src={assets.no_results_icon || "https://i.imgur.com/qIufhof.png"} // fallback image
        alt="No Results"
        className="w-32 sm:w-40 mb-6 opacity-80"
      />

      <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800 tracking-tight">
        Oops! No Matches
      </h2>

      <p className="text-sm sm:text-base text-gray-600 max-w-sm mb-6">
        We couldn't find anything for your search. Try different keywords or remove some filters.
      </p>

      <Link to="/collection">
        <button onClick={() => setSearch('')} className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
          🔍 Explore Collection
        </button>
      </Link>
    </div>
  );
};

export default NoResultsFound;
