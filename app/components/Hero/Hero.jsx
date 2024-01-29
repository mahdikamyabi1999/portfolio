"use client";
import Text from "./Text";
import Astronaut from "./Astronaut";

function Hero() {
  return (
    <div className=" flex flex-col md:grid md:grid-cols-2 md:items-center">
      <Text />
      <Astronaut />
    </div>
  );
}

export default Hero;
