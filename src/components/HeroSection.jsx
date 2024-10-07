import React from "react";
import HeroCard from "./HeroCard";
import singlehotballon from "../assets/singlehotballon.jpeg";
import womanWalks from "../assets/womanWalks.jpg";
import islandSideview2 from "../assets/islandSideview2.jpeg";
import riverImage from "../assets/riverImage.jpeg";
import { GrLocation } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";

const HeroSection = () => {
  const renderArray = [
    {
      title: "Location",
      desc: "  Where are you going ?",
      icon: <GrLocation color="#ff7202" size={22} />,
    },
    {
      title: "Select Date",
      desc: "19 December 2024",
      icon: <BsCalendarDate color="#ff7202" size={22} />,
    },
  ];
  return (
    <div className="h-fit w-full flex py-16  ">
      {/* Left Part */}

      <div className=" w-2/5 h-fit  flex flex-col pt-28 pl-14  ">
        <span className="text-[#ff7202] text-xl font-medium">
          ✈️ Explore the world -
        </span>
        <span className="text-6xl font-bold">Discover The</span>
        <span className="text-6xl  font-medium">Best Destinations</span>
        <span className="text-6xl  font-medium">In The World</span>
        <div className="relative ">
          <p className="font-roboto   text-md pt-5   tracking-wide text-gray-600 ">
            Let's find your dream destination. Here we will recommend you a
            beautiful place and a cheap trip with your beloved family.
          </p>
          <div className="absolute  bottom-[-150px] z-10 mt-5">
            <HeroCard renderArray={renderArray} />
          </div>
        </div>
      </div>

      {/* Right Part */}

      <div className="w-3/5 h-fit pl-20 pt-7 flex gap-5">
        {/* pehla */}
        <div className="w-1/2 flex flex-col gap-5  items-end relative">
          <span className=" w-[150px] absolute top-32 left-4 backdrop-blur-md  p-2 bg-[#e9f0f1a7] border border-gray-200  shadow-md  rounded-xl flex flex-col justify-center items-center ">
            <p className="text-md font-semibold">100+ Destinations</p>
            <p className="text-sm  text-center ">
              More than 100 Travelers use this platform
            </p>
          </span>
          <div className="max-h-[320px] w-[260px]  overflow-hidden rounded-[3rem] flex shrink-0">
            <img
              className="h-full w-full object-cover object-center"
              src={singlehotballon}
              alt="singlehotballon"
            />
          </div>

          <div className="h-[250px] w-[350px]  overflow-hidden rounded-[3rem] flex flex-col justify-end shrink-0 ">
            <img src={riverImage} alt="riverImage" />{" "}
          </div>
        </div>
        {/* dusra */}
        <div className="w-1/2 flex flex-col gap-5  items-start pt-28 relative">
          <div className="h-[250px] w-[350px]  overflow-hidden rounded-[3rem] flex flex-col justify-center shrink-0  ">
            <span className="absolute top-20 left-10 backdrop-blur-md  p-2 bg-[#e9f0f11d] border border-gray-200  shadow-md  rounded-xl flex flex-col justify-center items-center ">
              <p className="text-md font-semibold">100%</p>
              <p className="text-sm ">Verified</p>
            </span>
            <img
              className="h-full w-full object-cover"
              src={womanWalks}
              alt="womanWalks"
            />{" "}
          </div>
          <div className="max-h-[320px] w-[260px]  overflow-hidden rounded-[3rem] flex flex-col justify-end shrink-0 ">
            <img
              className="self-center mb-0"
              src={islandSideview2}
              alt="islandSideview2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
