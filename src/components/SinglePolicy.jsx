import React from "react";

const SinglePolicy = ({ text1, text2, image }) => {
  return (
    <div className="flex flex-col items-center gap-5 sm:gap-10">
      <img className="w-12 h-12" src={image} alt="" />
      <div className="flex flex-col text-center gap-1">
        <p className="font-bold text-sm">{text1}</p>
        <p className="text-[12px] md:text-sm text-gray-500">{text2}</p>
      </div>
    </div>
  );
};

export default SinglePolicy;
