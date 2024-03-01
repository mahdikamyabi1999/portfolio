import Text from "./Text";
import Astronaut from "./Astronaut";

function Hero() {
  return (
    <section className=" flex flex-col sm:max-md:justify-start md:grid md:grid-cols-2 md:items-center">
      <Text />
      <Astronaut />
    </section>
  );
}

export default Hero;
