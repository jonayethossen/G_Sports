import React from "react";
import { FaYoutube, FaFacebookF, FaDiscord } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#081224] text-white font-rajdhani py-16 px-4">
      {/* ....................................Top section.......................................... */}

      <div className="max-w-[1440px] mx-auto  ">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="flex items-center">
            <img src="./logo.png" alt="logo" className="mr-3" />
            <h1 className="text-[32px] font-bold">SPORTS</h1>
            <h2 className="text-[#FB5473] text-[32px] font-bold">.</h2>
          </div>
          <div className="flex flex-col sm:flex-row lg:w-auto w-full items-center  ">
            <h3 className="text-xl font-semibold mr-8">SUBSCRIBE NEWSLETTER</h3>
            <input
              type="email"
              placeholder="Enter your Email "
              className="flex-1 pl-8 pr-[163px] py-3 mr-5 border-[1px] border-[#EEEEEE] rounded-tr-[12px] rounded-tl-[4px] rounded-br-[4px] rounded-bl-[12px] text-lg w-full sm:w-auto font-medium "
            />
            <button className="bg-[#FB5473] text-lg font-medium px-[10px] py-[10px] rounded-tl-[4px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[4px] text-center w-[184px] h-[52px] ">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        <div className="bg-[rgba(255,255,255,0.50)] w-full h-[1px] mt-[50px]  "></div>
      </div>

      {/* .........................................Bottom Content...................................... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto  mt-12">
        {/* -----------------------------------------About & Social Media----------------------------------- */}

        <div>
          <p className=" text-lg font-medium w-[410px] text-[rgba(255,255,255,0.8)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <h1 className="pt-11 text-xl font-semibold">FOLLOW US</h1>
          <div className="flex  text-[#FB5473] gap-8 pt-4">
            <FaYoutube size={28} />
            <FaFacebookF size={28} />
            <AiFillInstagram size={28} />
            <TiSocialTwitter size={28} />
            <FaDiscord size={28} />
          </div>
          <h1 className="pt-12 text-xl ">
            © 2025 sparelx, All Rights Reserved
          </h1>
        </div>
        {/* -----------------------------------------Links----------------------------------- */}
        <div className="text-xl ml-30">
          <h1 className="font-bold mb-5">QUICK LINKS</h1>
          <ul className="space-y-5 font-medium">
            <li>GAMES</li>
            <li>INFO</li>
            <li>NEWS</li>
            <li>ESPORTS</li>
            <li>COMPANY</li>
          </ul>
        </div>
        {/* ------------------------------------Policy------------------------------------ */}

        <div className="text-xl font-rajdhani ">
          <h1 className="font-bold">PRIVECY & POLICY</h1>
          <ul className="font-medium space-y-5 pt-5">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* ------------------------------------Post Gallery------------------------------------ */}
        <div>
          <h1 className="font-bold text-xl mb-4">POST GALLERY</h1>
          {/* <div>
            <div className="flex pt-6 gap-6 ">
              <img src="./Footer_1.png" alt="Footer_1" className="rounded-xl" />
              <img src="./Footer_2.png" alt="Footer_2" className="rounded-xl" />
              <img src="./Footer_3.png" alt="Footer_3" className="rounded-xl" />
            </div>
            <div className="flex pt-6 gap-6">
              <img src="./Footer_4.png" alt="Footer_4" className="rounded-xl" />
              <img src="./Footer_5.png" alt="Footer_5" className="rounded-xl" />
              <img src="./Footer_6.png" alt="Footer_6" className="rounded-xl" />
            </div>
          </div> */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`./Footer_${i}.png`}
                alt={`Footer_${i}`}
                className=" object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { FaYoutube, FaFacebookF, FaDiscord } from "react-icons/fa";
// import { TiSocialTwitter } from "react-icons/ti";
// import { AiFillInstagram } from "react-icons/ai";

