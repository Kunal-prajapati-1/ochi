/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll"; // Import Locomotive Scroll
const Eye = () => {
  const outerCircle1Ref = useRef(null);
  const innerCircle1Ref = useRef(null);
  const outerCircle2Ref = useRef(null);
  const innerCircle2Ref = useRef(null);

  const [rotate, setRotate] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleMouseMove = (dets) => {
      const { clientX: x, clientY: y } = dets;
      const deltaX = x - window.innerWidth / 2;
      const deltaY = y - window.innerHeight / 2;
      const degree = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(degree - 180);

      const moveCircle = (outerCircleRef, innerCircleRef) => {
        const outerCircle = outerCircleRef.current.getBoundingClientRect();
        const innerCircle = innerCircleRef.current;

        const offsetX = x - (outerCircle.left + outerCircle.width / 2);
        const offsetY = y - (outerCircle.top + outerCircle.height / 2);

        const maxRadius = outerCircle.width / 2 - innerCircle.offsetWidth / 2;
        const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);

        let moveX = offsetX;
        let moveY = offsetY;

        if (distance > maxRadius) {
          const angle = Math.atan2(offsetY, offsetX);
          moveX = maxRadius * Math.cos(angle);
          moveY = maxRadius * Math.sin(angle);
        }
        let x1 = 0,
          y2 = 0;
        if (window.innerWidth > 1250) (x1 = 50), (y2 = 50);
        gsap.to(innerCircle, {
          x: moveX - x1,
          y: moveY - y2,
          ease: "linear",
          duration: 0.5,
        });
        // console.log(x1,y2)
      };

      moveCircle(outerCircle1Ref, innerCircle1Ref);
      moveCircle(outerCircle2Ref, innerCircle2Ref);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-[40vw] overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed= {window.innerWidth > 800 ? '-.3' : '-.04'}
        className="img_part relative h-full bg-red-500/70 w-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center"
      >
        <div className="circleBoxContainer absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="circles flex gap-2">
            <div className="circle1 h-[13vw] w-[13vw] rounded-full bg-white">
              <div
                ref={outerCircle1Ref}
                className="outerCircle relative left-[.5vw] top-[.5vw] rounded-full h-[11vw] w-[11vw]"
              >
                <div
                  ref={innerCircle1Ref}
                  className="innerCircle relative left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] h-[8vw] w-[8vw] rounded-full bg-black"
                >
                  <div
                    style={{
                      transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                    }}
                    className="line w-full h rotate-180 relative top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                  >
                    <div className="tinyCircle w-[1.2vw] h-[1.2vw] bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="circle2 h-[13vw] w-[13vw] rounded-full bg-white">
              <div
                ref={outerCircle2Ref}
                className="outerCircle relative left-[.5vw] top-[.5vw] rounded-full h-[11vw] w-[11vw]"
              >
                <div
                  ref={innerCircle2Ref}
                  className="innerCircle absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] h-[8vw] w-[8vw] rounded-full bg-black"
                >
                  <div
                    style={{
                      transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                    }}
                    className="line w-full h rotate-180 relative top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                  >
                    <div className="tinyCircle w-[1.2vw] h-[1.2vw] bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
