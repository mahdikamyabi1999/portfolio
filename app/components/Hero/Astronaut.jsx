// "use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./astronaut.json";
import arrow from "./arrow.json";

function Astronaut() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    initialSegment: [41, 278],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const secondOptions = {
    loop: true,
    autoplay: true,
    animationData: arrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className=" max-md:h-[400px] sm:max-md:h-[610px] sm:max-md:scale-75
     md:scale-90 cursor-default"
    >
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        style={{ pointerEvents: "none" }}
      />
      <div className=" h-[280px] invert opacity-60 -translate-y-20 sm:hidden scale-25">
        <Lottie
          options={secondOptions}
          isClickToPauseDisabled={true}
          style={{ pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}

export default Astronaut;
