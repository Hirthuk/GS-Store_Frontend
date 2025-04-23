import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location])

  return showSearch && visible ? (
    <section className="w-full bg-gray-100 py-4 px-4 sm:px-6 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center gap-2 sm:gap-3 bg-white rounded-full px-3 sm:px-4 py-2 shadow-sm border border-gray-300">
        {/* Search Icon */}
        <img
          src={assets.search_icon}
          alt="search"
          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
        />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Try shirt, trouser, top..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow outline-none px-1 sm:px-2 text-sm sm:text-base bg-transparent"
        />

        {/* Cross Icon (❌) */}
        <button
          onClick={() => setShowSearch(false)}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <img
            src={assets.cross_icon}
            alt="close"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </button>
      </div>
    </section>
  ) : null
}

export default SearchBar
