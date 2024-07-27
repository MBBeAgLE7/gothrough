import React, { useRef } from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";
import { Link } from "react-scroll";

const Hero = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };

  const { View } = useLottie(options);



  return (
    <>
      <div className="train m-2 p-2 flex justify-between mt-8">
        <div className="home-text text-6xl ml-36 mt-36 text-wrap font-bold">
          <p className="para w-100%">
            Great Design <br /> come alive with <br />motion
          </p>
          <button className="font-bold text-xl bg-blue-600 text-white p-3 rounded-xl mt-8">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
            >
              Get Started
            </Link>
          </button>
        </div>
        <div className="animation-train ml-32 pt-20 w-[55rem] h-[55rem]">
          {View}
        </div>
      </div>
    </>
  )
};

export default Hero;
