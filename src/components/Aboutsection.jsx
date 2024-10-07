import React from "react";
import riverImage from "../assets/riverImage.jpeg";
import hotairballons from "../assets/hotairballons.jpeg";
import aboutSecBoat from "../assets/aboutSecBoat.jpeg";
import islandsideview from "../assets/islandsideview.jpeg";

const Aboutsection = () => {
  const cardRenderArray = [
    { stats: "2000+", desc: "Our Explorers" },
    { stats: "100+", desc: "Destinations" },
    { stats: "20+", desc: "Years Experience" },
  ];
  return (
    <div className="flex mb-10">
      <div className="  w-2/5  flex items-center py-5  relative">
        <div>
          <div className=" h-[400px] w-[350px] ml-12 rounded-3xl overflow-hidden border-white border-4 ">
            <img
              className="h-full w-full object-cover"
              src={aboutSecBoat}
              alt=""
            />
          </div>
          <div className=" size-48 rounded-3xl overflow-hidden absolute top-16 right-10 z-20 border-white border-4 ">
            <img
              className="h-full w-full object-cover"
              src={islandsideview}
              alt=""
            />
          </div>
          <div className=" size-60 rounded-3xl overflow-hidden absolute  top-52 right-20 z-10 border-white border-4 ">
            <img
              className="h-full w-full object-cover"
              src={hotairballons}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" w-3/5 h-fit  flex flex-col pt-10 pr-14 pl-10  ">
        <span className="text-[#ff7202] text-xl font-medium"> About -</span>
        <span className="text-5xl font-bold">We Recommend</span>
        <span className="text-5xl  font-medium">Beautiful Destinations</span>
        <span className="text-5xl  font-medium">Every Month</span>
        <div className="relative ">
          <p className="font-roboto   text-md pt-5 pr-10   tracking-wide text-gray-600 ">
            Let's find your dream destination. Here we will recommend you a
            beautiful place and a cheap trip with your beloved family.
          </p>
        </div>
        <div className="flex justify-between pt-8 pr-14 ">
          {cardRenderArray.map((item, index) => {
            return (
              <span className=" backdrop-blur-md  p-2 px-8 bg-[#e9f0f1a7] border border-gray-200  shadow-md  rounded-xl flex flex-col justify-center items-center ">
                <p className="text-2xl font-semibold">{item.stats}</p>
                <p className="text-lg  text-center text-gray-500 ">{item.desc}</p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
