/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const LandingPage = () => {
  const [animation, setAnimation] = useState(false);
  const [width, setWidth] = useState("8vw");
  const updateWidth = () => {
    if (window.innerWidth < 800) {
      setWidth("15vw");
    } else {
      setWidth("8vw");
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const anime = setTimeout(() => {
      setAnimation(true);
    }, 500);
    return () => clearTimeout(anime);
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.4"
      className="min-h-screen w-full pt-1 select-none flex flex-col justify-around"
    >
      <div className="textStructure mt-[30vh] md:mt-[22vh] px-[2vw] md:px-[4vw]">
        {["we create", "eye-opening", "presentations"].map((item, idx) => (
          <div key={idx} className="maskers">
            <div className="overflow-hidden flex items-baseline md:items-end">
              {idx === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: animation ? width : "0" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="sm:h-[9vw] md:h-[5.2vw] mr-[.5vw] rounded-md overflow-hidden"
                >
                  <img
                    className="h-full w-full object-cover"
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                  />
                </motion.div>
              )}
              <h2 className="uppercase font-['Test Founders Grotesk X-Cond '] sm:text-[12vw] md:text-[7.4vw] font-semibold tracking-tighter leading-[13vw] md:leading-[6.2vw]">
                {item}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="otherH3  w-full">
        <div className=" px-[4vw] mt-[9vw] border-t-[1px] py-3 border-zinc-400 
        flex sm:flex-col md:flex-row items-start sm:gap-[4vw] justify-between md:items-center">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, idx) => (
            <h3 key={idx}>{item}</h3>
          ))}
          <div className="boxButton flex items-center gap-1 ">
            <div className="button uppercase border-[1px] border-zinc-700 rounded-full px-4 py-1 self-center sm:text-sm md:text-[1.1vw]">
              start the project
            </div>
            <div className="circleBox text-black flex items-center justify-center 
            text-2xl rounded-full border-[1px] border-zinc-700">
              <span className="rotate-45">
                <IoIosArrowRoundUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
