import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-white relative py-20 px-4">
      {/* Background Image */}
      <img
        className="absolute bottom-0 left-0 w-[200px] md:w-[300px] lg:w-[400px] opacity-60"
        src="./servic_section.png"
        alt="service section shape"
      />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between bg-[rgba(34,34,34,0.10)] rounded-2xl overflow-hidden">
        {/* Empty space for image section or design */}
        <div className="lg:w-3/5 w-full h-[300px] lg:h-auto"></div>

        {/* Text Content */}
        <div className="lg:w-2/5 w-full px-6 py-10 z-10">
          <h2 className="font-rajdhani text-xl font-semibold text-[#FB5473]">
            REAL PLAYERS
          </h2>
          <h1 className="max-w-[382px] text-3xl md:text-4xl font-semibold text-[#222222] mt-2 font-rajdhani">
            BUILD YOUR DREAM TEAM
          </h1>
          <p className="max-w-[478px] text-base md:text-lg font-medium text-[rgba(34,34,34,0.60)] mt-4 font-rajdhani">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-[#FB5473] text-white text-lg font-medium font-rajdhani px-6 py-3 rounded-tl-[12px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[12px] mt-6">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

<section className="bg-[#FFFFFF] h-[800px] top-[37px] relative">
  <img
    className="absolute bottom-[300px] left-[40px] "
    src="./servic_section.png"
    alt="servic_section"
  />

  <div className="max-w-[1440px] lg:h-[500px] h-auto flex flex-col lg:flex-row mx-auto rounded-2xl bg-[rgba(34,34,34,0.10)]">
    <div className="lg:w-3/5 w-full "></div>

    <div className="lg:w-2/5 w-full px-6 py-10 my-auto">
      <h2 className="font-rajdhani lg:text-xl text-xl font-semibold text-[#FB5473] ">
        REAL PLAYERS
      </h2>
      <h1 className="max-w-[382px] lg:text-[40px] text-[32px] font-semibold text-[#222222] mt-2 font-rajdhani">
        BUOLD YOUR DREM TEAM
      </h1>
      <p className="max-w-[478px] text-lg font-medium text-[rgba(34,34,34,0.60)] mt-4 font-rajdhani ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <button className="bg-[#FB5473] text-[#FFFFFF] text-lg font-medium font-rajdhani px-6 py-3 rounded-tl-[12px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[12px] mt-8">
        LEARN MORE
      </button>
    </div>
  </div>
</section>;
