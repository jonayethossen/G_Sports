import React from "react";
import { LuArrowRight } from "react-icons/lu";

const Introduction_Section = () => {
  return (
    <section className=" bg-[#FFFFFF] z-12  relative">
      <div className="h-[800px]  max-w-[1440px] mx-auto">
        <h1 className="text-center text-lg text-[#FC6070] font-rajdhani font-bold mt-[120px]">
          CHOOSE YOUR
        </h1>
        <h1 className="text-center text-6xl font-rajdhani font-bold mt-[20px] text-[#222222]">
          STARTER PACK
        </h1>
        <div className="flex justify-center items-center mt-[48px] gap-[24px]">
          <div>
            <h1 className="text-[#222222] font-xl font-rajdhani font-semibold">
              Stander Edition
            </h1>
            <img src="./isection_1.png" alt="" />
            <div className="flex items-center justify-center  mt-[18px]">
              <h1 className=" font-rajdhani font-semibold mr-[8px] font-xl text-[#FB5473]">
                Stander Edition
              </h1>
              <LuArrowRight className=" text-[#FB5473]" />
            </div>
          </div>
          <div>
            <h1 className="text-[#222222] font-xl font-rajdhani font-semibold">
              Collector Edition
            </h1>
            <img src="./isection_2.png" alt="" />
            <div className="flex items-center justify-center  mt-[18px]">
              <h1 className=" font-rajdhani font-semibold font-xl mr-[8px] text-[#FB5473]">
                Stander Edition
              </h1>
              <LuArrowRight className=" text-[#FB5473]" />
            </div>
          </div>
          <div>
            <h1 className="text-[#222222] font-xl font-rajdhani font-semibold">
              Deluxe Edition
            </h1>
            <img src="./isection_3.png" alt="" />
            <div className="flex items-center justify-center  mt-[18px]">
              <h1 className=" font-rajdhani font-semibold font-xl mr-[8px] text-[#FB5473]">
                Stander Edition
              </h1>
              <LuArrowRight className=" text-[#FB5473]" />
            </div>
          </div>
          <div>
            <h1 className="text-[#222222] font-xl font-rajdhani font-semibold">
              Ultimate Edition
            </h1>
            <img src="./isection_4.png" alt="" />
            <div className="flex items-center justify-center  mt-[18px]">
              <h1 className=" font-rajdhani font-semibold font-xl mr-[8px] text-[#FB5473]">
                Stander Edition
              </h1>
              <LuArrowRight className=" text-[#FB5473]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction_Section;
