import React from "react";
import BlueButton from "../Button/BlueButton";
import YellowButton from "../Button/YellowButton";
import hero2 from "@/public/hero2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto ">
        <div className="col-span-2 ">
          <h1
            data-aos="zoom-out-down"
            className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#03045E]
           leading-[2.4rem] md:leading-[4rem]"
          >
            Finding What Works Best for You!
          </h1>
          <p className="text-[15px] md:text-[17px] mb-[2rem] text-black opacity-90 font-[400]">
            Through comprehensive resources, insightful articles, and practical
            tips, we aim to provide you with the tools and knowledge necessary
            to tailor your study approach to suit your individual preferences
            and strengths.
            <br />
            You might be thinking, "Learning styles? Study techniques?
            Yawn-fest!" But fear not, dear friend, because we're about to spice
            things up like never before!
          </p>
          <div className="flex items-center space-x-4 md:space-x-6 mt-2">
            <BlueButton text="Take Quiz" />
            <YellowButton text="Explore Site" />
          </div>
        </div>
        <div className="col-span-3 hidden sm:block  ">
          <Image src={hero2} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
