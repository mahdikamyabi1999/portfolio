import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="2xl:mx-36 md:mx-20">
      <Navbar />
      <Hero />
    </main>
  );
}
