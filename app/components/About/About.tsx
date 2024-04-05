import Image from "next/image";
import React from "react";
import about01 from "@/public/about01.svg";
import SectionHeading from "../SectionHeading/SectionHeading";
interface Props {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About = ({ aboutRef }: Props) => {
  return (
    <div className="pt-[5rem] pb-[3rem]" ref={aboutRef}>
      <SectionHeading
        headingMini="The Scoop on StudyGenius"
        headingPrimary="Your Gateway to Learning Success"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center pt-[5rem]">
        <div className="order-2 lg:order-1 hidden sm:block">
          <Image src={about01} alt="about-image" />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            className="text-[20px] md:text-[25px] lg:text-[28px] text-[##03045E] font-bold leading-[2rem] 
          md:leading-[3rem]"
          >
            Unlock Your Study Superpowers
          </h1>
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[18px] md:text-[20px] ">
            Welcome to this little corner of the internet! Picture this: back in
            my freshman year, I was swimming in a sea of confusion about how to
            study smart, not just hard. So, here we are! Take this quiz and let
            &apos;s crack the code together on how to manage your studies like a
            boss. Oh, and don &apos;t forget, taking breaks and catching some
            Z&apos;s is just as crucial as hitting the books. So, let&apos;s
            dive in and find some study hacks, shall we?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
