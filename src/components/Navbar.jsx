import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll"; // Import Link from react-scroll
import '../App.css';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="font-[var(--font-display)] bg-[var(--primary)] text-[var(--light)] flex justify-between items-center h-24 max-w-full mx-auto px-4">
        <h1 className="text-3xl font-bold">ANANDHU.</h1>

        <ul className="hidden md:flex">
          <li className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:bg-[var(--accent)] hover:text-[var(--dark)] transition-[background,color] ease-[var(--ease-snappy)]">
            <Link to="home" smooth={true} offset={-70} duration={500}>Home</Link>
          </li>
          <li className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:bg-[var(--accent)] hover:text-[var(--dark)] transition-[background,color] ease-[var(--ease-snappy)]">
            <Link to="about" smooth={true} offset={-70} duration={500}>About</Link>
          </li>
          <li className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:bg-[var(--accent)] hover:text-[var(--dark)] transition-[background,color] ease-[var(--ease-snappy)]">
            <Link to="projects" smooth={true} offset={-70} duration={500}>Projects</Link>
          </li>
          <li className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:bg-[var(--accent)] hover:text-[var(--dark)] transition-[background,color] ease-[var(--ease-snappy)]">
            <Link to="contact" smooth={true} offset={-70} duration={500}>Contact</Link>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          className={`md:hidden fixed top-0 ${nav ? "left-0" : "left-[-100%]"} w-[60%] h-full border-r border-[var(--border)] bg-[var(--color-bg)] text-[var(--light)] duration-500 ease-[var(--ease-fluid)]`}
        >
          <h1 className="text-3xl font-bold m-4"><img src="../assets/imges/logo.png" alt="" /></h1>
          <li className="p-4 border-b border-[var(--border)] rounded-xl cursor-pointer duration-300 hover:bg-[var(--accent)] hover:text-[var(--dark)] transition-[background,color] ease-[var(--ease-snappy)]">
            <Link to="home" smooth={true} offset={-70} duration={500}>Home</Link>
          </li>
          <li className="p-4 border-b border-[var(--border)] rounded-xl cursor-pointer duration-300 hover:bg-[var(--accent)] hover:text-[var(--dark)] transition-[background,color] ease-[var(--ease-snappy)]">
            <Link to="about" smooth={true} offset={-70} duration={500}>About</Link>
          </li>
          <li className="p-4 border-b border-[var(--border)] rounded-xl cursor-pointer duration-300 hover:bg-[var(--accent)] hover:text-[var(--dark)] transition-[background,color] ease-[var(--ease-snappy)]">
            <Link to="projects" smooth={true} offset={-70} duration={500}>Projects</Link>
          </li>
          <li className="p-4 border-b border-[var(--border)] rounded-xl cursor-pointer duration-300 hover:bg-[var(--accent)] hover:text-[var(--dark)] transition-[background,color] ease-[var(--ease-snappy)]">
            <Link to="contact" smooth={true} offset={-70} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
