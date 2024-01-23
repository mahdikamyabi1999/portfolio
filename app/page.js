import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <main className="2xl:mx-48 md:mx-20">
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
    </main>
  );
}
