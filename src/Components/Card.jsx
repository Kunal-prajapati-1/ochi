/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Card = ({ val, idx }) => {
  const { bg, src, button, width } = val;
  const [weidth, setweidth] = useState();
  const updateWidth=()=>{
    if(window.innerWidth < '600'){
      setweidth("95%")
    }else{
      setweidth(width)
    }
    // console.log(weidth,'width' );
  }
  useEffect(()=>{
    updateWidth()
    window.addEventListener('resize',updateWidth)
    return()=>{
      window.removeEventListener('resize',updateWidth)
    }
  },[])
  return (
    <>
      <div
        key={idx}
        className={`relative sm:h-[55vw] base:h-[27vw] rounded-xl overflow-hidden`}
        style={{ backgroundColor: bg, width: weidth }}
      >
        <div className="box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[6vw] w-fit">
          <img
            className="h-full w-full object-cover object-center"
            src={src}
            alt=""
          />
        </div>

      </div>
    </>
  );
};

export default Card;
