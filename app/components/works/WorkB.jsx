"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import split from "/public/split.png";
import Link from "next/link";
function WorkB() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-out",
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="hidden md:block"
    >
      <div className="flex md:justify-between justify-center">
        <div></div>
        <div className="flex max-md:flex-col max-md:items-center max-md:justify-center">
          <div className="overflow-hidden order-1 bg-back w-[85vw] h-72 rounded-[50px] 2xl:w-[900px] 2xl:h-[550px] md:w-[750px] md:h-[450px] 2xl:rounded-[75px] md:rounded-[70px]">
            <Image src={split} alt="weatherApp" className=" h-full" />
            <div className="flex justify-center">
              <div className=" flex flex-col h-40 rounded-3xl w-[85vw] max-md:py-8 max-md:px-1 bottom-28 justify-evenly bg-back absolute drop-shadow-2xl md:bottom-9  2xl:w-[820px] 2xl:h-[220px] md:rounded-[45px] md:w-[670px] md:h-[200px] md:px-6 2xl:px-8">
                <p className="  text-white text-sm md:text-lg">
                  eCommerce web application using React, Redux. in this App{" "}
                  <span className="text-blue md:leading-10">
                    I work with API and how to manage Data and Search with API
                  </span>{" "}
                </p>
                <div className="btns flex gap-x-4 md:self-end self-center ">
                  <Link href="https://split.liara.run/" target="_blank">
                    <button className=" text-back cursor-none w-40 h-12 text-lg rounded-2xl   md:w-48 md:h-[55px]  bg-white md:rounded-[20px] md:text-xl font-normal  duration-300 hover:scale-110">
                      Demo
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/mahdikamyabi1999/Split-bill-mini-project"
                    target="_blank"
                  >
                    <button className=" text-back cursor-none w-24 h-12 text-lg rounded-2xl   md:w-28 md:h-[55px]  bg-blue md:rounded-[20px] md:text-xl font-normal hover:text-black hover:bg-red duration-300 hover:scale-110">
                      Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className=" md:self-end pb-10 mt-10 self-center text-4xl md:pr-10">
            Split Bill App
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkB;
