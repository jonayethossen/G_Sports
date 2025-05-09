import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="bg-[#081224] w-full relative z-10">
      <div className="max-w-[1440px] w-full px-4  font-rajdhani mx-auto  ">
        <div className="flex py-6 justify-between items-center h-[80px] ">
          <div className="flex items-center ">
            <img src="./logo.png" alt="logo" className="w-[40px] h-auto" />
            <h1 className="text-[28px] text-[#FFFFFF] font-bold ml-3">
              SPORTS
            </h1>
            <h1 className="text-[28px] text-[#FB5473]">.</h1>
          </div>

          <ul className="hidden lg:flex  text-[#FFFFFF]  text-xl font-medium gap-10 ">
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

          <div className="flex gap-8 items-center">
            <FiShoppingCart className=" h-10 w-10  text-[#FFFFFF] bg-[rgba(255,255,255,0.2)] p-2 rounded-full " />
            <IoMdContact className=" h-10 w-10  text-[#FFFFFF] bg-[rgba(255,255,255,0.2)] p-2 rounded-full " />
            <button className="hidden sm:flex items-center gap-1 bg-[#FFFFFF] rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl px-8 py-3">
              <div className=" text-[#FB5473] text-xl font-semibold   ">
                Play Now
              </div>
              <GoArrowRight className="h-6 w-6 text-[#FB5473] items-center " />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
