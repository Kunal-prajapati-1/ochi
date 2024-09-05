/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import React from "react";

const Button = ({ value, idx }) => {
  const controls = useAnimation();
  const textColor = useAnimation();
  const handleMouseEnter = () => {
    controls.start({ y: "-100%" });
    textColor.start({ color: "rgba(255, 255, 255, 1)" });
  };

  const handleMouseLeave = () => {
    controls.start({ y: "-280%" }).then(() => {
      controls.set({ y: "100%" });
    });
    textColor.start({ color: "rgba(0, 0, 0, 1)" });
  };

  return (
    <button
      key={idx}
      className="relative uppercase sm:px-[1.6vw] md:px-[1vw] sm:text-[1.9vw] base:text-[1.3vw] md:text-[1.1vw] border-[1.2px] border-black overflow-hidden rounded-full "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {" "}
      <motion.span
        initial={{ color: "rgba(0, 0, 0, 1)" }}
        animate={textColor}
        style={{ position: "relative", zIndex: 1 }}
      >
        {value}
      </motion.span>
      <motion.div
        initial={{ y: "100%" }}
        animate={controls}
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          width: "100%",
          height: "100%",
          transform: "translate(-50%, -50%)",
          transition: "all ease-in-out ",
          scale: "240%",
          borderRadius: "40%",
          background: "black",
        }}
        className="box"
      ></motion.div>
    </button>
  );
};

export default Button;
