import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-500 shadow-md">
      {/* Left Side - Content */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center py-10 sm:py-0">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          {/* Title with Line */}
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="w-8 border-none bg-gray-950 h-[3px] md:w-16"></p>
            <h1 className="text-1xl lg:text-2xl">THE BEST PRODUCTS</h1>
          </div>
          {/* Main Heading */}
          <h1 className="text-4xl font-bold delius-regular lg:text-5xl">New Arrivals</h1>
          {/* Shop Now with Line */}
          <div className="flex gap-2 items-center justify-center sm:justify-start mt-2">
            <h1 className="font-semibold text-2xl lg:text-3xl">SHOP NOW</h1>
            <p className="border-none bg-gray-950 h-[1.5px] w-8 md:w-16"></p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full sm:w-1/2 flex items-center">
        <img className="w-full object-cover" src={assets.hero_img} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
