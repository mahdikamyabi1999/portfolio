"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./astronaut.json";

function Astronaut() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-[80vh] md:-translate-x-40 md:translate-y-[215px] cursor-default">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        style={{ pointerEvents:'none' }}
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
