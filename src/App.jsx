import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopProvider from "./context/ShopContext";
import {
  Home,
  About,
  Cart,
  Collection,
  Contact,
  Orders,
  PlaceOrder,
  Product,
  Login,
} from "./pages/index";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="collection" element={<Collection />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="orders" element={<Orders />} />
        <Route path="place-order" element={<PlaceOrder />} />
        <Route path="product/:productId" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
