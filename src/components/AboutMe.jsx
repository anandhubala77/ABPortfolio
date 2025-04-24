// AboutMeCard.jsx
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";
import { EducationCard } from "./EducationCard";

const AboutMe = () => {
  return (
    <div className="bg-bg to-purple-100 min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 me-3 gap-4">
      <div className="w-full lg:w-1/3">
        <EducationCard/>
      </div>
      <div className=" w-full lg:w-2/3 bg-white rounded-3xl shadow-lg p-6 ms-3">
        <h3 className="text-2xl font-bold mb-2">About Me</h3>
        <div className="w-20 h-1 bg-red-500 mb-4"></div>
        <p className="text-gray-700 mb-4">
        Hi, I’m Anandhu — a passionate MERN stack developer with a 
        strong foundation in building responsive, user-friendly web applications. 
        With a Master’s degree in Computer Science and hands-on experience in real-world projects,
         I bring both technical skill and creativity to every solution I build.

        </p>
        <p className="text-gray-700 mb-4">
        Although I started my career in a different field, 
        I’ve fully transitioned into web development, and I’m now focused on mastering both front-end development and UI/UX design

        </p>

        <h4 className="text-xl font-semibold mt-6 mb-2">Skills</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6 text-center">
          <div className="flex flex-col items-center text-red-600">
            <FaHtml5 size={30} />
            <span className="text-sm mt-1">HTML</span>
          </div>
          <div className="flex flex-col items-center text-blue-600">
            <FaCss3Alt size={30} />
            <span className="text-sm mt-1">CSS</span>
          </div>
          <div className="flex flex-col items-center text-yellow-500">
            <SiJavascript size={30} />
            <span className="text-sm mt-1">JavaScript</span>
          </div>
          <div className="flex flex-col items-center text-cyan-500">
            <FaReact size={30} />
            <span className="text-sm mt-1">React</span>
          </div>
          <div className="flex flex-col items-center text-green-600">
            <SiMongodb size={30} />
            <span className="text-sm mt-1">MongoDB</span>
          </div>
          <div className="flex flex-col items-center text-gray-800">
            <FaNodeJs size={30} />
            <span className="text-sm mt-1">Node.js</span>
          </div>
          <div className="flex flex-col items-center text-black">
            <SiExpress size={30} />
            <span className="text-sm mt-1">Express</span>
          </div>
          <div className="flex flex-col items-center text-pink-500">
            <SiFigma size={30} />
            <span className="text-sm mt-1">Figma</span>
          </div>
          <div className="flex flex-col items-center text-sky-400">
            <SiTailwindcss size={30} />
            <span className="text-sm mt-1">Tailwind</span>
          </div>
          <div className="flex flex-col items-center text-indigo-600">
            <FaBootstrap size={30} />
            <span className="text-sm mt-1">Bootstrap</span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AboutMe;
