import React from "react";
import hero2 from "@/public/hero2.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
  handleScrollToAbout: () => void;
}

const Hero = ({ handleScrollToAbout }: Props) => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto ">
        <div className="col-span-2 ">
          <h1
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
            <button
              className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-[#ff0808] 
      relative hover:bg-gradient-to-r 
    hover:from-bg-[#ffba08] hover:to-bg-[#e85d04] text-white hover:ring-2 hover:ring-offset-2
     hover:ring-red-600
    transition-all ease-out duration-300"
            >
              <span
                className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 trasnform trasnlate-x-12 
      group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"
              ></span>

              <Link href="/Quiz">Take quiz</Link>
            </button>

            <button
              className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-[#ffba08] 
      relative hover:bg-gradient-to-r 
    hover:from-bg-[#ffba08] hover:to-bg-[#e85d04] text-black hover:ring-2 hover:ring-offset-2
     hover:ring-yellow-600
    transition-all ease-out duration-300"
              onClick={handleScrollToAbout}
            >
              <span
                className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 trasnform trasnlate-x-12 
      group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"
              ></span>
              <span className="relative">Scroll to about</span>
            </button>
          </div>
        </div>

        <div className="col-span-3 hidden sm:block  ">
          <Image src={hero2} alt="hero-img" priority />
        </div>
      </div>
    </div>
  );
};

export default Hero;
