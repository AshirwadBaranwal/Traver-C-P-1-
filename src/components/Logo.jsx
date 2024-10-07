import React from "react";
import { FaPlaneDeparture } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className=" flex items-center justify-center gap-2">
      <div className=" size-10 bg-[#ff7202] rounded-full flex items-center justify-center ">
        <FaPlaneDeparture color="white" />
      </div>
      <h1 className="text-xl font-bold">Traver</h1>
    </div>
  );
};

export default Logo;
