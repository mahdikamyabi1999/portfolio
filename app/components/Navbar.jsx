'use client';
import {scroller} from 'react-scroll'

function Navbar() {
  const about = () => {
    scroller.scrollTo("about", {
      duration: 1300,
      delay: 0,
      smooth: "easeInOutCubic",
      offset: -400
    });
  };
  const skill = () => {
    scroller.scrollTo("skills", {
      duration: 1900,
      delay: 0,
      smooth: "easeInOutCubic",
      offset: -180
    });
  };
  const work = () => {
    scroller.scrollTo("works", {
      duration: 2000,
      delay: 0,
      smooth: "easeInOutCubic",
      offset: -90
    });
  };
  const contact = () => {
    scroller.scrollTo("contact", {
      duration: 2900,
      delay: 0,
      smooth: "easeInOutCubic",
      offset: 0
    });
  };
  return (
    <ul className="flex justify-center sticky items-center gap-24 font-medium h-[15vh] text-2xl capitalize">
      <li className="hover:text-blue duration-300 cursor-pointer hover:text-3xl">
        <a  onClick={about}>About</a> 
      </li>
      <li className="hover:text-blue duration-300 cursor-pointer hover:text-3xl">
        <a onClick={skill}>Skills</a>
      </li>
      <li className="hover:text-blue duration-300 cursor-pointer hover:text-3xl">
      <a onClick={work}>Work</a>
      </li>
      <li className="hover:text-blue duration-300 cursor-pointer hover:text-3xl">
      <a onClick={contact}>Contact</a>
      </li>
    </ul>
  );
}

export default Navbar;
