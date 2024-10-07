import React from "react";
import { GrLocation } from "react-icons/gr";
import womanWalks from "../assets/womanWalks.jpg";
import riverImage from "../assets/riverImage.jpeg";
import islandsideview from "../assets/islandsideview.jpeg";
import hotairballons from "../assets/hotairballons.jpeg";
import boatriver from "../assets/boatriver.jpeg";
import aboutSecBoat from "../assets/aboutSecBoat.jpeg";

const PricingSection = () => {
  const placeArray = [
    {
      rating: 5.4,
      beachName: "Karangan Beach",
      state: "Labuan Bajo",
      country: "Indonesia",
      pricing: 200,
      pic: aboutSecBoat,
    },
    {
      rating: 4.5,
      beachName: "Kepunuh Beach",
      state: "Bali",
      country: "Indonesia",
      pricing: 200,
      pic: boatriver,
    },
    {
      rating: 3.4,
      beachName: "Kucubung Beach",
      state: "Labuan Bajo",
      country: "Indonesia",
      pricing: 200,
      pic: hotairballons,
    },
    {
      rating: 5.4,
      beachName: "Lumukutan Beach",
      state: "Natuna",
      country: "Indonesia",
      pricing: 200,
      pic: islandsideview,
    },
    {
      rating: 7.4,
      beachName: "Curuti Beach",
      state: "Pontianak",
      country: "Indonesia",
      pricing: 200,
      pic: riverImage,
    },
    {
      rating: 6.4,
      beachName: "Kapuas Beach",
      state: "Semarang",
      country: "Indonesia",
      pricing: 200,
      pic: womanWalks,
    },
  ];
  return (
    <div className="px-14 mb-10">
      <div className="  h-fit w-full  grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-10">
        {placeArray.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 border-gray-200 p-2   rounded-3xl flex items-center justify-center flex-col "
            >
              <div className="w-[380px] h-[250px] rounded-2xl overflow-hidden bg-red-500 relative ">
                <span className="bg-[#f4f4f48b] font-medium font-roboto text-gray-700 backdrop-blur-xl px-2 py-1 absolute top-5 right-3 rounded-md">
                  ⭐{item.rating}
                </span>
                <img
                  className="w-full h-full object-cover"
                  src={item.pic}
                  alt="womanWalks"
                />
              </div>
              <div className="w-full p-2 font-roboto flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg">{item.beachName}</p>
                  <span className="flex gap-1 items-center">
                    <GrLocation color="#ff7202" size={18} />
                    {item.state},{item.country}
                  </span>
                </div>

                <span className="p-1 px-2 text-[#ff7202] border border-[#ff7202]  rounded-lg font-medium cursor-pointer">
                  ${item.pricing}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <span className="font-roboto p-1 px-2 mt-7 text-[#ffff] bg-[#ff7202] border border-[#ff7202]  rounded-lg font-medium cursor-pointer  ">
          View More
        </span>
      </div>
    </div>
  );
};

export default PricingSection;
