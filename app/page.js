import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <main className=" md:my-0 md:mx-auto md:px-8 2xl:max-w-[1585px] md:max-w-[1329px]">
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
    </main>
  );
}
