"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./astronaut.json";

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
  return (
    <div className=" scale-90 cursor-default">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}

export default Astronaut;

// 'use client';
// import lottie from 'lottie-web'
// import { useEffect, useRef } from 'react';
// function Astronaut() {
//   const container = useRef(null);
//   useEffect(() => {
//     lottie.loadAnimation({
//       container: container.current,
//       renderer: 'svg',
//       loop: true,
//       autoplay: true,
//       animationData: require('./astronaut.json')
//     })
//   },[])
//   return <div ref={container}></div>;
// }

// export default Astronaut;
