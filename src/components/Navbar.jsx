import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="flex items-center justify-between py-5 font-medium">
      <img
        src={assets.logo2}
        className="w-36 border border-gray-500 rounded-md shadow-lg"
        alt="Logo_image"
        srcset=""
      />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden " />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 h-5 cursor-pointer" alt="search icon" />
        <div>
          <img src={assets.profile_icon} className="w-5 h-5 cursor-pointer" alt="profile icon" srcset="" />
          <div className="">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
