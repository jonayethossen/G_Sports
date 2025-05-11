import React from "react";

const USEFUL_TIPS = () => {
  const cards = [
    {
      img: "./play1.png",
      title: "G Sports Patch 1.1 Is Live-Here’s What’s New",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "./play2.png",
      title: "G Sports Upgrades Runs Faster Then Ever",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      img: "./play3.png",
      title: "G Sports Patch 1.1 Is Live-Here’s What’s New",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  return (
    <section className="bg-[#F2F3F5] py-16 px-4 ">
      <div className="max-w-[1440px] mx-auto  ">
        {/* ----------------------------------header---------------------------------- */}
        <div className="text-center">
          <h2 className="md:text-lg text-base text-[#FC6070] font-rajdhani font-bold px-4 py-[10px] inline-block bg-[rgba(34,34,34,0.06)] rounded-[4px]  ">
            USEFUL TIPS
          </h2>

          <h1 className="md:text-6xl text-3xl text-[#222222] font-rajdhani font-bold mt-5 mb-12">
            PLAY LIKE A PRO
          </h1>
        </div>
        {/* ............................................cards...................................... */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {cards.map((card, index) => (
            <div key={index} className=" rounded-t-2xl overflow-hidden ">
              <img
                src={card.img}
                alt={card.title}
                className="objecet-cover w-full md:h-auto h-[250px]"
              />
              <div className="pt-4">
                <h3 className="md:text-2xl text-xl text-[#222222] font-rajdhani font-bold">
                  {card.title}
                </h3>
                <p className="md:text-lg text-base text-[rgba(34,34,34,0.6)] font-rajdhani font-medium mb-[60px]">
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
