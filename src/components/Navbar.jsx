import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-[85rem] m-auto w-full flex items-center justify-between px-20 py-3 bg-[#f9f9f6] font-roboto fixed  z-50  ">
      {/* /Logo */}

      <Logo />

      {/* Menu */}

      <div className="flex items-center gap-10 font-medium ">
        {["Home", "About", "Destinations", "Tours", "Blogs"].map(
          (items, index) => {
            return (
              <a className="" href="#" key={index}>
                {items}
              </a>
            );
          }
        )}
      </div>
      {/* Signup - Login */}
      <div className=" flex items-center justify-center gap-5">
        <span className="p-1 px-2 text-[#ff7202] border border-[#ff7202]  rounded-lg font-medium cursor-pointer">
          Sign Up
        </span>
            <span className="p-1 px-2 text-[#ffff] bg-[#ff7202] border border-[#ff7202]  rounded-lg font-medium cursor-pointer  ">
            Login
            </span>
      </div>
    </div>
  );
};

export default Navbar;
