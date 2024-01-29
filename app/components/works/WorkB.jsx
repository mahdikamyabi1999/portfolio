'use client';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Image from "next/image";
function WorksB() {
  useEffect(()=> {
    Aos.init({
      duration: 2000,
      easing: 'ease-out',
    })
  },[])
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
    <div className="flex md:justify-between justify-center">
    <div></div>
      <div className="flex max-md:flex-col max-md:items-center max-md:justify-center">
    <div className=" md:order-1 order-0 bg-back w-[85vw] h-72 rounded-[50px] 2xl:w-[900px] 2xl:h-[550px] md:w-[750px] md:h-[450px] 2xl:rounded-[75px] md:rounded-[70px]"> 
    </div>
    <p className=" md:self-end pb-10 mt-10 self-center text-3xl md:pr-10">New Project</p>
    </div>
    </div>
    
    
    </div>
  
  )
}

export default WorksB
