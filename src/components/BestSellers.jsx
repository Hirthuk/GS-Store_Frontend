import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import Products from './Products';

const BestSellers = () => {
  const {products} = useContext(ShopContext);
  const [getBestSellers,setBestSellers] = useState([]);

  useEffect(() => {
    setBestSellers(products.filter((item) => {
      if(item.bestseller){
        return true
      }
    }))
  },[])
  // console.log(getBestSellers);

  return (
    <section className='my-10'>
      <div className='py-2 text-2xl md:text-3xl text-center'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='text-gray-800 text-xs sm:text-sm md:text-base w-full text-center m-auto mt-4'>Discover the Latest Trends at Unbeatable Prices – Style Meets Savings! Get All new collections</p>
        
      </div>
      <div className='mt-5 mb-5 px-5 py-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {getBestSellers.map((item,index) => (
          <Products key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>
        ))}
      </div>
    </section>
  )
}

export default BestSellers
