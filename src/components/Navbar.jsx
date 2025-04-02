import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="flex items-center justify-between py-5 font-medium">
      <img
        src={assets.logo2}
        className="w-36 border border-gray-500 rounded-md shadow-lg"
        alt="Logo_image"
        srcset=""
      />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 transition-all duration-300 hover:-translate-y-0.5 scale-105">
          <p>HOME</p>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden " />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1 transition-all duration-300 hover:-translate-y-0.5 scale-105">
          <p>COLLECTION</p>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 transition-all duration-300 hover:-translate-y-0.5 scale-105">
          <p>ABOUT</p>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 transition-all duration-300 hover:-translate-y-0.5 scale-105">
          <p>CONTACT</p>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-3 md:gap-6">
        <img
          src={assets.search_icon}
          className="w-5 h-5 cursor-pointer"
          alt="search icon"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 min-w-5 h-5 cursor-pointer"
            alt="profile icon"
            srcset=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 text-gray-700">
            <div className="flex flex-col gap-2 w-36 bg-slate-200 items-center border rounded-xl py-3 px-5">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="Cart_Icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-xl text-[8px]">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt="menu_icon"
          srcset=""
        />
      </div>
      {/* SIde bar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={()=> setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back_Icon" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 border pl-6 hover:shadow-md" to="/">Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 border pl-6 hover:shadow-md" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 border pl-6 hover:shadow-md" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 border pl-6 hover:shadow-md" to="/">CONTACT</NavLink>
        </div>
      </div> 
    </section> 
  );
};

export default Navbar;
