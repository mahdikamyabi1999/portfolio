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
    p: "fully responsive web app with Next js and Typescript",
    span: "I work with Next js and Typescript",
    demoLink: "https://campingapp.liara.run/",
    githubLink: "https://github.com/mahdikamyabi1999/camping-app",
  },
  {
    id: 2,
    src: "/shopping.png",
    h2: "eCommerce App",
    p: "eCommerce web application using React, Redux. in this App",
    span: "I work with Redux toolkit and How to manage Data and Search with API",
    demoLink: "https://shoppingcart.liara.run/",
    githubLink: "https://github.com/mahdikamyabi1999/Shopping-Cart",
  },
  {
    id: 3,
    src: "/split.png",
    h2: "Split Bill App",
    p: "eCommerce web application using React, Redux. in this App",
    span: "I work with Redux toolkit and How to manage Data and Search with API",
    demoLink: "https://split.liara.run/",
    githubLink: "https://github.com/mahdikamyabi1999/Split-bill-mini-project",
  },
  {
    id: 4,
    src: "/weather.png",
    h2: "Weather App",
    p: "A simple, and responsive weather application with React",
    span: "I work with API and How to manage Data and Search with that",
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
