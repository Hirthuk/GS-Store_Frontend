import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Products from './Products'
const LatestCollections = () => {
    const {products} = useContext(ShopContext);
    const [getlatestproducts, setlatestproducts] = useState([]);
    // console.log(products.slice(0,10));
    useEffect( () => {
      setlatestproducts(products.slice(0,10));
     
    },
    [products])
    // console.log(getlatestproducts);
    if(getlatestproducts.length === 0){
      return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <div className="flex flex-col items-center">
            <svg className="animate-spin h-10 w-10 text-gray-600 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
            <span className="text-gray-700 text-lg">Loading latest collections...</span>
          </div>
        </div>
      )
    }
  return (
    <section className='my-10'>
      <div className='py-2 text-2xl md:text-3xl text-center'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='text-gray-800 text-xs sm:text-sm md:text-base w-full text-center m-auto mt-4'>Discover the Latest Trends at Unbeatable Prices – Style Meets Savings! Get All new collections</p>
        
      </div>
      <div className='mt-5 mb-5 px-5 py-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {getlatestproducts.map((item,index) => (
          <Products key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>
        ))}
      </div>
    </section>
  )
}

export default LatestCollections
