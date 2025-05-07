import React from "react";

const New_Gameplay = () => {
  return (
    <section className="bg-[#FFFFFF] mt-[-255px] z-10 relative">
      <div className="h-[800px] max-w-[1440px] flex items-center justify-center mx-auto">
        <div className="w-3/5">
          <div className=" w-[700px] h-[464px] p-[20px] relative z-10">
            <img
              className="absolute top-0 right-0 -z-5 "
              src="carrier_shape.png"
              alt="carrier_shape"
            />
            <img
              className=" rounded-3xl  mx-auto my-auto "
              src="./carrier_banner.png"
              alt="carrier_banner"
            />
            <img
              className="absolute -z-4 left-0 bottom-0"
              src="carrier_shape.png"
              alt="carrier_shape"
            />
          </div>
        </div>
        <div className="w-2/5 ">
          <h1 className="text-[#222222] text-6xl font-rajdhani font-bold  mt-[6px] ">
            NEW GAMEPLAY
          </h1>
          <div className="h-[3px] w-[412px] bg-[rgba(252,96,112,1)]  "></div>
          <div className="h-[10px] w-[244px] rounded-br-[12px] bg-[rgba(252,96,112,1)] "></div>
          <p className="text-[rgba(34,34,34,0.60)] text-lg font-rajdhani font-medium  mt-[25px] w-[586px] h-[140px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex items-center mt-[24px] ">
            <img
              className="mr-[6px] h-[20px] w-[20px]"
              src="./Frame_1.png"
              alt="Frame_1"
            />
            <h1 className="font-rajdhani text-lg font-semibold text-[#FB5473] ">
              LEARN MORE
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New_Gameplay;
