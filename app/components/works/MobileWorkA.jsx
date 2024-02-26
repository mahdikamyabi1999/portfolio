"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import shopping from "/public/shopping.png";
import Link from "next/link";
function MobileWorkA() {
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
      className=" md:hidden"
    >
      <div className="flex md:justify-between justify-center">
        <div className="flex max-md:flex-col max-md:items-center max-md:justify-center">
          <div className=" bg-back w-[85vw] h-[480px] rounded-[50px] p-6">
            <div className="flex justify-center">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <div className="w-[70vw]">
                    <Image
                      src={shopping}
                      alt="weatherApp"
                      className=" h-40 rounded-3xl"
                    />
                  </div>
                </div>
                <h2 className="text-center text-xl font-bold mt-5">
                  eCommerce App
                </h2>
                <p className="  text-white text-base px-1 mt-4">
                  eCommerce web application using React, Redux. in this App{" "}
                  <br />
                  <span className="text-blue leading-3">
                    I work with Redux toolkit and How to manage Data and Search
                    with API
                  </span>
                </p>
                <div className="btns flex absolute gap-x-4  self-center bottom-7">
                  <Link href="https://shoppingcart.liara.run/" target="_blank">
                    <button className=" text-back cursor-none w-40 h-12 text-lg rounded-2xl     bg-white  font-normal  duration-300 hover:scale-110">
                      Demo
                    </button>
                  </Link>
                  <Link
                    href="https://github.com/mahdikamyabi1999/Shopping-Cart"
                    target="_blank"
                  >
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
  );
}

export default MobileWorkA;
