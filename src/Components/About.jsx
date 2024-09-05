/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.01"
      className=" w-full sm:h-screen md:h-fit overflow-hidden  bg-[#CDEA68] rounded-2xl"
    >
     <div className="part1 h-[25%]">
     <p className="sm:text-[4vh] md:text-[3.4vw] sm:p-[2vw] md:p-[2vw] text-[#212121] tracking-tight sm:leading-[4vh] md:leading-none pr-[17vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </p>
     </div>
      <div className="part_2 h-[75%] mt-[10vw] border-t-2 border-[#9FB455]">
        <div className="part2 flex sm:flex-col sm:justify-between md:flex-row md:gap-1 px-[5vw] sm:h-[83%] md:h-[37vw] ">
          <div className="p1 w-1/2 ">
            <h2 className="sm:text-[6vw] md:text-[4vw]">Our approach:</h2>
            <button className="bg-black text-white uppercase sm:px-3 sm:py-2 md:py-3 md:px-4 flex items-center gap-5 rounded-full">
              Read more
              <div className="sm:h-[1.2vw] sm:w-[1.2vw] md:h-[.5vw] md:w-[.5vw] bg-white rounded-full"></div>
            </button>
          </div>
          <div className="p2 md:w-1/2 h-fit mt-[1vw] rounded-2xl overflow-hidden">
            <img
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
