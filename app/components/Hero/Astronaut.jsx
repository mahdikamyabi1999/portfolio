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
    <div className="h-[80vh] 2xl:translate-y-64 2xl:-translate-x-24 md:-translate-x-40 md:translate-y-[215px] cursor-default">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        style={{ transform: "scale(4.3)", width:'300px', height: '200px',pointerEvents:'none' }}
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
