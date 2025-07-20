import React from "react";
import { Typewriter } from "react-simple-typewriter";
import heroimg from '../assets/imges/my.png'

 const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10">
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src={heroimg}
            alt="Your Photo"
            className="w-100 h-100 object-cover rounded-full shadow-lg  "
            
          />
        </div>

        {/*  Typewriter */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-3xl font-bold">Hi, I'm Anandhu 👋</h1>
          <h2 className="text-xl text-gray-600">
            I'm a{" "}
            <span className="text-blue-500 font-semibold">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "MERN Stack Dev",
                  "UI/UX Lover",
                ]}
                loop={0} 
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-gray-700">
            Passionate full-stack developer focused on building clean,
            user-friendly web applications using modern tools and frameworks.
          </p>
        </div>
      </div>
    </>
  );
};export default Hero;
