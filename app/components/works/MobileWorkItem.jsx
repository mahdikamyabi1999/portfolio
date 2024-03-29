"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function MobileWorkItem({ works }) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-out",
    });
  }, []);
  return (
    <>
      {works.map(({ id, src, h2, p, KeyLesson, demoLink, githubLink }) => (
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className=" md:hidden"
          key={id}
        >
          <div className="flex md:justify-between justify-center">
            <div className="flex max-md:flex-col max-md:items-center max-md:justify-center">
              <div className=" bg-back w-[85vw] h-[480px] rounded-[50px] p-5">
                <div className="flex justify-center">
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <div className="w-[70vw]">
                        <Image
                          src={src}
                          alt="weatherApp"
                          className=" h-40 rounded-3xl"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <h2 className="text-center text-xl font-bold mt-5">{h2}</h2>
                    <p className="  text-white text-base px-1 mt-4 leading-9">
                      {p}
                      <span> </span>
                      {KeyLesson.map(({ text, bgColor, index }) => (
                        <>
                          <span
                            key={index}
                            className={`p-1 rounded-md text-sm text-[#fff] ${bgColor}`}
                          >
                            {`${text}`}
                          </span>
                          <span> </span>
                        </>
                      ))}
                    </p>
                    <div className="btns flex absolute gap-x-4  self-center bottom-7">
                      <Link href={demoLink} target="_blank">
                        <button className=" text-back cursor-none w-40 h-12 text-lg rounded-2xl     bg-white  font-normal  duration-300 hover:scale-110">
                          Demo
                        </button>
                      </Link>
                      <Link href={githubLink} target="_blank">
                        <button className=" text-back cursor-none w-24 h-12 text-lg rounded-2xl     bg-blue font-normal hover:text-black hover:bg-red duration-300 hover:scale-110">
                          Code
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
}

export default MobileWorkItem;
