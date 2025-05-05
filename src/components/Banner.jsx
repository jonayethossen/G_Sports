import React from "react";

const Banner = () => {
  return (
    <section className="bg-white  ">
      <div className="w-full max-w-[1440px]  flex h-screen mx-auto ">
        <div className="w-2/4 reletive z-10">
          <button className="px-[14px] py-[10px] text-lg font-rajdhani font-bold bg-[rgba(34,34,34,0.06)] rounded-[4px] text-[rgba(252,96,112,1)] mt-[150px] ">
            POPULAR NOW
          </button>
          <h1 className="text-[#222] text-[100px] font-rajdhani font-bold  mt-[6px] ">
            G SPORTS.
          </h1>
          <div className="h-[3px] w-[488px] bg-[rgba(252,96,112,1)]  "></div>
          <div className="h-[10px] w-[244px] rounded-br-[12px] bg-[rgba(252,96,112,1)] "></div>
          <p className="text-[rgba(34,34,34,0.6)] text-[18px] font-rajdhani font-medium  mt-[25px] w-[542px] h-[140px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex gap-[24px] items-center mt-[40px]">
            <button className=" items-center  bg-[rgba(251,84,115,1)] rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl px-[24px] py-[12px] text-[rgba(255,255,255,1)] text-[18px] font-rajdhani font-medium  justify-center">
              BUY NOW
            </button>
            <button className=" items-center  bg-[rgba(34,34,34,0.1)] rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl px-[24px] py-[12px] text-[rgba(34,34,34,1)] text-[18px] font-rajdhani font-medium  justify-center">
              TRAILER
            </button>
          </div>
          <div className="flex  mt-[48px] items-center ">
            <img src="./images 1.png" alt="banner" className="  mr-[5px] " />
            <img src="./ps4 1.png " alt="images 1" className="  mr-[42px] " />
            <img
              src="./windows-logo 2.png "
              alt="images 1"
              className="mr-[8px]"
            />
            <img src="./WINDOWS.png" alt="images 1" className=" mr-[42px]   " />
            <img src="./s.png" alt="images 1" className="mr-[8px] " />
            <img src="./XBOXONE.png" alt="images 1" />
          </div>
        </div>
        <div className="h-full w-2/4    ">
          <div className="h-[458px] w-[458px] bg-[rgba(255,0,0,1)] blur-[382px] z-0 absolute "></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
