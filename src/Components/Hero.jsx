import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const Move = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
  <>
  <div className="train relative top-20 m-2 p-2 flex gap-4 justify-between items-center">
    <div className="home-text text-8xl mt-2 ml-10 text-wrap m-2 p-2 font-bold">
        <p>
          Great Design <br /> come alive with <br />motion
        </p>
        {/* <button className="getstated bg-blue-300 p-2 text-4xl m-4 font-medium rounded-lg border-2 border-black hover:border-4 hover:border-blue-200">
          Get Started
        </button> */}
    </div>
    <div className="animation-train w-1/2">
      {View}
    </div>
  </div>
  
  </>
  )
};

export default Move;
