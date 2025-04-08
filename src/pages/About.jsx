import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <section className='flex flex-col items-center align-middle text-2xl gap-10 mt-10 font-semibold'>
      <p className='w-full border border-gray-100 mt-[-20px]'></p>
      <Title text1={'ABOUT'} text2={'US'}/>
      <img className='rounded-xl' src={assets.ABOUT_US_Image} alt="" srcset="" />
      <div className='delius-regular flex flex-col gap-5 text-gray-950 text-[15px] font-bold leading-relaxed '>
        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
        <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
      </div>
      <div className='delius-regular flex flex-col gap-5 text-gray-950 text-[15px] font-bold leading-relaxed' >
        <h2 className='font-bold text-xl'>Our Mission</h2>
        <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
      </div>
      <Title text1={"WHY"} text2={'CHOOSE US'}/>
      div
    </section>
  )
}

export default About
