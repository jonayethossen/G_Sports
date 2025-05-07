import React from "react";

const Services_Section = () => {
  return (
    <section className="bg-[#FFFFFF] h-[800px] top-[37px] relative">
      <img
        className="absolute bottom-[300px] left-[40px] "
        src="./servic_section.png"
        alt=""
      />
      <div className="max-w-[1440px] h-[500px] flex mx-auto bottom-0 rounded-2xl bg-[rgba(34,34,34,0.10)]">
        <div className="w-3/5"></div>
        <div className="w-2/5">
          <h2 className="font-rajdhani text-xl font-semibold text-[#FB5473] mt-[61px]">
            REAL PLAYERS
          </h2>
          <h1 className="w-[382px] text-[40px] font-semibold text-[#222222] mt-[6px] font-rajdhani">
            BUOLD YPUR DREM TEAM
          </h1>
          <p className="w-[478px] text-lg font-medium text-[rgba(34,34,34,0.60)] mt-[6px] font-rajdhani">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <button className="bg-[#FB5473] text-[#FFFFFF] text-lg font-medium font-rajdhani px-[24px] py-[12px] rounded-tl-[12px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[12px] mt-[32px]">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services_Section;
