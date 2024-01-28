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
    <div>
      <h2 className="text-blue text-4xl font-medium">Hi my name is mahdi</h2>
      <h1 className="text-slate-300 text-5xl 2xl:text-6xl font-bold leading-[80px] 2xl:leading-[95px] tracking-[3px] mb-10 mt-1">
        Front end developer <br /> let&apos;s
        <span>{`  ${text}`}</span>
        <span className=" text-red">
          <Cursor cursorStyle="." />
        </span>
      </h1>
      <button
        onClick={contact}
        className=" cursor-none  md:w-40 md:h-16  bg-red rounded-[20px] md:text-2xl font-medium hover:text-back hover:bg-blue duration-300 hover:scale-110"
      >
        Hire me
      </button>
    </div>
  );
}

export default Text;
