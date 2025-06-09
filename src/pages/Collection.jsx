/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import Products from "../components/Products";
import NoResultsFound from "../components/NoResultsFound";

const Collection = () => {
  const { products, search, setSearch, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortValue, setSortValue] = useState("relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productscopy = [...products];

    if (showSearch && search) {
      productscopy = productscopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productscopy = productscopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productscopy = productscopy.filter(
        (item) =>
          item.subCategory &&
          subCategory
            .map((sc) => sc.toLowerCase())
            .includes(item.subCategory.toLowerCase())
      );
    }

    console.log("Filtered products:", productscopy);
    setFilterProducts(productscopy);
  };

  useEffect(() => {
    if (products && products.length > 0) {
      applyFilter();
    }
  }, [category, subCategory, search, setSearch, products]);

  const sortType = () => {
    const fcopy = [...filterProducts];
    switch (sortValue) {
      case "low-high":
        setFilterProducts([...fcopy].sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts([...fcopy].sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortType();
  }, [sortValue]);

  return (
    <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <div className="flex items-center justify-between">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
          </p>
          <button
            onClick={() => {
              setCategory([]);
              setSubCategory([]);
              setSortValue("relevant");
            }}
            className="text-sm text-gray-500 hover:text-black"
          >
            Reset Filters
          </button>
        </div>

        {/* Category filter */}
        <div
          className={`border border-gray-300 w-full pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm mb-3 font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 font-light text-sm text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <p key={cat} className="flex gap-2">
                <input
                  type="checkbox"
                  value={cat}
                  checked={category.includes(cat)}
                  onChange={toggleCategory}
                />
                {cat}
              </p>
            ))}
          </div>
        </div>

        {/* SubCategory filter */}
        <div
          className={`border border-gray-300 w-full pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm mb-3 font-medium">TYPE</p>
          <div className="flex flex-col gap-2 font-light text-sm text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <p key={type} className="flex gap-2">
                <input
                  type="checkbox"
                  value={type}
                  checked={subCategory.includes(type)}
                  onChange={toggleSubCategory}
                />
                {type}
              </p>
            ))}
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
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <Products
                key={index}
                id={item._id}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            ))
          ) : (
            <div className="col-span-full">
              <NoResultsFound />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Collection;
