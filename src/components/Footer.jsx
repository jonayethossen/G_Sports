import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#081224]  ">
      <div className="max-w-[1440px] py-16 px-4 mx-auto flex ">
        <div className="  w-2/4 flex ">
          <img src="./logo.png" alt="logo" className="mr-3" />
          <h1 className="text-white text-[32px] font-rajdhani font-bold ">
            SPORTS
          </h1>
          <h1 className="text-[#FB5473] text-[32px] font-rajdhani font-bold">
            .
          </h1>
        </div>
        <div className="w-2/4 flex  items-center inline-block  ">
          <h3 className="text-white text-xl font-rajdhani font-semibold">
            SUBSCRIBE NEWSLETTER
          </h3>
          <input
            type="email"
            placeholder="Enter your Email "
            className="pl-8 pr-[163px] py-4 text-white border-[1px] border-[#EEEEEE] rounded-tr-[12px] rounded-tl-[4px] rounded-br-[4px] rounded-bl-[12px] "
          />
          <button className="bg-[#FB5473] text-[#FFFFFF] text-lg font-medium font-rajdhani px-[10px] py-[10px] rounded-tl-[4px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[4px] ">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
