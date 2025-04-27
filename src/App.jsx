import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopProvider from "./context/ShopContext";
import { ToastContainer, toast } from 'react-toastify';
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
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ProductNotFound from "./components/ProductNotFound";
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="collection" element={<Collection />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="orders" element={<Orders />} />
        <Route path="place-order" element={<PlaceOrder />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/product-not-found" element={<ProductNotFound/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
