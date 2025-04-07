import React from "react";

const NewsLetter = () => {
    const OnSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
   <div className="text-center mt-20">
    <p className="text-xl font-medium text-gray-800">Subscribe now & get 20% off</p>
    <p className="text-gray-400 mt-3">Join the club & unlock 20% off your first order – it’s that easy!</p>
    <form action="" onSubmit={OnSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input className="w-full sm:flex-1 outline-none text-xs md:text-[15px]" type="email" name="email" id="email" placeholder="Enter your email" required />
        <button className="bg-black text-white text-xs px-10 py-4">Subscribe</button>
    </form>
   </div>
  );
};

export default NewsLetter;
