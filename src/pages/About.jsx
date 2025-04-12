import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
const About = () => {
  return (
    <section className='flex flex-col items-center align-middle text-2xl gap-10 mt-10 font-semibold delius-regular '>
      <p className='w-full border border-gray-100 mt-[-20px]'></p>
      <Title text1={'ABOUT'} text2={'US'}/>
      <div className='flex flex-col items-center gap-10 mt-10 md:flex-row'>
      <img className='rounded-xl md:w-1/2' src={assets.ABOUT_US_Image} alt="About us"/>
      <div className='flex flex-col gap-5'>
      <div className='delius-regular flex flex-col gap-5 text-gray-950 text-[15px] font-bold leading-relaxed '>
        <p><span className='font-bold'>GS Store </span>was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
        <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
      </div>
      <div className='flex flex-col gap-5 text-gray-950 text-[15px] leading-relaxed' >
        <h2 className='font-bold text-xl'>Our Mission</h2>
        <p>Our mission at <span className='font-bold'>GS Store </span> is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
      </div>
      </div>
      </div>
      <Title text1={"WHY"} text2={'CHOOSE US'}/>
      <div className='flex flex-col items-center mt-5 md:flex-row'>
  <div className='w-full  flex flex-col gap-5 items-start text-sm px-14 py-12 border border-gray-400 rounded-lg shadow-sm '>
    <p className='font-bold'>Quality Assurance:</p>
    <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
  </div>

  <div className='w-full  flex flex-col gap-5 items-start text-sm px-14 py-12 border border-gray-400 rounded-lg shadow-sm'>
    <p className='font-bold'>Convenience:</p>
    <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
  </div>

  <div className='w-full  flex flex-col gap-5 items-start text-sm px-14 py-12 border border-gray-400 rounded-lg shadow-sm'>
    <p className='font-bold'>Exceptional Customer Service:</p>
    <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
  </div>
</div>

     
      <NewsLetter/>
    </section>
  )
}

export default About
