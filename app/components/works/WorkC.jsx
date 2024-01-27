'use client';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Image from "next/image";
function WorkC() {
  useEffect(()=> {
    Aos.init({
      duration: 2000,
      easing: 'ease-out',
    })
  },[])
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div className="flex justify-between">
        <div className="flex">
          <div className=" order-0 bg-back 2xl:w-[900px] 2xl:h-[550px] md:w-[750px] md:h-[450px] 2xl:rounded-[75px] md:rounded-[70px]"></div>
          <p className=" self-end pb-10 pl-10">mahdi kamyabi</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default WorkC;
