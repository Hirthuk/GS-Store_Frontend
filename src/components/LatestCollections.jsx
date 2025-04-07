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
    [])
    // console.log(getlatestproducts);
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
