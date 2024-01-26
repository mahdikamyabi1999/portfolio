function About() {
  return (
    <div>
      <h2 className="text-center 2xl:text-5xl md:text-4xl text-blue mb-28 font-semibold capitaliz tracking-wide">
        About
      </h2>

      <div className="flex flex-col items-center w-full h-auto bg-back rounded-[93px] p-24">
        <p className="text-4xl font-medium text-center md:leading-[85px] 2xl:leading-[90px] ">
          Hi everyone <br />
          as i said, my name is Mahdi Kamyabi, 24 year old programmer from
          Tehran. My journey began six months ago when I took the fundamental
          course in HTML, CSS, and JavaScript. Recently, I completed my React JS
          course. I hold a bachelor's degree in ICT from Shamsipour University
          and have fulfilled my military service obligations. Currently, I have
          an intermediate level of proficiency in the English language.
        </p>
        <button className=" mt-20 md:w-64 md:h-16  bg-red rounded-[20px] md:text-2xl font-medium hover:text-back hover:bg-blue duration-300 hover:scale-110">
          Download my CV
        </button>
      </div>
    </div>
  );
}

export default About;
