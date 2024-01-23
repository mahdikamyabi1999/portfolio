function Navbar() {
  return (
    <ul className="flex justify-center items-center gap-24 font-medium h-[15vh] text-2xl capitalize">
      <li className="hover:text-blue duration-300 cursor-pointer hover:text-3xl">About</li>
      <li className="hover:text-blue duration-300 cursor-pointer hover:text-3xl">Skills</li>
      <li className="hover:text-blue duration-300 cursor-pointer hover:text-3xl">Work</li>
      <li className="hover:text-blue duration-300 cursor-pointer hover:text-3xl">Contact</li>
    </ul>
  );
}

export default Navbar;
