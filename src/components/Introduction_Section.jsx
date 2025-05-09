import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const editions = [
  {
    title: "Stander Edition",
    image: "./isection_1.png",
    title1: "Stander Edition",
  },
  {
    title: "Collector Edition",
    image: "./isection_2.png",
    title1: "Stander Edition",
  },
  {
    title: "Deluxe Edition",
    image: "./isection_3.png",
    title1: "Stander Edition",
  },
  {
    title: "Ultimate Edition",
    image: "./isection_4.png",
    title1: "Stander Edition",
  },
];

const Introduction_Section = () => {
  return (
    <section className=" bg-[#FFFFFF] z-12  relative py-20">
      <div className="max-w-[1440px] mx-auto px-4">
        <h1 className="text-center text-lg text-[#FC6070] font-rajdhani font-bold ">
          CHOOSE YOUR
        </h1>
        <h1 className="text-center md:text-6xl text-4xl font-rajdhani font-bold mt-5 text-[#222222]">
          STARTER PACK
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {editions.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-[#222222] text-xl font-rajdhani font-semibold mb-3">
                {item.title}
              </h3>
              <img src={item.image} alt={item.title} className="mx-auto" />
              <div className="flex justify-center items-center mt-4">
                <span className="font-rajdhani font-semibold text-xl text-[#FB5473] mr-2">
                  {item.title1}
                </span>
                <FaArrowRight className="text-[#FB5473]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction_Section;
