import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Products = ({id,image,name,price}) => {
    const {ruppees} = useContext(ShopContext);
  return (
   <Link to={`products/${id}`} className='flex flex-col gap-5 px-1'>
    <img className='scale-110 transition ease-in-out' src={image[0]} alt="Product_image"/>
    <div className='flex flex-col'>
        <p className='text-sm text-gray-600'>{name}</p>
        <p className='font-semibold'>{ruppees}{price}</p>
    </div>
   </Link>
  )
}

export default Products
