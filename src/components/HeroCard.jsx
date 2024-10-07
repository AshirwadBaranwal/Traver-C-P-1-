import React from "react";

const HeroCard = ({ renderArray }) => {
  return (
    <div className="min-w-[670px] w-full bg-white flex shrink-0 gap-12 items-center border-gray-100 border p-4 pt-5  rounded-xl shadow-lg ">
      {renderArray.map((item, index) => {
        return (
          <div key={index} className="flex gap-3 items-center shrink-0">
            <span className="size-10 bg-[#f7dfcca7] rounded-full flex items-center justify-center  ">
              {item.icon}
            </span>
            <div className="flex flex-col font-roboto ">
              <span className="text-lg  font-semibold">{item.title}</span>
              <span className="text-sm text-gray-500">{item.desc}</span>
            </div>
          </div>
        );
      })}
      <span className="flex shrink-0 p-2 px-2 text-[#ffff] bg-[#ff7202] border border-[#ff7202]  rounded-lg font-medium cursor-pointer ml-20 ">
        Get Started
      </span>
    </div>
  );
};

export default HeroCard;
