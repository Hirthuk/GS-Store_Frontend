import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const HandleClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-white px-6 py-10 text-gray-600 text-sm mt-20 border border-gray-50 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">
        {/* Logo & About */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <Link onClick={HandleClick} to="/collection">
            <img
              src={assets.logo2}
              alt="Logo_image"
              className="w-24 rounded-md shadow-lg border border-gray-700 hover:cursor-pointer"
            />
          </Link>
          <p>
            <strong>GS Store</strong> – Your go-to destination for stylish clothing for all ages. <br />
            From trendy kidswear to timeless classics for adults, we’ve got something for everyone. <br />
            Quality, comfort, and fashion delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">GS Private Limited</h3>
          <ul className="flex flex-col gap-2">
            <Link to="/" onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-black">Home</Link>
            <Link to="/about" onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-black">About Us</Link>
            <Link to="/cart" onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-black">Delivery</Link>
            <Link to="/privacy-policy"onClick={() => window.scrollTo({top:0, behavior:'smooth'})}  className="hover:text-black">Privacy Policy</Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Get in Touch</h3>
          <div className="flex flex-col gap-2">
            <p>📞 +91 6385642886</p>
            <Link to="mailto:sharanclouddev@gmail.com" className="hover:text-black">
              ✉️ sharanclouddev@gmail.com
            </Link>
            <Link to="https://sharankumarg3.netlify.app/" className="hover:text-black" target="_blank" rel="noopener noreferrer">
              🌐 My Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-sm mt-10 text-gray-800">
        © {new Date().getFullYear()} GS Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
