import React from "react";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Techniques from "../_data";
import Image from "next/image";
import ginfo1 from "@/public/ginfo1.png";

const page = () => {
  return (
    <div className="pb-[1.2rem] pt-[0.5]">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[70%] mx-auto ">
        <div className="col-span-2 ">
          <h1
            className="text-[25px] md:text-[32px] lg:text-[38px] mb-[1rem] font-bold text-[#03045E]
           leading-[2.4rem] md:leading-[4rem]"
          >
            Cleverly Pondering the Art of Studious Endeavors
          </h1>
          <p className="text-[15px] md:text-[17px] mb-[2rem] text-black opacity-90 font-[400]">
            Ah, the wacky world of study techniques! It&apos;s like trying to
            crack a secret code or solve a Rubik&apos;s Cube
            blindfolded—challenging, yet strangely thrilling. <br />
            <br />
            Picture this: you, armed with highlighters and flashcards, ready to
            conquer the academic jungle like a fearless explorer with a GPS set
            to <em>brain power.</em> <br />
            <br />
            So, buckle up and get ready for a wild ride through the land of
            learning hacks and scholarly shenanigans.
          </p>
        </div>
        <div className="col-span-3 hidden sm:block  ">
          <Image src={ginfo1} alt="hero-img" priority />
        </div>
      </div>

      <div className="container mx-auto py-[30px] px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[50px] ">
          {Techniques.map((card, index) => (
            <div
              key={index}
              className="shadow-lg bg-gradient-to-r from-white to-[#caf0f86b]"
            >
              <h2 className="text-center font-bold text-black pb-2 pt-1">
                {card.title}
              </h2>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[3rem] pb-[2rem] mx-auto flex flex-col items-center border-b-2 border-b-[#90E0EF]">
        <SectionHeading
          headingMini="Student plugs"
          headingPrimary="Links for more info about the study techniques"
        />
        <div className="text-center ">
          <a
            href="https://youtu.be/tkm0TNFzIeg?si=ciHuvczFfbbGHjRG"
            target="_blank"
            className="block mb-2 bg-[#CAF0F8] hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Visit for Feynman Technique
          </a>
          <a
            href="https://youtu.be/mow3sfGb7B8?si=ZdO27ZxxO-i9qq6p"
            target="_blank"
            className="block mb-2 bg-[#90E0EF] hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Doodling Method
          </a>
          <a
            href="https://youtu.be/SVb7fGRuRMU?si=-wlVeLr3ajvi7U1L"
            target="_blank"
            className="block mb-2 bg-[#00B4D8] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            University hacks
          </a>
          <a
            href="https://youtu.be/4RkWiNO3iq8?si=fHe0r1wuxXUtPqy1"
            target="_blank"
            className="block mb-2 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Ways To study smarter
          </a>
          <a
            href="https://youtu.be/bd3qrBUbpSE?si=XKm2Xx551-m-XIga"
            target="_blank"
            className="block mb-2 bg-[#0077B6] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Matric tips and ticks
          </a>
          <a
            href="https://youtu.be/Bm4tjMNlGK8?si=uffdeIpssT7uCq-_"
            target="_blank"
            className="block mb-2 bg-[#03045E] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            University hacks 2
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
