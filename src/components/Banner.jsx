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
    <section className="bg-[#F2F3F5] reletive overflow-hidden ">
      {/* --------------------------------Background Animation Layer----------------------------- */}
      <div
        className={`h-[600px] md:h-[800px] w-full md:w-[728px] bg-[rgba(252,96,112,0.8)] absolute top-[80px] right-0 transition-all duration-1000 ease-out ${
          animate
            ? "transition-x-0 opacity-100"
            : "translate-x-[100%] opacity-0"
        }`}
      >
        <h1 className="font-rajdhani font-semibold md:text-[200px] text-[100px] text-[rgba(255,255,255,0.3)] absolute  top-20 right-[-12px]">
          RUGBY
        </h1>
        <p className="font-rajdhani font-semibold md:text-[400px] text-[200px] text-[rgba(255,255,255,0.3)] absolute  md:top-[282px] top-[160px] right-[12px]">
          10
        </p>
      </div>

      {/* --------------------------------Banner Main Image-------------------------------- */}
      <img
        src="./man.png"
        alt="man"
        className={`absolute z-20 right-[16%] top-7 w-[250px] md:w-auto transition-all duration-1000 ease-out delay-200 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"
        }`}
      />

      {/* --------------------------------Content Area-------------------------------- */}
      <div className="relative z-10 max-w-[1440px]  flex-col flex md:flex-row h-auto md:h-[800px] px-4 md:px-0 mx-auto ">
        {/* --------------------------------Left Side-------------------------------- */}
        <div className="w-full md:w-1/2 pt-24 md:pt-[150px] ">
          <button className="px-4 py-2 text-lg font-rajdhani font-bold bg-[rgba(34,34,34,0.06)] rounded text-[rgba(252,96,112,1)] ">
            POPULAR NOW
          </button>
          <h1 className="text-[#222] md:text-[100px] text-[48px] font-rajdhani font-bold mt-2 ">
            G SPORTS.
          </h1>
          <div className="h-[3px] md:w-[488px] w-[60%] mt-2 bg-[rgba(252,96,112,1)]  "></div>
          <div className="h-[10px] md:w-[244px] w-[40%] rounded-br-3xl bg-[rgba(252,96,112,1)] "></div>
          <p className="text-[rgba(34,34,34,0.6)] text-lg font-rajdhani font-medium  mt-6 md:w-[542px] w-full ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex gap-6 items-center mt-10 flex-wrap">
            <button className=" bg-[rgba(251,84,115,1)] rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl px-6 py-3 text-[rgba(255,255,255,1)] text-lg font-rajdhani font-medium ">
              BUY NOW
            </button>
            <button className=" bg-[rgba(34,34,34,0.1)] rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl px-6 py-3 text-[rgba(34,34,34,1)] text-lg font-rajdhani font-medium  ">
              TRAILER
            </button>
          </div>
          {/* -------------------------------------------Icons----------------------------------------- */}
          <div className="flex flex-wrap mt-12 items-center ">
            <img src="./images 1.png" alt="banner" className="pr-2" />
            <img src="./ps4 1.png " alt="images 1" className="mr-[42px]" />
            <img
              src="./windows-logo 2.png "
              alt="windows-logo 2"
              className="pr-2"
            />
            <img src="./WINDOWS.png" alt="WINDOWS" className=" mr-[42px] " />
            <img src="./s.png" alt="s" className="pr-2" />
            <img src="./XBOXONE.png" alt="XBOXONE" />
          </div>
        </div>

        {/* --------------------------------Right Side Glow Effect-------------------------------- */}

        <div className="relative w-full md:w-1/2 ">
          <div className="top-0 left-0 h-[458px] w-[458px] bg-[#F00] blur-[382px] absolute -z-10 "></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
