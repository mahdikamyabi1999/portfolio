'use client';
import WorkA from "./WorkA"
import WorkB from "./WorkB"
import WorkC from './WorkC'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

function Works() {
  useEffect(()=> {
    Aos.init({
      duration: 500,
    })
  },[])
  return (
    <div id="works">
    <h2 className="text-center 2xl:text-5xl md:text-4xl text-blue mb-28 font-semibold capitaliz tracking-wide" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
          Works
        </h2>
    <div className=" flex flex-col gap-16">
      <WorkA/>
      <WorkB/>
      <WorkC/>
    </div>
    </div>
  )
}

export default Works
