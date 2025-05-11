import React from "react";

const USEFUL_TIPS = () => {
  const cards = [
    {
      img: "/play1.png",
      title: "G Sports Patch 1.1 Is Live – Here’s What’s New",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/play2.png",
      title: "G Sports Upgrades Runs Faster Than Ever",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/play3.png",
      title: "G Sports Patch 1.1 Is Live – Here’s What’s New",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="bg-[#F2F3F5] py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-sm md:text-base text-[#FC6070] font-rajdhani font-bold px-4 py-2 bg-[rgba(34,34,34,0.06)] inline-block rounded-md">
            USEFUL TIPS
          </h2>
          <h1 className="text-3xl md:text-5xl font-rajdhani font-bold text-[#222222] mt-4 mb-12">
            PLAY LIKE A PRO
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-[1.02] duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[200px] md:h-[250px] object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl md:text-2xl font-rajdhani font-bold text-[#222222] mb-3">
                  {card.title}
                </h3>
                <p className="text-base md:text-lg text-[rgba(34,34,34,0.6)] font-rajdhani font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USEFUL_TIPS;
