import React from "react";
import { assets } from "../assets/assets";
import SinglePolicy from "./singlePolicy";
const Outpolicy = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-evenly gap-10 sm:gap-15">
      <SinglePolicy text1={'Easy Exchange Policy'} text2={'We offer hassle free exchange policy'} image={assets.exchange_icon}/>
      <SinglePolicy text1={'7 Days Return Policy'} text2={'We provide 7 days free return policy'} image={assets.quality_icon}/>
      <SinglePolicy text1={'Best customer support'} text2={'we provide 24/7 customer support'} image={assets.support_img}/>
    </section>
  );
};

export default Outpolicy;
