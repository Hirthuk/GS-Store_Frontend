import React from 'react';
import Footer from '../components/Footer';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter';

const Contact = () => {
  return (
    <div>
      <section className="delius-regular flex flex-col items-center gap-10 px-4 py-10 text-lg md:text-xl">
        <Title text1={"CONTACT"} text2={"US"} />

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full max-w-6xl">
          {/* Contact Image */}
          <img
            className="w-full md:w-1/2 max-w-md rounded-md shadow-lg"
            src={assets.contact}
            alt="Contact"
          />

          {/* Contact Details */}
          <div className="flex flex-col gap-5 text-gray-700 w-full md:w-1/2">
            <h1 className="font-bold text-2xl md:text-3xl text-black">Our Store</h1>
            <div className="leading-relaxed">
              <p>Bommasandra-Jigani Link Road</p>
              <p>Jigani-560105, Bangalore, India</p>
            </div>

            <div className="leading-relaxed">
              <p><span className="font-semibold">Tel:</span> +91 6385642886</p>
              <p><span className="font-semibold">Email:</span> sharanclouddev@gmail.com</p>
            </div>

            <h1 className="font-bold text-2xl md:text-3xl text-black mt-5">Careers at GS Store</h1>
            <p>Learn more about our teams and job openings.</p>

            {/* Explore Jobs Button */}
            <div className="hover:bg-black hover:text-white border border-gray-700 px-6 py-3 rounded-lg cursor-pointer transition-all w-fit">
              Explore Jobs
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Contact;
