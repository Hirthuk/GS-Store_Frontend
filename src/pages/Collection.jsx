/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import Products from "../components/Products";

const Collection = () => {
  const { products,search, setSearch, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortValue, setSortValue] = useState("relevant")


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(items => items !== e.target.value));
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  const applyFilter = () => {
    let productscopy = products.slice();
    if(showSearch && search){
      productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
      
    }
    if(category.length > 0){
      productscopy = productscopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productscopy = productscopy.filter(item => subCategory.includes(item.subCategory));
    }
    
    setFilterProducts(productscopy);
  }

  useEffect(() => {
    applyFilter();
  }, 

  [category,subCategory,search,setSearch]);

  const sortType = () => {
    let fcopy = filterProducts.slice();

    switch (sortValue) {
      case 'low-high':
        setFilterProducts(fcopy.sort((a,b) => a.price - b.price))
        break;
      case 'high-low':
        setFilterProducts(fcopy.sort((a,b) => b.price - a.price))
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    sortType();
  },[sortValue])
  console.log(filterProducts);
  return (
    <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
    {/* Filter options */}
      <div className="min-w-60">
        <div className="flex items-center gap-2">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
          </p>
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </div>
        {/* Category filter */}
        <div
          className={`border border-gray-300 w-full  pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="text-sm mb-3 font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 font-light text-sm text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="Men"
                id="Men"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="Women"
                id="Women"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="Kids"
                id="Kids"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory filter */}
        <div
          className={`border border-gray-300 w-full pl-5 py-3 my-5 ${showFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="text-sm mb-3 font-medium">TYPE</p>
          <div className="flex flex-col gap-2 font-light text-sm text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                name="Topwear"
                id="Topwear"
                value={"Topwear"}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                name="Bottomwear"
                id="Bottomwear"
                value={"Bottomwear"}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                name="Winterwear"
                id="Winterwear"
                value={"Winterwear"}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side collection */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 gap-2">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* Product sort */}
          <select
            className="border-2 border-gray-600 text-sm px-2 py-2 items-center"
            name="select"
            id="select"
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option  value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <Products
              key={index}
              id={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
