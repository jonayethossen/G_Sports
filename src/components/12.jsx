import React from "react";

const New_Gameplay = () => {
  return (
    <section className="bg-white relative z-10 mt-[-255px]">
      <div className="max-w-[1440px] mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-3/5 relative">
          <div className="relative w-full max-w-[700px] h-auto mx-auto p-4 z-10">
            <img
              className="absolute top-0 right-0 w-28 md:w-40 lg:w-52 -z-10"
              src="/carrier_shape.png"
              alt="Decorative top shape"
            />
            <img
              className="rounded-3xl w-full h-auto object-cover"
              src="/carrier_banner.png"
              alt="Gameplay banner"
            />
            <img
              className="absolute bottom-0 left-0 w-28 md:w-40 lg:w-52 -z-10"
              src="/carrier_shape.png"
              alt="Decorative bottom shape"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-[#222222] text-4xl md:text-5xl lg:text-6xl font-bold font-rajdhani">
            NEW GAMEPLAY
          </h1>

          {/* Red lines */}
          <div className="mt-2 h-[3px] w-4/5 max-w-[412px] bg-[#FC6070]"></div>
          <div className="h-2 w-1/2 max-w-[244px] rounded-br-xl bg-[#FC6070]"></div>

          {/* Description */}
          <p className="text-[#22222299] text-base md:text-lg mt-6 font-medium font-rajdhani leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Learn More */}
          <div className="flex items-center mt-6 cursor-pointer hover:opacity-80 transition">
            <img
              className="w-5 h-5 mr-2"
              src="/Frame_1.png"
              alt="Learn more icon"
            />
            <span className="text-[#FB5473] text-lg font-semibold font-rajdhani">
              LEARN MORE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New_Gameplay;




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
