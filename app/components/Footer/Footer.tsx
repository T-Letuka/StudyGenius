import React from "react";

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <div
        className="w-[80%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-[#90E0EF] pb-[2rem] md:grid-cols-2 
    lg:grid-col-3 xl:grid-cols-4 gap-[2rem] items-start"
      >
        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            <span className="text-[19px] text-blue-600">S</span>
            tudy
            <span className="text-[19px] text-red-700">G</span>
            enius
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Study Technique
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Study Styles
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Student Apps
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Contact me
          </p>
        </div>

        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Study Techniques
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Pomodoro
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Spaced Repetition
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Mind Mapping
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Active Recall
          </p>
        </div>

        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Study Styles
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Visual Learning
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Auditory Learning
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Kinesthetic Learning
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Reading/Writing
          </p>
        </div>

        <div className="md:mx-auto mx-0">
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Student Apps
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            QuizLet
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Todoist
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Focus To DO
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-cyan-600">
            Habitica
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-[1rem] text-[15px] opacity-75 text-center">
        ©2024 Developed by Tisetso Letuka❤
      </div>
    </div>
  );
};

export default Footer;
