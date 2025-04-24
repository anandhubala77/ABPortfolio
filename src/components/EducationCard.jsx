import React from "react";
import { FaUniversity, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

export const EducationCard = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center p-4 bg-bg">
      <div className="bg-white flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full min-h-11/12 max-w-4xl p-8 rounded-xl shadow-lg text-gray-800">
        
        <div className="flex flex-col justify-center flex-1 ">
          <h1 className="font-bold text-4xl text-cyan-700 tracking-wide mb-4">Education</h1>
          <p className="text-gray-600 text-sm">
            Here's a quick overview of my academic background and training.
          </p>
        </div>

        <div className="flex flex-col space-y-6 flex-1">
          
          <div className="flex items-start space-x-4">
            <FaUserGraduate size={30} className="text-cyan-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">MSc Computer Science</h3>
              <p className="text-sm text-gray-600">MG University</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaUniversity size={30} className="text-cyan-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-sm text-gray-600">MG University</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaLaptopCode size={30} className="text-cyan-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Internship in Full Stack Development</h3>
              <p className="text-sm text-gray-600">Luminar Technolab</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
