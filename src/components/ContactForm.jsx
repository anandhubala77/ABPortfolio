import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export const ContactForm = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center px-4">
      <div className="bg-cyan-700 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden ">
        

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Me</h1>
            <p className="pt-2 text-cyan-100 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              eaque harum odio doloribus, a periam vero? Expedita beatae et ipsa
              quaerat.
            </p>
          </div>

          <div className="flex flex-col space-y-6 mt-6">
            <div className="inline-flex space-x-2 items-center text-justify">
              <MdPhone className="text-teal-300 text-2xl" />
              <span>+917025833467</span>
            </div>
            <div className="inline-flex space-x-2 items-center text-justify">
              <MdEmail className="text-teal-300 text-2xl" />
              <span>anandhubalakrishnan77@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center text-justify">
              <MdLocationOn className="text-teal-300 text-2xl" />
              <span>Ernakulam, Kerala</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="text-white hover:text-gray-300" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="text-white hover:text-gray-300" />
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-white hover:text-gray-300" />
              </a>
              <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="text-white hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}

        
        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-cyan-400 rounded-full -right-120 -top-28 "></div>
        </div><div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-cyan-400 rounded-full -left-35 -bottom-20 "></div>
        </div>

        <div className= "relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 flex-1 md:w-[400px]">
          <form className="flex flex-col space-y-4">
            
            <div>
              <label className="text-sm">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm">Your Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                placeholder="Message"
                rows={4}
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg uppercase text-sm px-6 py-2 hover:bg-cyan-800 transition">
              Send Message
            </button>
            

          </form>
          
        </div>
        
      </div>
      
    </div>
    
  );
};
