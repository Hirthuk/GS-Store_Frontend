import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)

  return showSearch ? (
    <section className='w-full bg-gray-100 py-4 px-6 shadow-md'>
      <div className='max-w-4xl mx-auto flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-300'>
        {/* Search Icon */}
        <img src={assets.search_icon} alt="search" className='w-5 h-5' />

        {/* Search Input */}
        <input
          type='text'
          placeholder='Try Men Women shirt'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-grow outline-none px-2 text-sm sm:text-base bg-transparent'
        />

        {/* Cancel/Close Icon */}
        <button onClick={() => setShowSearch(false)} className='hover:opacity-70'>
          <img src={assets.cross_icon} alt="close" className='w-4 h-4' />
        </button>
      </div>
    </section>
  ) : null
}

export default SearchBar
