import React from "react";

const Carrier_mood = () => {
  return (
    <section className="bg-[#F2F3F5] py-20 ">
      <div className=" max-w-[1440px] flex flex-col lg:flex-row px-4 gap-10 items-center justify-center mx-auto">
        {/* ------------------------------left text section---------------------------------- */}
        <div className="w-full lg:w-1/2 ">
          <h1 className="text-[#222222] md:text-6xl text-4xl font-rajdhani font-bold">
            CARRER MODE
          </h1>
          <div className="h-[3px] mt-2 w-[356px] bg-[rgba(252,96,112,1)]  "></div>
          <div className="h-[10px] w-[244px] rounded-br-[12px] bg-[rgba(252,96,112,1)] "></div>
          <p className="text-[rgba(34,34,34,0.60)] md:text-lg text-base font-rajdhani font-medium  mt-6 max-w-[586px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex items-center mt-6 ">
            <img
              className="mr-[6px] h-5 w-5"
              src="./Frame_1.png"
              alt="Frame_1"
            />
            <h1 className="font-rajdhani text-lg font-semibold text-[#FB5473] ">
              LEARN MORE
            </h1>
          </div>
        </div>

        {/* ------------------------------Right image section---------------------- */}
        <div className=" lg:w-[700px] w-full h-auto relative p-5 z-10">
          <img
            className="absolute top-0 right-0 -z-5 "
            src="carrier_shape.png"
            alt="carrier_shape"
          />
          <img
            className=" rounded-3xl  "
            src="./carrier_banner.png"
            alt="carrier_banner"
          />
          <img
            className="absolute -z-4 left-0 bottom-0 "
            src="carrier_shape.png"
            alt="carrier_shape"
          />
        </div>
      </div>
    </section>
  );
};

export default Carrier_mood;
