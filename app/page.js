"use client";
import { useEffect, useRef } from "react";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const element = useRef(null);
  useEffect(() => {
    function cursor(e) {
      mouseCursor.style.top = e.pageY + "px";
      mouseCursor.style.left = e.pageX + "px";
    }
    let mouseCursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", cursor);

    document.documentElement.addEventListener("mouseleave", () => {
      return element.current.classList.add("hidden");
    });
    document.documentElement.addEventListener("mouseenter", () => {
      return element.current.classList.remove("hidden");
    });
    Aos.init({
      duration: 1000,
      easing: "ease-out",
    });
  }, []);
  return (
    <>
      <div className="hidden lg:block">
        <div className="cursor" ref={element}></div>
      </div>

      <main
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" flex flex-col gap-y-[50px] max-w-[400px]  sm:max-lg:max-w-3xl sm:max-lg:px-8 lg:gap-y-32  lg:my-0 mx-auto lg:px-8 2xl:max-w-[1550px] lg:max-w-[1300px]"
      >
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
    </>
  );
}
// px-2
