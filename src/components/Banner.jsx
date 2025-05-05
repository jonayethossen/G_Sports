import React, { useState, useEffect } from "react";

const Banner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const alreadyAnimated = sessionStorage.getItem("bannerAnimated");
    if (!alreadyAnimated) {
      setAnimate(true);
      localStorage.setItem("bannerAnimated", "true");
    }
  }, []);

  return (
    <section className="bg-white reletive  ">
      <div
        className={`h-[800px] w-[728px] bg-[rgba(252,96,112,0.8)] absolute top-[80px] right-0 transition-all duration-1000 ease-out ${
          animate
            ? "transition-x-0 opacity-100"
            : "translate-x-[100%] opacity-0"
        }`}
      >
        <h1 className="font-rajdhani font-semibold text-[200px] text-[rgba(255,255,255,0.3)] absolute  top-[80px] right-[-12px]">
          RUGBY
        </h1>
        <p className="font-rajdhani font-semibold text-[400px] text-[rgba(255,255,255,0.3)] absolute  top-[282px] right-[12px]">
          10
        </p>
        {/* <img
          src="./man.png"
          alt="man"
          className=" w-6xl h-screen absolute z-10 right-[483px] bottom-0 "
        /> */}
      </div>
      <img
        src="./man.png"
        alt="man"
        className={`absolute z-10 right-[278px] top-[28px] transition-all duration-1000 ease-out delay-200 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"
        }`}
      />
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
              alt="windows-logo 2"
              className="mr-[8px]"
            />
            <img src="./WINDOWS.png" alt="WINDOWS" className=" mr-[42px]   " />
            <img src="./s.png" alt="s" className="mr-[8px] " />
            <img src="./XBOXONE.png" alt="XBOXONE" />
          </div>
        </div>
        <div className="h-full w-2/4 ">
          <div className="h-[458px] w-[458px] bg-[#F00] blur-[382px] z-2 absolute "></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
