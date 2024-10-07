import React from "react";
import SahilImage from "../assets/SahilImage.jpg";
import ReviewImage from "../assets/ReviewImage.png";

const CustomerReview = () => {
  return (
    <div className="w-full h-[500px]  flex px-14 font-roboto ">
      <div className="w-1/2 h-[500px] py-10 ">
        <div className="flex flex-col pr-20 justify-center  ">
          <span className="text-[#ff7202] text-xl font-medium">
            What They Say -
          </span>
          <span className="text-5xl font-bold">What Our Customer</span>
          <span className="text-5xl  font-medium">Say About Us</span>
        </div>
        <div className="w-[80%] mt-8 rounded-3xl border-2 border-gray-200 h-[220px] p-5 bg-[#f5f8f5]  ">
          <div className="pb-1 flex items-center justify-start gap-2 border-b-2 border-gray-200">
            <div className="h-14 w-14 rounded-full bg-red-500 border-2 border-gray-500 overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src={SahilImage}
                alt=""
              />
            </div>
            <span>
              <p className="font-semibold text-lg">Ashirwad Kumar</p>
              <p className="font-medium text-gray-500">Travel Enthusiast</p>
            </span>
          </div>
          <p className="pt-2 text-gray-600 font-medium">
            This platfoem is very helpful because there are many beautiful
            destinations hero and this platform really helps mo in finding
            beautiful destinations and also very good service so I really to use
            Traver when I want to go travelLng with my family.-
          </p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <div className="w-1/2 h-[500px]">
        <img src={ReviewImage} alt="" />
      </div>
    </div>
  );
};

export default CustomerReview;