// const Footer = () => {
//   return (
//     <footer className="bg-[#081224] text-white font-rajdhani py-16 px-4">
//       <div className="max-w-[1440px] mx-auto  ">
//         <div className="flex">
//           <div className="flex w-2/5 ">
//             <img src="./logo.png" alt="logo" className="mr-3" />
//             <h1 className="text-[32px] font-bold">SPORTS</h1>
//             <h2 className="text-[#FB5473] text-[32px] font-bold">.</h2>
//           </div>
//           <div className="w-3/5 flex  items-center justify-between ">
//             <h3 className="text-xl font-semibold mr-8">SUBSCRIBE NEWSLETTER</h3>
//             <input
//               type="email"
//               placeholder="Enter your Email "
//               className="pl-8 pr-[163px] py-4 border-[1px] border-[#EEEEEE] rounded-tr-[12px] rounded-tl-[4px] rounded-br-[4px] rounded-bl-[12px] text-lg font-medium h-[52px]  "
//             />
//             <button className="bg-[#FB5473] text-lg font-medium px-[10px] py-[10px] rounded-tl-[4px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[4px] text-center w-[184px] h-[52px] ">
//               SUBSCRIBE NOW
//             </button>
//           </div>
//         </div>
//         <div className="bg-[rgba(255,255,255,0.50)] w-full h-[1px] mt-[50px]  "></div>
//       </div>
//       <div className="flex justify-between max-w-[1440px] mx-auto gap-[120px] mt-12">
//         <div className="w-2/4 flex justify-between">
//           <div>
//             <p className=" text-lg font-medium w-[410px] text-[rgba(255,255,255,0.8)]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation
//             </p>
//             <h1 className="pt-11 text-xl font-semibold">FOLLOW US</h1>
//             <div className="flex  text-[#FB5473] gap-8 pt-4">
//               <FaYoutube className="w-[28px] h-[28px]" />
//               <FaFacebookF className="w-[28px] h-[28px]" />
//               <AiFillInstagram className="w-[28px] h-[28px]" />
//               <TiSocialTwitter className="w-[28px] h-[28px]" />
//               <FaDiscord className="w-[28px] h-[28px]" />
//             </div>
//             <h1 className="pt-12 text-xl ">
//               © 2025 sparelx, All Rights Reserved
//             </h1>
//           </div>
//           <div className="text-xl">
//             <h1 className="font-bold">QUICK LINKS</h1>
//             <h1 className="font-medium pt-5">GAMES</h1>
//             <h1 className="font-medium pt-5">INFO</h1>
//             <h1 className="font-medium pt-5">NEWS</h1>
//             <h1 className="font-medium pt-5">ESPORTS</h1>
//             <h1 className="font-medium pt-5">COMPANY</h1>
//           </div>
//         </div>
//         <div className="w-2/4 flex justify-between">
//           <div className="text-xl">
//             <h1 className="font-bold">PRIVECY & POLICY</h1>
//             <h1 className="font-medium pt-5">Terms of Use</h1>
//             <h1 className="font-medium pt-5">Privacy Policy</h1>
//           </div>
//           <div>
//             <h1 className="font-bold text-xl">POST GALLERY</h1>
//             <div>
//               <div className="flex pt-6 gap-6 ">
//                 <img
//                   src="./Footer_1.png"
//                   alt="Footer_1"
//                   className="rounded-xl"
//                 />
//                 <img
//                   src="./Footer_2.png"
//                   alt="Footer_2"
//                   className="rounded-xl"
//                 />
//                 <img
//                   src="./Footer_3.png"
//                   alt="Footer_3"
//                   className="rounded-xl"
//                 />
//               </div>
//               <div className="flex pt-6 gap-6">
//                 <img
//                   src="./Footer_4.png"
//                   alt="Footer_4"
//                   className="rounded-xl"
//                 />
//                 <img
//                   src="./Footer_5.png"
//                   alt="Footer_5"
//                   className="rounded-xl"
//                 />
//                 <img
//                   src="./Footer_6.png"
//                   alt="Footer_6"
//                   className="rounded-xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
