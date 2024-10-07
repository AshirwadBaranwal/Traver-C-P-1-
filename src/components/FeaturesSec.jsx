import React from "react";
import { GiDirectionSigns } from "react-icons/gi";
import { BiTrip } from "react-icons/bi";
import { MdOutlineAirplaneTicket } from "react-icons/md";

const FeaturesSec = () => {
  const cardRenderArray = [
    {
      icon: <GiDirectionSigns color="#ff7202" size={40} />,
      title: "Lots of Choices",
      desc: "We have provided several choices of destinations and very cheap travelling packages",
    },
    {
      icon: <BiTrip color="#ff7202" size={40} />,
      title: "Best Tour Guide",
      desc: "We provide professional tour guide and provide people who understand the place",
    },
    {
      icon: <MdOutlineAirplaneTicket color="#ff7202" size={40} />,
      title: "Easy Booking",
      desc: "We wil also make it easict for users to book tickets or book the place you want",
    },
  ];
  return (
    <div className="w-full h-[300px] flex px-14 font-roboto   ">
      <div className="w-2/6 flex flex-col pr-20 justify-center  ">
        <span className="text-[#ff7202] text-lg font-medium">
          What We Give -
        </span>
        <span className="text-4xl font-bold">Best Features</span>
        <span className="text-4xl  font-medium">For You</span>

        <p className="font-roboto text-sm tracking-tight pt-5 pr-10   text-gray-600 ">
          We will provide the best features for thoso of you who want to travel
          comfortably with your family.
        </p>
      </div>
      <div className="w-4/6 h-[300px]  flex items-center justify-between">
        {cardRenderArray.map((items, index) => {
          return (
            <div
              className={`flex flex-col p-5 rounded-2xl ${
                index === 1 && "shadow-lg border-1 border-gray-600"
              } `}
            >
              <span className="bg-[#fff4e9] w-fit p-2 rounded-xl">
                {items.icon}
              </span>
              <p className="font-medium text-xl mt-2">{items.title}</p>
              <p>{items.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSec;
