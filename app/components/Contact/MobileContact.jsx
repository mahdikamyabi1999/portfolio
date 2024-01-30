import Image from "next/image";
import github from "./asset/github.svg";
import linkedin from "./asset/linkedin.svg";
function MobileContact() {
  return (
    <div className="flex flex-col gap-x-3 justify-center md:hidden">
      <div className="flex flex-col items-center gap-2 px-5 sm:max-md:px-28">
        <a
          href="tel:09365590721"
          className=" flex  items-center text-back w-full h-16 sm:max-md:h-20 sm:max-md:rounded-4xl text-[19px] font-medium rounded-3xl mt-12 md:mt-20 md:w-64 md:h-16  bg-blue md:rounded-[20px] md:text-2xl   justify-center "
        >
          Call
        </a>
        <p className="font-normal text-lg opacity-70">
          <a href="tel:09365590721">09365590721</a>
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 px-5 sm:max-md:px-28">
        <a
          href="mailto:mahdikamyabi01@gmail.com"
          className=" flex items-center text-white sm:max-md:rounded-4xl sm:max-md:h-20  w-full h-16 text-lg rounded-3xl mt-4 md:mt-20 md:w-64 md:h-16  bg-back md:rounded-[20px] md:text-2xl font-medium  justify-center "
        >
          Email
        </a>
        <p className="font-normal text-lg opacity-70 mb-4">
          <a href="mailto:mahdikamyabi01@gmail.com">mahdikamyabi01@gmail.com</a>
        </p>
      </div>
      <div className="flex gap-6 items-center justify-center mt-4 mb-8 ">
        <a href="">
          <Image
            src={github}
            alt="github"
            unoptimized={false}
            className="w-[55px]"
          />
        </a>
        <a href="https://www.linkedin.com/in/mahdikamyabi1999/">
          <Image
            src={linkedin}
            alt="linkedin"
            unoptimized={false}
            className="w-[63px]"
          />
        </a>
      </div>
    </div>
  );
}

export default MobileContact;
