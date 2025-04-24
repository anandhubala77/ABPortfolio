import React from "react";
import { Link } from "react-scroll";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Left section: scroll-to-top icon */}
        <div>
          <Link to="home" smooth={true} offset={-70} duration={500}>
            <h1 className="text-3xl font-bold text-[#00df9a] cursor-pointer">
              <FaArrowAltCircleUp />
            </h1>
          </Link>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-blue-800">
        &copy; {new Date().getFullYear()} Anandhu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;