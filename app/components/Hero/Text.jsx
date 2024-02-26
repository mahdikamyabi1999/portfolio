import { scroller } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Text() {
  const [text] = useTypewriter({
    words: ["Design", "Build", "with React"],
    loop: {},
    typeSpeed: 95,
    delaySpeed: 2300,
    deleteSpeed: 100,
  });
  const contact = () => {
    scroller.scrollTo("contact", {
      duration: 3100,
      delay: 0,
      smooth: "easeInOutCubic",
      offset: 0,
    });
  };
  return (
    <div className="flex flex-col max-md:justify-center  max-md:gap-1">
      <h2 className="text-2xl text-center sm:max-md:text-3xl max-md:mt-[50px] md:text-left text-blue md:text-4xl font-medium">
        Hi my name is mahdi
      </h2>
      <h1 className="text-[32px] text-center max-md:mb-4 sm:max-md:text-5xl md:text-left md:text-5xl 2xl:text-6xl font-bold md:leading-[80px] 2xl:leading-[95px] md:tracking-[3px] md:mb-10 md:mt-1">
        Front end developer <br /> let&apos;s
        <span>{`  ${text}`}</span>
        <span className=" text-red">
          <Cursor cursorStyle="." />
        </span>
      </h1>
      <button
        onClick={contact}
        className=" cursor-none  w-24 h-12 text-lg max-md:self-center max-md:mb-10 sm:max-md:w-32 sm:max-md:text-xl sm:max-md:h-16 rounded-2xl  md:w-40 md:h-16  bg-red md:rounded-[20px] md:text-2xl font-medium hover:text-back hover:bg-blue duration-300 md:hover:scale-110"
      >
        Hire me
      </button>
    </div>
  );
}

export default Text;
