'use client';
import { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(()=> {
    Aos.init({
      duration: 1000,
      easing: 'ease-out',
    })
  },[])
  return (
    <main data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" className=" flex flex-col gap-y-32  md:my-0 md:mx-auto md:px-8 2xl:max-w-[1550px] md:max-w-[1300px]">
      <Hero  />
      <About />
      <Skills />
      <Works />
      <Contact/>
    </main>
  );
}
