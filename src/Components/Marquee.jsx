/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  const [speed, setspeed] = useState("-0.01");
  const updateWidth = () => {
    if (window.innerWidth < 800) {
      setspeed("-0.1");
      // console.log(speed)
    } else {
      setspeed("-.1");
      // console.log(speed)
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed={speed}
      className="w-full rounded-xl py-10 bg-[#004D43]"
    >
      <div className="marquee h-fit flex border-t-2 border-b-2 text-white border-zinc-400 whitespace-nowrap overflow-hidden">
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 7, repeat: Infinity }}
          className="-mt-[4.5vw] -mb-[1.2vw] pr-[5vw] text-[25vw] tracking-tighter font-bold uppercase leading-none"
        >
          we are ochi
        </motion.h2>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 7, repeat: Infinity }}
          className="-mt-[4.5vw] -mb-[1.2vw] pr-[5vw] text-[25vw] tracking-tighter font-bold uppercase leading-none"
        >
          we are ochi
        </motion.h2>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 7, repeat: Infinity }}
          className="-mt-[4.5vw] -mb-[1.2vw] pr-[5vw] text-[25vw] tracking-tighter font-bold uppercase leading-none"
        >
          we are ochi
        </motion.h2>
      </div>
    </div>
  );
};

export default Marquee;
