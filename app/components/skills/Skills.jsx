// 'use client';
import Carousel from "./Carousel";
import CarouselSecondMobile from "./CarouselSecondMobile";
import Text from "./Text";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div id="skills" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Text />
      <Carousel />
      <CarouselSecondMobile />
    </div>
  );
}

export default Skills;
