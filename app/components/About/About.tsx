import Image from "next/image";
import React from "react";
import about01 from "@/public/about01.svg";
import SectionHeading from "../SectionHeading/SectionHeading";

const About = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <SectionHeading
        headingMini="The Scoop on StudyGenius"
        headingPrimary="Your Gateway to Learning Success"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center pt-[5rem]">
        <div className="order-2 lg:order-1">
          <Image src={about01} alt="about-image" />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            className="text-[20px] md:text-[25px] lg:text-[28px] text-[##03045E] font-bold leading-[2rem] 
          md:leading-[3rem]"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            officia consequuntur quaerat cumque incidunt, modi alias voluptates
            atque, aspernatur beatae cupiditate corrupti quis? Nam hic, deleniti
            laudantium natus at quidem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
