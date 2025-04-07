import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Products = ({id,image,name,price}) => {
    const {ruppees} = useContext(ShopContext);
  return (
   <Link to={`products/${id}`} className='flex flex-col gap-3 px-1'>
    <img className='transition-transform duration-300 ease-in-out hover:scale-105 origin-center rounded-lg shadow-md' src={image[0]} alt="Product_image"/>
    <div className='flex flex-col gap-1'>
        <p className='text-[12px] font-semibold raleway-name w-full'>{name}</p>
        <p className='text-sm'>{ruppees}{price}</p>
    </div>
   </Link>
  )
}

export default Products
