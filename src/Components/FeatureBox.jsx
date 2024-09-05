/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";

const FeatureBox = ({ val, idx }) => {
  const spans = useRef([]);
  spans.current = []; // Initialize an empty array

  const addToRefs = (el) => {
    if (el && !spans.current.includes(el)) {
      spans.current.push(el);
    }
  };

  const handleMouseEnter = () => {
    // console.log("Enter");
    gsap.to(spans.current, {
      transform: " translate-y-[100%]",
      duration: 0.5,
      opacity: 1,
      ease: "linear",
      stagger: 0.1,
      delay: idx * 0.1,
    });
  };

  const handleMouseLeave = () => {
    // console.log("Leave");
    gsap.to(spans.current, {
      transform: " translate-y-[50%]",
      duration: 0,
      opacity: 0,
      ease: "linear",
      stagger: 0.01,
      delay: idx * 0.1,
    });
  };

  const { title, src, button } = val;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="part1 relative sm:w-[100%] base:w-[49%] sm:h-[70vw] base:h-[46vw] flex flex-col gap-1"
    >
      <div className="title h-[6%] flex items-center gap-2">
        <span className="w-[8px] h-[8px] rounded-full bg-[#212121]"></span>
        <h2 className="sm:text-xs md:text-lg uppercase">{title}</h2>
      </div>
      <div className="image hover:scale-[95%] transition-all ease-in-out duration-700 w-full sm:h-[85%] base:h-[85%] md:h-[86%] rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover object-bottom hover:scale-[112%] transition-all ease-in-out duration-700"
          src={src}
          alt={title}
        />
      </div>
      <div className="lowerPart absolute sm:bottom-0 md:bottom-[.5vw] h-[5%] flex gap-[.8vw] ">
        {button.map((item, idx) => (
          <Button key={idx} idx={idx} value={item}></Button>
        ))}
      </div>
      {idx % 2 === 0 ? (
        <div className="centerContent uppercase inline-block absolute z-10  top-[40%] sm:left-[50%] base:left-full 
        sm:-translate-x-[50%] sm:-translate-y-[0%]
        base:-translate-x-[50%] base:-translate-y-[0%]">
          {title.split("").map((item, idx) => (
            <span
              ref={addToRefs}
              key={idx}
              className="text-[5.5vw] opacity-0  text-[#BD7FA2] font-semibold tracking-tighter"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <div className="centerContent w-fit inline-block leading-none absolute top-[43%] sm:left-[50%] base:left-[0%] sm:-translate-x-[50%]  sm:-translate-y-[50%] base:-translate-x-[50%] base:-translate-y-[0%]">
          {title.split("").map((item, idx) => (
            <span
              ref={addToRefs}
              key={idx}
              className="text-[5.5vw] opacity-0 uppercase text-[#CDEA68] font-semibold -tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default FeatureBox;
