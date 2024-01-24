import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";

export default function Home() {
  return (
    <main className=" flex flex-col gap-y-32  md:my-0 md:mx-auto md:px-8 2xl:max-w-[1550px] md:max-w-[1300px]">
      <Hero />
      <About />
      <Skills />
      <Works />
    </main>
  );
}
