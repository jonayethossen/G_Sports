import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#081224] text-white font-rajdhani py-16 px-4">
      <div className="max-w-[1440px] mx-auto  ">
        <div className="flex">
          <div className="flex w-2/5 ">
            <img src="./logo.png" alt="logo" className="mr-3" />
            <h1 className="text-[32px] font-bold">SPORTS</h1>
            <h2 className="text-[#FB5473] text-[32px] font-bold">.</h2>
          </div>
          <div className="w-3/5 flex  items-center justify-between ">
            <h3 className="text-xl font-semibold mr-8">SUBSCRIBE NEWSLETTER</h3>
            <input
              type="email"
              placeholder="Enter your Email "
              className="pl-8 pr-[163px] py-4 border-[1px] border-[#EEEEEE] rounded-tr-[12px] rounded-tl-[4px] rounded-br-[4px] rounded-bl-[12px] text-lg font-medium h-[52px]  "
            />
            <button className="bg-[#FB5473] text-lg font-medium px-[10px] py-[10px] rounded-tl-[4px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[4px] text-center w-[184px] h-[52px] ">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.50)] px-full py-[1px] mt-[50px]  "></div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
