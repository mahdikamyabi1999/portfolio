"use client";
import Text from "./Text";
import Astronaut from "./Astronaut";

function Hero() {
  return (
    <div className="grid grid-cols-2 items-center">
        <Text />
        <Astronaut />
    </div>
  );
}

export default Hero;
