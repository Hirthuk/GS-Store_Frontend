import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  return (
   <section className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

    {/* Filter options */}
    <div className='min-w-60'>
      <p onClick={() => setShowFilter(!showFilter)}  className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
      <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
      {/* Category filter */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
      <p className='text-sm mb-3 font-medium'>CATEGORIES</p>
      <div className='flex flex-col gap-2 font-light text-sm text-gray-700'>
        <p className='flex gap-2'>
          <input type="checkbox" name="Men" id="Men" value={'Men'} /> Men
        </p>
        <p className='flex gap-2'>
          <input type="checkbox" name="Women" id="Women" value={'Women'} /> Women
        </p>
        <p className='flex gap-2'>
          <input type="checkbox" name="Kids" id="Kids" value={'Kids'} /> Kids
        </p>
      </div>
      </div>
      {/* SubCategory filter */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
      <p className='text-sm mb-3 font-medium'>TYPE</p>
      <div className='flex flex-col gap-2 font-light text-sm text-gray-700'>
        <p className='flex gap-2'>
          <input type="checkbox" name="Topwear" id="Topwear" value={'Topwear'} /> Topwear
        </p>
        <p className='flex gap-2'>
          <input type="checkbox" name="Bottomwear" id="Bottomwear" value={'Bottomwear'} /> Bottomwear
        </p>
        <p className='flex gap-2'>
          <input type="checkbox" name="Winterwear" id="Winterwear" value={'Winterwear'} /> Winterwear
        </p>
      </div>
      </div>
    </div>

   
    </section>
      
   
  )
}

export default Collection
