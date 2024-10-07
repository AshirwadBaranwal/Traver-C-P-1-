import React from "react";

const DiscountSec = () => {
  return (
    <div className="px-14 mb-20 font-roboto ">
      <div className="bg-[#fff4e9] h-[350px] w-full  rounded-[2.5rem] flex flex-col items-center justify-center  relative">
        <span className="text-5xl font-bold">
          Let's Don't Miss The 50% Discount &
        </span>
        <span className="text-4xl  font-medium">
          Explore the Beauty of the World
        </span>

        <p className="w-[65%] text-center font-roboto text-lg tracking-tight pt-5 pr-10   text-gray-600 ">
          We have many special offers especially for you
        </p>
        <div className="flex items-center p-5">
          <span className="p-1 px-2 text-[#ffff] bg-[#ff7202] border border-[#ff7202]  rounded-lg font-medium cursor-pointer  ">
           Get Started
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscountSec;
