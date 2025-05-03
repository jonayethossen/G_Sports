import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
      <div className="w-[1440px] mx-auto  bg-[#081224]">
        <div className="flex pt-[26px] pb-[26px] justify-between items-center h-[80px] px-[100px]">
          <div className="flex">
            <img src="./logo.png" alt="logo" />
            <h1 className="text-[28px] text-[#FFFFFF]">SPORTS</h1>
            <h1 className="text-[28px] text-[#FB5473]">.</h1>
          </div>
          <div>
            <ul className="flex text-[#FFFFFF]  text-[20px] font-[500] gap-[42px] items-center ">
              <li>
                <a href="#">GAMES</a>
              </li>
              <li>
                <a href="#">INFO</a>
              </li>
              <li>
                <a href="#">NEWS</a>
              </li>
              <li>
                <a href="#">ESPORTS</a>
              </li>
              <li>
                <a href="#">COMPANY</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-[32px] items-center">
            <FiShoppingCart className=" h-[42px] w-[42px]  text-[#FFFFFF] bg-[rgba(255,255,255,0.2)] p-2 rounded-full " />
            <IoMdContact className=" h-[42px] w-[42px]  text-[#FFFFFF] bg-[rgba(255,255,255,0.2)] p-2 rounded-full " />
            <button className="flex items-center gap-[4px] bg-[#FFFFFF] rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl px-[32px] py-[12px]">
              <div className=" text-[#FB5473] text-[20px] font-[500]  rounded-full font-[500]">
                Play Now
              </div>
              <FaArrowRight className="h-[24px] w-[24px] text-[#FB5473] " />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
