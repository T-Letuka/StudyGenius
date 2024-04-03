import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Cards from "./FeatureCards/Cards";
import learning from "@/public/learning.png";
import Quiz from "@/public/Quiz.png";
import studyt from "@/public/studyt.png";
import Link from "next/link";

const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <SectionHeading
        headingMini="Personalized Learning"
        headingPrimary="Transforming Study Habits Everywhere"
      />
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
        <div>
          <Cards title="Study Techniques" image={studyt.src} />
        </div>
        <div>
          <Cards title="Quiz" image={Quiz.src} pages="/StudyTechniques" />
        </div>
        <div>
          <Cards title="Learning Styles" image={learning.src} />
        </div>
      </div>
    </div>
  );
};

export default Features;
