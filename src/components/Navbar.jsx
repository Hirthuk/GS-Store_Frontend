import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, cartOverallCount, backEndURL, token, setToken, navigate} = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.setItem('token', '');
    setToken('');
    toast.success("Logged out successfully");
  }

  useEffect(() => {
  }, [cartOverallCount]);

  return (
    <section className="flex items-center justify-between py-5 font-medium">
      <Link to={'/'}>
        <img
          src={assets.logo2}
          className="w-36 border border-gray-500 rounded-md shadow-lg hover:cursor-pointer"
          alt="Logo_image"
          srcSet=""
        />
      </Link>
      
      {/* Desktop Navigation (hidden on md screens) */}
      <ul className="hidden lg:flex gap-5 text-sm text-gray-700">
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
        <NavLink to="contact" className="flex flex-col items-center gap-1 transition-all duration-300 hover:-translate-y-0.5 scale-105">
          <p>CONTACT</p>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden" />
        </NavLink>
        {token? <NavLink to={import.meta.env.VITE_ADMIN_URL} className="flex flex-col items-center gap-1 transition-all duration-300 hover:-translate-y-0.5 scale-105">
          <button className="border border-gray-500 px-2 py-1 rounded-xl bg-gray-700 text-white">ADMIN</button>
          <hr className="bg-gray-900 border-none h-[1.5px] w-2/3 hidden" />
        </NavLink>: ''}
      </ul>
      
      <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
        {/* Buy Me a Coffee Icon - Desktop (text hidden on md screens) */}
        <a 
          href="https://buymeacoffee.com/sharanclouk/e/417497" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1 hover:scale-105 transition-all"
          title="Buy Source Code"
        >
          <img 
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" 
            alt="Buy me a coffee" 
            className="h-5 w-5"
          />
          <span className="text-xs lg:inline hidden">Source Code</span>
        </a>
        
        <Link to={'/collection'}>
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 h-5 cursor-pointer"
            alt="search icon"
          />
        </Link>
        
        <div className="group relative">
          <img
            onClick={() => token ? null : navigate('/login')}
            src={assets.profile_icon}
            className="w-5 min-w-5 h-5 cursor-pointer"
            alt="profile icon"
            srcSet=""
          />
         
          {token &&  <div className={`group-hover:block hidden absolute dropdown-menu right-0 pt-4 text-gray-700`}>
            <div className="flex flex-col gap-2 w-36 bg-slate-200 items-center border rounded-xl py-3 px-5">
              <Link className="hover:bg-gray-200 px-2 py-1 hover:shadow-sm rounded-sm hover:border border-gray-400" to={'/login'}>
                <p className="cursor-pointer hover:text-black ">My Profile</p>
              </Link>
              <Link className="hover:bg-gray-200 px-2 py-1 hover:shadow-sm rounded-sm hover:border border-gray-400" to={'/orders'}>
                <p className="cursor-pointer hover:text-black ">Orders</p>
              </Link>
              <Link className="hover:bg-gray-200 px-2 py-1 hover:shadow-sm rounded-sm hover:border border-gray-400" to={'/login'}>
                <p onClick={logout} className="cursor-pointer hover:text-black ">Logout</p>
              </Link>
            </div>
          </div>}
        </div>
        
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="Cart_Icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-xl text-[8px]">
            {cartOverallCount}
          </p>
        </Link>
        
        {/* Show hamburger on md screens and below */}
        <img
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer lg:hidden"
          src={assets.menu_icon}
          alt="menu_icon"
          srcSet=""
        />
      </div>
      
      {/* Side bar menu for mobile and tablet */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"
          }`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back_Icon" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 border pl-6 hover:shadow-md" to="/">Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 border pl-6 hover:shadow-md" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 border pl-6 hover:shadow-md" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 border pl-6 hover:shadow-md" to="/contact">CONTACT</NavLink>
          {/* Buy Me a Coffee Link - Mobile */}
          <a 
            href="https://buymeacoffee.com/sharanclouk/e/417497" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setVisible(false)}
            className="py-2 border pl-6 hover:shadow-md flex items-center gap-2"
          >
            <img 
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" 
              alt="Buy me a coffee" 
              className="h-5 w-5"
            />
            <span>Source Code</span>
          </a>
          {token ? <NavLink onClick={() => setVisible(false)} className="py-2 border pl-6 hover:shadow-md" to={import.meta.env.VITE_ADMIN_URL}>Admin panel</NavLink>: ''}
        </div>
      </div>
    </section>
  );
};

export default Navbar;