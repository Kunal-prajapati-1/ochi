/* eslint-disable no-unused-vars */
import React from "react";
import FeatureBox from "./FeatureBox";
import { IoIosArrowRoundUp } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
const Featured = () => {
  const controls = useAnimation();
  const handleMouseEnter = () => {
    controls.start({
      scale: 1,
      duration: 0.2,
      transition: { ease: "linear", duration: 0.2 },
      color: "black",
    });
  };
  const handleMouseLeave = () => {
    controls.start({
      scale: 0.2,
      duration: 0.2,
      transition: { ease: "linear", duration: 0.2 },
      color: "white",
    });
  };
  const data = [
    {
      title: "fyde",
      src: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      button: ["Audit", "copyWriting", "salesBack", "slidesdesign"],
    },
    {
      title: "vise",
      src: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      button: ["Agency", "company presentation"],
    },
    {
      title: "TRAWA",
      src: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
      button: ["brand Identity", "design research", "investor deck"],
    },
    {
      title: "PREMIUM BLEND",
      src: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
      button: ["branded template"],
    },
  ];
  return (
    <div className="min-h-screen w-full pt-[5vw] bg-[#F1F1F1]">
      <div className="featured border-b-[.1vw] border-zinc-400">
        <div className="h2 px-[4vw] pb-[2vw]">
          <h2 className="text-[4vw] tracking-tighter">Featured projects</h2>
        </div>
      </div>
      <div className="images flex sm:flex-col base:flex-row flex-wrap p-[4vw] sm:gap-[5vw] base:gap-[1.3vw]">
        {data.map((item, idx) => (
          <FeatureBox key={idx} val={item} idx={idx} />
        ))}
      </div>
      <div className="btn flex items-center justify-center py-[2vw]">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" flex items-center gap-[.7vw] py-2 px-7 uppercase bg-black text-white rounded-full"
        >
          view all case studies{" "}
          <motion.span
            initial={{ scale: 0.2 }}
            animate={controls}
            className="flex items-center justify-center -mr-5 w-[3vw] h-[3vw] bg-white rounded-full text-white text-[2vw] "
          >
            <IoIosArrowRoundUp />
          </motion.span>
        </button>
      </div>
    </div>
  );
};

export default Featured;
