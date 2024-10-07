import React from "react";
import Logo from "./Logo";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerArray = [
    ["About", "About Us", "Features", "Careers"],
    ["Company", "Our Team", "Partner with Us", "FAQ", "Blog"],
    [
      "Support",
      "Account",
      "Support Center",
      "Feedback",
      "Contact Us",
      " Accessibility",
    ],
  ];
  return (
    <div className="bg-[#f9f9f6] mt-10 px-20  font-roboto pt-5">
      <div className="flex items-center justify-between border-b-2 pb-5">
        <Logo />
        <span className="border-2 border-gray-300 flex gap-2 px-2 py-1  items-center justify-between rounded-lg ">
          <MdOutlineEmail color="#bcc3c5" />
          <input
            className=" outline-none font-roboto"
            type="text"
            placeholder="Your email"
          />
          <span className="bg-[#ff7200] p-1 rounded-md">
            <IoIosSend size={20} color="white" />
          </span>
        </span>
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/4 justify-between">
          {footerArray.map((marray, index) => {
            return (
              <div key={index}>
                {marray.map((item, index) => {
                  return (
                    <div
                      className={`p-2 text-gray-400  font-medium ${
                        index === 0 && "text-lg text-black"
                      } `}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="w-1/4 flex flex-col items-center pt-2">
          <p className="text-lg text-black font-medium">Social Media</p>
          <span className="flex gap-3">
            <AiOutlineInstagram color="#ff7200" size={23} />
            <FaFacebookF color="#ff7200" size={23} />
            <FaTwitter color="#ff7200" size={23} />
          </span>
        </div>
      </div>
      <div className="p-2 py-4 border-t-2 border-gray-300 flex items-center justify-between">
        <p> @2020 Traver. Copyright and All rights reserved,</p>
        <p> Developer - Ashirwad Kumar</p>
      </div>
    </div>
  );
};

export default Footer;
