// "use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
function About() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.65", "start 0.15"],
  });
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  const Text =
    "as i mentioned, my name is MAHDI KAMYABI, 24 year old programmer from TEHRAN. my journey began 6 months ago when i took the fundamental course in HTML, CSS, and JAVASCRIPT. recently, i completed my REACT JS course. i hold a bachelor's degree in ICT from shamsipour university and have fulfilled my military service obligations. currently, i have an INTERMEDIATE level of proficiency in the english language.";
  const words = Text.split(" ");

  return (
    <section
      id="about"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h2 className=" text-2xl text-center mt-16 md:mt-20 max-md:mb-8 sm:max-md:text-4xl 2xl:text-5xl md:text-4xl text-blue md:mb-28 font-semibold capitaliz tracking-wide">
        About
      </h2>

      <div className="flex flex-col items-center pl-6  sm:max-md:pl-4 md:w-full h-auto md:bg-back md:rounded-[93px] md:p-24">
        <p className="max-md:pb-6 sm:max-md:text-2xl text-xl md:text-4xl font-medium  md:leading-[85px] 2xl:leading-[90px]  ">
          Hi everyone
        </p>
        
        <p
          ref={element}
          className=" flex flex-wrap text-lg md:justify-center sm:max-md:text-2xl  md:text-4xl font-medium  md:leading-[85px] 2xl:leading-[90px]"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </p>
        <button className=" cursor-none w-48 h-16 text-xl rounded-2xl mt-12 md:mt-16 md:w-60 md:h-20  bg-red md:rounded-[20px] md:text-2xl font-medium hover:text-back hover:bg-blue duration-300 hover:scale-110">
          Download my CV
        </button>
      </div>
    </section>
  );
}
export default About;
// -------------------------------------------------------
const Word = ({ children, range, progress }) => {
  const character = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className=" mr-3 relative">
      {character.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const alphabet = [
    "A",
    "M",
    "H",
    "D",
    "I",
    "K",
    "Y",
    "B",
    "2",
    "4",
    "T",
    "E",
    "R",
    "N",
    "L",
    "C",
    "S",
    "J",
    "V",
    "S",
    "P",
  ];
  const color =
    children === alphabet[0]
      ? "text-red"
      : "" || children === alphabet[1] || children === alphabet[2]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[3]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[4]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[5]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[6]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[7]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[8]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[9]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[10]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[11]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[12]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[13]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[14]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[15]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[16]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[17]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[18]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[19]
      ? "text-red"
      : ""
      ? "text-red"
      : "" || children === alphabet[20]
      ? "text-red"
      : ""
      ? "text-red"
      : "";
  return (
    <span>
      <span className={`fixed opacity-10`}>{children}</span>
      <motion.span style={{ opacity }} className={color}>
        {children}
      </motion.span>
    </span>
  );
};
