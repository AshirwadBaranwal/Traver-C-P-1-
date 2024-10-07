import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
import HeroCard from "./HeroCard";

const Desination = () => {
  const renderArray = [
    {
      title: "Location",
      desc: "  Where are you going ?",
      icon: <GrLocation color="#ff7202" size={22} />,
    },
    {
      title: "Person",
      desc: "How many person ?",
      icon: <BsCalendarDate color="#ff7202" size={22} />,
    },
    {
      title: "Check In",
      desc: "03 december 2024",
      icon: <BsCalendarDate color="#ff7202" size={22} />,
    },
    {
      title: "Check Out",
      desc: "19 December 2024",
      icon: <BsCalendarDate color="#ff7202" size={22} />,
    },
  ];
  return (
    <div className="px-14 mb-20 ">
      <div className="bg-[#f5f8f5] h-[350px] w-full  rounded-[2.5rem] flex flex-col items-center pt-10  relative">
        <span className="text-[#ff7202] text-lg font-medium">
          What We Give -
        </span>
        <span className="text-6xl font-bold">
          Let's Explore{" "}
          <span className="text-6xl  font-medium">Your Dream</span>
        </span>
        <span className="text-6xl  font-medium">Destination Here</span>

        <p className="w-[65%] text-center font-roboto text-lg tracking-tight pt-5 pr-10   text-gray-600 ">
          We havo recommorded popular destinations every week so you don't havo
          to worry about your dream destination with traver.
        </p>
        <div className="max-w-[1120px] absolute bottom-[-45px] ">
          <HeroCard renderArray={renderArray} />
        </div>
      </div>
    </div>
  );
};

export default Desination;
