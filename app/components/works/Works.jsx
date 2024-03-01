// 'use client';
import WorkA from "./WorkA";
import WorkB from "./WorkB";
import WorkC from "./WorkC";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MobileWorks from "./MobileWorks";

function Works() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <section id="works">
      <h2
        className=" text-2xl text-center mt-8 max-md:mb-8 sm:max-md:text-4xl 2xl:text-5xl md:text-4xl text-blue md:mb-28 font-semibold capitaliz tracking-wide"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Works
      </h2>
      <div className=" flex flex-col gap-5 md:gap-16">
        <WorkA />
        <MobileWorks/>
        <WorkB />
        <WorkC />
      </div>
    </section>
  );
}

export default Works;
