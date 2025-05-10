import React from "react";

const Services_Section = () => {
  return (
    <section className="bg-[#FFFFFF] py-60 px-4 relative">
      {/* ------------------------------Background Image----------------------------- */}
      {/* <img
        className="absolute  w-[250px] md:w-auto "
        src="./servic_section.png"
        alt="servic_section"
      /> */}

      {/* ------------------------------Main Content----------------------------- */}

      <div className="max-w-[1440px] items-center justify-between overflow-hidden flex flex-col lg:flex-row mx-auto rounded-2xl bg-[rgba(34,34,34,0.10)]">
        {/* <img
          className="absolute  w-[250px] md:w-auto bottom-0 "
          src="./servic_section.png"
          alt="servic_section"
        /> */}
        <div className="lg:w-3/5 w-full h-[300px] lg:h-auto ">
          <img
            className="absolute  w-[250px] md:w-auto bottom-[25%] left-[1%] "
            src="./servic_section.png"
            alt="servic_section"
          />
        </div>

        {/* .....................................Text content.................................... */}
        <div className="lg:w-2/5 w-full px-6 py-16 z-10 ">
          <h2 className="font-rajdhani text-xl font-semibold text-[#FB5473] ">
            REAL PLAYERS
          </h2>
          <h1 className="max-w-[382px] md:text-[40px] text-[32px] font-semibold text-[#222222] mt-2 font-rajdhani">
            BUOLD YOUR DREM TEAM
          </h1>
          <p className="max-w-[478px] md:text-lg text-base font-medium text-[rgba(34,34,34,0.60)] mt-4 font-rajdhani">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <button className="bg-[#FB5473] text-[#FFFFFF] text-lg font-medium font-rajdhani px-6 py-3 rounded-tl-[12px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[12px] mt-8">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services_Section;
