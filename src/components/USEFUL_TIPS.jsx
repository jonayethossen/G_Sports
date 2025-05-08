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
    <section className="bg-[#F2F3F5] ">
      <div className="max-w-[1440px] mx-auto  ">
        <div className="text-center">
          <h2 className="text-lg text-[#FC6070] font-rajdhani font-bold px-[16px] py-[10px] bg-[rgba(34,34,34,0.06)] inline-block rounded-[4px]  ">
            USEFUL TIPS
          </h2>
        </div>
        <h1 className="text-6xl text-[#222222] font-rajdhani font-bold text-center mt-[20px] mb-[48px]">
          PLAY LIKE A PRO
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-[24px] max-w-[1440px] mx-auto">
        {cards.map((card, index) => (
          <div key={index} className=" rounded-t-2xl overflow-hidden ">
            <img src={card.img} alt={card.title} className="objecet-cover " />
            <div>
              <h3 className="text-2xl text-[#222222] font-rajdhani font-bold">
                {card.title}
              </h3>
              <p className="text-lg text-[rgba(34,34,34,0.6)] font-rajdhani font-medium mb-[60px]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default USEFUL_TIPS;
