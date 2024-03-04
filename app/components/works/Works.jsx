import WorkItem from "./WorkItem";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MobileWorkItem from "./MobileWorkItem";

const works = [
  {
    id: 1,
    src: "/camp.png",
    h2: "camping App",
    p: "fully responsive web app with Next js in this App I learn about",
    KeyLesson: [
      { text: "Typescript", bgColor: "bg-[#083A5C]" },
      { text: "Next js", bgColor: "bg-[#e36414]" },
      { text: "Tailwind Css", bgColor: "bg-[#2a9d8f]" },
      { text: "Responsive Design", bgColor: "bg-[#480ca8]" },
    ],
    demoLink: "https://campingapp.liara.run/",
    githubLink: "https://github.com/mahdikamyabi1999/camping-app",
  },
  {
    id: 2,
    src: "/shopping.png",
    h2: "eCommerce App",
    p: "eCommerce React web application. in this App I learn about",
    KeyLesson: [
      { text: "React Router", bgColor: "bg-[#052831]" },
      { text: "Redux", bgColor: "bg-[#1B0937]" },
      { text: "Tailwind Css", bgColor: "bg-[#2a9d8f]" },
      { text: "Axios Library", bgColor: "bg-[#621708]" },
      { text: "API", bgColor: "bg-[#3E0501]" },
    ],
    demoLink: "https://shoppingcart.liara.run/",
    githubLink: "https://github.com/mahdikamyabi1999/Shopping-Cart",
  },
  {
    id: 3,
    src: "/split.png",
    h2: "Split Bill App",
    p: "React app for splitting expenses spent. in this App I learn about",
    KeyLesson: [
      { text: "React State management", bgColor: "bg-[#083A5C]" },
      { text: "Tailwind Css", bgColor: "bg-[#2a9d8f]" },
      { text: "Responsive Design", bgColor: "bg-[#480ca8]" },
    ],
    demoLink: "https://split.liara.run/",
    githubLink: "https://github.com/mahdikamyabi1999/Split-bill-mini-project",
  },
  {
    id: 4,
    src: "/weather.png",
    h2: "Weather App",
    p: "A simple weather application with React. in this App I learn about",
    KeyLesson: [
      { text: "Tailwind Css", bgColor: "bg-[#2a9d8f]" },
      { text: "Axios Library", bgColor: "bg-[#621708]" },
      { text: "API", bgColor: "bg-[#3E0501]" },
      { text: "Responsive Design", bgColor: "bg-[#480ca8]" },
    ],
    demoLink: "https://weatherapp.liara.run/",
    githubLink: "https://github.com/mahdikamyabi1999/Weather-App",
  },
];

function Works() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <section id="works">
      <h2
        className=" text-2xl text-center mt-8 max-md:mb-8 sm:max-md:text-4xl 2xl:text-5xl md:text-4xl text-blue md:mb-28 font-semibold capitaliz tracking-wide"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        Works
      </h2>
      <div className=" flex flex-col gap-5 md:gap-16">
        <WorkItem works={works} />
        <MobileWorkItem works={works} />
      </div>
    </section>
  );
}

export default Works;
