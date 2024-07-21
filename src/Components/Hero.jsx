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
  <div className="train relative top-20 m-2 p-2 flex justify-between items-center">
    <div className="home-text text-7xl text-wrap font-bold">
        <p className="para fixed left-10 top-[15rem] ">
          Great Design <br /> come alive with <br />motion
        </p>
    </div>
    <div className="animation-train fixed right-0 w-[55rem] top-[4rem]">
      {View}
    </div>
  </div>
  
  </>
  )
};

export default Move;
