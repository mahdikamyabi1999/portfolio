"use client";
import Link from "next/link";
import { jsPDF } from "jspdf";
function AboutBtn() {
  function Download() {
    const doc = new jsPDF();
    doc.text("mahdikamyabi", 10, 10);
    doc.save(
      "https://www.dropbox.com/scl/fi/wvof3yu5zw4vwuq56y507/mahdiKamyabi.pdf?rlkey=xe6lgqgpu56gr7rh3ewoc4bs9&dl=0"
    );
  }
  return (
    <a href="./mahdiKamyabi.pdf" download="mahdiKamyabi.pdf">
      <button className=" cursor-none w-48 h-16 text-xl rounded-2xl mt-12 md:mt-16 md:w-60 md:h-20  bg-red md:rounded-[20px] md:text-2xl font-medium hover:text-back hover:bg-blue duration-300 hover:scale-110">
        Download my CV
      </button>
    </a>
  );
}

export default AboutBtn;
