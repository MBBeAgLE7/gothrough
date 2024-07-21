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
    <div className="home-text text-6xl text-wrap font-bold">
        <p className="para fixed w-100% left-[5rem] top-[17rem] ">
          Great Design <br /> come alive with <br />motion
        </p>
    </div>
    <div className="animation-train fixed -right-11 w-[55rem] top-[4rem]">
      {View}
    </div>
  </div>
  
  </>
  )
};

export default Move;
