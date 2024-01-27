'use client';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Image from "next/image";
import astronaut from "./asset/as-moon.svg";
import github from "./asset/github.svg";
import linkedin from "./asset/linkedin.svg";
import { FaLinkedin } from "react-icons/fa6";
function Contact() {
  useEffect(()=> {
    Aos.init({
      duration: 1000,
      easing: 'ease-out',
    })
  },[])
  return (
    <div id="contact" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <h2 className="text-center 2xl:text-5xl md:text-4xl text-blue mb-28 font-semibold capitaliz tracking-wide">
        Contact
      </h2>
      <div className="flex items-center justify-between md:p-28 2xl:p-32 w-full 2xl:h-[430px] md:h-96 bg-back rounded-[93px] mb-24">
        <address className="flex flex-col gap-6 pt-3">
          <p className="text-3xl md:text-2xl not-italic">
            <span className="text-red">Phone</span>:{" "}
            <a
              href="tel:09365590721"
              className="hover:text-blue transition duration-300"
            >
              09365590721
            </a>
          </p>
          <p className="2xl:text-3xl md:text-2xl not-italic">
            <span className="text-red">Email</span>:{" "}
            <a
              href="mailto:mahdikamyabi01@gmail.com"
              className="hover:text-blue transition duration-300"
            >
              mahdikamyabi01@gmail.com
            </a>
          </p>
          <div className="flex gap-5 items-center ">
            <Image src={github} alt="github" unoptimized={false} className="2xl:h-16 md:h-[55px] md:w-[55px] 2xl:w-16 hover:invert transition duration-300 " />
            <Image src={linkedin} alt="linkedin" unoptimized={false} className="2xl:h-[70px] md:h-[60px] md:w-[60px] 2xl:w-[70px] hover:invert transition duration-300"/>
          </div>
        </address>
        <div>
        <div className=" 2xl:hidden"><Image
          unoptimized={false}
          src={astronaut}
          alt="astronaut-say-hi"
          className="h-64"
        /></div>
        <div className=" md:max-2xl:hidden"><Image
          unoptimized={false}
          src={astronaut}
          alt="astronaut-say-hi"
          className="h-76"
        /></div>
        </div>
      </div>
      <p className=" text-center pb-4 ">Made with <span className=" text-red">&#9829;</span>  by mahdi kamyabi</p>
    </div>
  );
}

export default Contact;