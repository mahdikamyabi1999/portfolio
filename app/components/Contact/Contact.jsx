// "use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import astronaut from "./asset/as-moon.svg";
import github from "./asset/github.svg";
import linkedin from "./asset/linkedin.svg";
import MobileContact from "./MobileContact";
function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
    });
  }, []);
  return (
    <div id="contact" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <h2 className=" text-2xl text-center md:mt-8  sm:max-md:text-4xl 2xl:text-5xl md:text-4xl text-blue md:mb-28 font-semibold capitaliz tracking-wide">
        Contact <span className="md:hidden">Me</span>
      </h2>
      <MobileContact />
      <div className="hidden md:flex  md:items-center md:justify-between md:p-28 2xl:p-32 md:w-full 2xl:h-[430px] md:h-96 md:bg-back md:rounded-[93px] max-md:mb-12 md:mb-24">
        <address className="flex flex-col md:gap-6 md:pt-3">
          <p className="2xl:text-3xl md:text-2xl not-italic">
            <span className="text-red">Phone</span>:{" "}
            <Link
              href="tel:09365590721"
              className="hover:text-blue transition duration-300"
            >
              09365590721
            </Link>
          </p>
          <p className="2xl:text-3xl md:text-2xl not-italic">
            <span className="text-red">Email</span>:{" "}
            <Link
              href="mailto:mahdikamyabi01@gmail.com"
              className="hover:text-blue transition duration-300"
            >
              mahdikamyabi01@gmail.com
            </Link>
          </p>
          <div className="flex gap-5 items-center ">
            <Link href="https://github.com/mahdikamyabi1999" target="_blank">
              <Image
                src={github}
                alt="github"
                href="https://www.linkedin.com/in/mahdikamyabi1999/"
                unoptimized={false}
                className="2xl:h-16 md:h-[55px] md:w-[55px] 2xl:w-16 hover:invert transition duration-300 "
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/mahdikamyabi1999/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="linkedin"
                unoptimized={false}
                className=" h-10 2xl:h-[70px] md:h-[60px] md:w-[60px] 2xl:w-[70px] hover:invert transition duration-300"
              />
            </Link>
          </div>
        </address>
        <div>
          <div className="">
            <Image
              unoptimized={false}
              src={astronaut}
              alt="astronaut-say-hi"
              className="md:h-64 2xl:h-72"
            />
          </div>
        </div>
      </div>
      <p className=" text-center text-xs pb-3 md:text-base md:pb-4 opacity-85 ">
        Made with <span className="animate-pulse">❤️</span> by mahdi kamyabi
      </p>
    </div>
  );
}

export default Contact;
