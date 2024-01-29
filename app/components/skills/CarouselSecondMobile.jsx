import redux from "./asset/redux.svg";
import javascript from "./asset/javascript.svg";
import html from "./asset/HTML.svg";
import css from "./asset/css.svg";
import react from "./asset/React.svg";
import tailwind from "./asset/tailwind.svg";
import git from "./asset/Git.svg";
import typescript from "./asset/typescript.svg";
import next from "./asset/nextjs.svg";
import Image from "next/image";
function CarouselSecondMobile() {
  return (
    <div className="w-full flex flex-nowrap mt-5 overflow-hidden md:hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 md:[&_li]:mx-3 animate-infinite-scroll-mobile ">
      <li>
          <div className="flex justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#151515] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={next}
              alt="nextjs"
            />
            <p className="text-white text-lg md:text-[28px] 2xl:text-[33px] font-normal">
              Next js
            </p>
          </div>
        </li>
        <li>
          <div className=" flex justify-between  h-[62px] w-36 px-3 rounded-3xl md:p-6 items-center   2xl:w-64 bg-[#3E0501] 2xl:h-28 md:w-56 md:h-24 md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={html}
              alt="html"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              HTML
            </p>
          </div>
        </li>
        <li>
          <div className=" flex  justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#987C0D] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={javascript}
              alt="javascript"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal pr-3">
              Js
            </p>
          </div>
        </li>
        <li>
          <div className=" flex  justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#083A5C] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="  w-10 md:w-16 2xl:w-[65px]"
              src={typescript}
              alt="typescript"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal pr-3">
              Ts
            </p>
          </div>
        </li>
        <li>
          <div className=" flex  justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#001E2D] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={css}
              alt="css"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              CSS
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#1B0937] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="  w-10 md:w-16 2xl:w-[75px]"
              src={redux}
              alt="redux"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              Redux
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-between  h-[62px] w-36 px-2 rounded-3xl items-center md:px-3 2xl:w-64 bg-[#053443] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="  w-10 md:w-16 2xl:w-[75px]"
              src={tailwind}
              alt="tailwind"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              Tailwind
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#052831] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={react}
              alt="react"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              React
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-between  h-[62px] w-36 px-5 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#882C1B] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="  w-10 md:w-16 2xl:w-[75px]"
              src={git}
              alt="git"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal md:pr-3 2xl:pr-5">
              Git
            </p>
          </div>
        </li>
      </ul>
      {/* ******************************************************************************** */}

      <ul className="flex  items-center justify-center md:justify-start [&_li]:mx-2 md:[&_li:mx-3 md:[&_li]:mx-3 animate-infinite-scroll-mobile">
        <li>
          <div className=" flex justify-between  h-[62px] w-36 px-3 rounded-3xl md:p-6 items-center   2xl:w-64 bg-[#3E0501] 2xl:h-28 md:w-56 md:h-24 md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={html}
              alt="html"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              HTML
            </p>
          </div>
        </li>
        <li>
          <div className=" flex justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#001E2D] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={css}
              alt="css"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              CSS
            </p>
          </div>
        </li>
        <li>
          <div className=" flex justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#987C0D] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={javascript}
              alt="javascript"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal pr-3">
              Js
            </p>
          </div>
        </li>
        <li>
          <div className=" flex  justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#083A5C] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="  w-10 md:w-16 2xl:w-[65px]"
              src={typescript}
              alt="typescript"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal pr-3">
              Ts
            </p>
          </div>
        </li>
        <li>
          <div className="flex  justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#052831] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={react}
              alt="react"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              React
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#151515] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="   w-10 md:w-16 2xl:w-[75px]"
              src={next}
              alt="nextjs"
            />
            <p className="text-white text-lg md:text-[28px] 2xl:text-[33px] font-normal">
              Next js
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-between  h-[62px] w-36 px-3 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#1B0937] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="  w-10 md:w-16 2xl:w-[75px]"
              src={redux}
              alt="redux"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              Redux
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-between  h-[62px] w-36 px-2 rounded-3xl items-center md:px-3 2xl:w-64 bg-[#053443] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="  w-10 md:w-16 2xl:w-[75px]"
              src={tailwind}
              alt="tailwind"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal">
              Tailwind
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-between  h-[62px] w-36 px-5 rounded-3xl  md:p-6 items-center   2xl:w-64 bg-[#882C1B] 2xl:h-28 md:w-56 md:h-24   md:rounded-[35px]">
            <Image
              unoptimized={false}
              className="  w-10 md:w-16 2xl:w-[75px]"
              src={git}
              alt="git"
            />
            <p className="text-white text-lg md:text-3xl 2xl:text-[33px] font-normal md:pr-3 2xl:pr-5">
              Git
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CarouselSecondMobile;

// animate-infinite-scroll
