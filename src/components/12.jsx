import React, { useState, useEffect } from "react";

const Banner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const alreadyAnimated = sessionStorage.getItem("bannerAnimated");
    if (!alreadyAnimated) {
      setAnimate(true);
      sessionStorage.setItem("bannerAnimated", "true");
    }
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Animation Layer */}
      <div
        className={`absolute top-20 right-0 bg-[rgba(252,96,112,0.8)] h-[600px] md:h-[800px] w-full md:w-[728px] transition-all duration-1000 ease-out ${
          animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <h1 className="absolute top-20 right-[-12px] font-rajdhani font-semibold text-[100px] md:text-[200px] text-[rgba(255,255,255,0.3)]">
          RUGBY
        </h1>
        <p className="absolute top-[160px] md:top-[282px] right-[12px] font-rajdhani font-semibold text-[200px] md:text-[400px] text-[rgba(255,255,255,0.3)]">
          10
        </p>
      </div>

      {/* Main Image */}
      <img
        src="./man.png"
        alt="man"
        className={`absolute z-10 top-[28px] right-[10%] w-[250px] md:w-auto transition-all duration-1000 ease-out delay-200 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      />

      {/* Content Area */}
      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row h-auto md:h-[800px] px-4 md:px-0">
        {/* Left Side */}
        <div className="w-full md:w-1/2 pt-24 md:pt-[150px]">
          <button className="px-4 py-2 text-lg font-rajdhani font-bold bg-[rgba(34,34,34,0.06)] rounded text-[rgba(252,96,112,1)]">
            POPULAR NOW
          </button>
          <h1 className="text-[#222] text-[48px] md:text-[100px] font-rajdhani font-bold mt-2">
            G SPORTS.
          </h1>
          <div className="h-[3px] w-[60%] md:w-[488px] bg-[rgba(252,96,112,1)] mt-2" />
          <div className="h-[10px] w-[40%] md:w-[244px] rounded-br-3xl bg-[rgba(252,96,112,1)]" />
          <p className="text-[rgba(34,34,34,0.6)] text-[16px] md:text-[18px] font-rajdhani font-medium mt-6 w-full md:w-[542px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <div className="flex gap-6 items-center mt-10 flex-wrap">
            <button className="bg-[rgba(251,84,115,1)] rounded-2xl px-6 py-3 text-white text-lg font-rajdhani">
              BUY NOW
            </button>
            <button className="bg-[rgba(34,34,34,0.1)] rounded-2xl px-6 py-3 text-[#222] text-lg font-rajdhani">
              TRAILER
            </button>
          </div>

          {/* Platform   */}
          <div className="flex flex-wrap items-center mt-12 gap-6">
            <img src="./images 1.png" alt="banner" className="h-6" />
            <img src="./ps4 1.png" alt="ps4" className="h-6" />
            <img src="./windows-logo 2.png" alt="windows" className="h-6" />
            <img src="./WINDOWS.png" alt="WINDOWS text" className="h-6" />
            <img src="./s.png" alt="s" className="h-6" />
            <img src="./XBOXONE.png" alt="XBOXONE" className="h-6" />
          </div>
        </div>

        {/* Right Side Glow Effect */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute top-0 left-0 h-[458px] w-[458px] bg-red-500 blur-[382px] opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
