import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import contcatphoto from '../assets/imges/photo_6069112956655880581_y.jpg'

const Contact = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-3 flex flex-col items-center  lg:w-3/3 md:w-3/3 h-full ms-3  ">
       <h3 className="text-2xl font-bold mb-2">Contact</h3>
      
      <img
        src={contcatphoto}
        alt="Profile Photo"
        className="rounded-full w-32 h-32 object-cover object-top mb-4 "
      />
      <h2 className="text-xs font-semibold">ANANDHU BALAKRISHNAN</h2>
      <p className="text-gray-500 mb-4">WEB DEVELOPER</p>
      <div className="flex space-x-4 mb-4">
        <a href="#" className="text-blue-500"><FaFacebook /></a>
        <a href="#" className="text-blue-400"><FaGithub /></a>
        <a href="#" className="text-blue-600"><FaLinkedin /></a>
      </div>
      <div className="text-sm text-justify space-y-2 w-full mt-3 ms-3">
        <p><strong>Phone:</strong> +917025833467</p>
        <a href="anandhubalakrishnan77@gmail.com"> <p><strong>Email:</strong> anandhubalakrishnan77@gmail.com</p></a>
        <p><strong>Location:</strong> Ernakulam,Kerala, India</p>
        <p><strong>Birthday:</strong> Sep 15, 1997</p>
      </div>
      <button className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-full">
        Download CV
      </button>
    </div>
  );
};

export default Contact;
