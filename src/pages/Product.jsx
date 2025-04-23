/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Footer from '../components/Footer'
import ProductNotFound from '../components/ProductNotFound'
import { assets } from '../assets/assets'
import Products from '../components/Products'
import Title from '../components/Title'

const Product = () => {
  const { productId } = useParams();
  const { products, ruppees } = useContext(ShopContext);
  const [getProduct, setProduct] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [sizeBorder, setSizeBorder] = useState(null);
  const [imgIndex,setImageIndex] = useState(0);
  const [Filter,SetFilter] = useState(null);

  
  useEffect(() => {
    const matchedProduct = products.find(item => item._id === productId);
    if (matchedProduct) {
      setProduct(matchedProduct);
      setImage(matchedProduct.image);
      setImageIndex(0)
    } else {
      const timer = setTimeout(() => {
        navigate('/collection');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [productId, products]);

  

  useEffect(() => {
    if(getProduct){
      relatedItems();
    }
  },[getProduct])



  const relatedItems = () => {
    let productCopy = products;
    productCopy = productCopy.filter((item) => item.category==getProduct.category && item.subCategory==getProduct.subCategory && item._id !== getProduct._id);
    SetFilter(productCopy);
  }
  console.log(Filter);
  
  return (
    <section className="w-full delius-regular">
      {getProduct ? (
        <>
          {/* Main Product Section */}
          <section className="flex flex-col sm:flex-row mt-5 w-full gap-10 delius-regular px-2">
            {/* Image Section */}
            <div className="w-full sm:w-1/2 flex flex-col sm:flex-row-reverse gap-4">
              {/* Main Image */}
              <div className="w-full sm:w-4/5">
                <img
                  className="w-full h-auto border rounded-md object-cover"
                  src={image[imgIndex]}
                  alt="Main Product"
                />
              </div>

              {/* Thumbnail */}
            
              <div className='flex flex-row sm:flex-col gap-2'>
              {image.map((item,index) => {
               return <div key={index} >
                <img
                  onClick={() => setImageIndex(index)}
                  className={`w-20 h-20 sm:w-24 sm:h-24  ${index==imgIndex ? "border border-orange-500 shadow-lg": "border-none"} border-gray-600 cursor-pointer`}
                  src={item}
                  alt="Product Thumbnail"
                />
              </div>
              })}
              </div>
              
            </div>

            {/* Product Details Section */}
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
              <p className="text-xl font-semibold">{getProduct.name}</p>
              <div className='w-1/2 flex gap-1 mt-1 text-center'>
                {[...Array(4)].map((_, i) => (
                  <p key={i}><img className="w-3" src={assets.star_icon} alt="star" /></p>
                ))}
                <p><img className="w-3" src={assets.star_dull_icon} alt="dull star" /></p>
                <p className='pl-2 -mt-1'>(122)</p>
              </div>
              <p className='text-2xl font-bold mt-2'>{ruppees}{getProduct.price}</p>
              <p>{getProduct.description}</p>
              <div className='mt-4 flex flex-col gap-3'>
                <p className='font-semibold text-gray-600'>Select Size</p>
                <div className='flex flex-row gap-2'>
                  {getProduct.sizes.map((item, index) => (
                    <p
                      onClick={() => setSizeBorder(index)}
                      key={index}
                      className={`px-5 py-2 border ${sizeBorder === index ? 'border-orange-500' : 'border-gray-500'} bg-slate-200 text-sm font-semibold cursor-pointer`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div className='bg-black text-white text-center w-1/2 px-3 py-3 mt-5 min-w-36 sm:w-1/3'>
                  <button type="submit">ADD TO CART</button>
                </div>
                <p className='w-full border mt-5'></p>
              </div>
              <div className='sm:text-sm text-[13px] leading-5 mt-3 w-full'>
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </section>

          {/* Description and Review Section BELOW the main content */}
          <section className='flex flex-col mt-12 px-2'>
            <div className='flex flex-row'>
              <div className='text-center py-3 px-4 border border-gray-300 text-sm'>
                <p className='font-semibold'>Description</p>
              </div>
              <div className='text-center py-3 px-4 border border-gray-300 text-sm'>
                <p>Review(122)</p>
              </div>
            </div>
            <div className='w-full border border-gray-500 px-3 py-3 flex-wrap mt-2'>
              <p>
                An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
              </p>
              <p className='mt-2'>
                E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
              </p>
            </div>
          </section>
          {/* Related Products */}
         {/* Related Products */}
        <section className='px-2 mt-10'>
        <div className='text-center mb-7'>
        <p className='text-xl sm:text-2xl font-semibold'><Title text1={'Related'} text2={'PRODUCTS'}/></p>
        </div>
        {Filter && Filter.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6" >
            {Filter.map((item, index) => (
      <div key={index} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Products
          id={item._id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      </div>
))}

          </div>
        ) : null}
      </section>

        </>
      ) : (
        <ProductNotFound />
      )}
    </section>
  );
}

export default Product;
