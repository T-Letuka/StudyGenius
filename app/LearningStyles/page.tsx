import React from "react";
import cardList from "../data";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const page = () => {
  return (
    <div className="pt-[1rem] pb-[1rem]">
      <SectionHeading
        headingMini="Learning Styles"
        headingPrimary="Ah, the wondrous world of learning styles!"
      />
      <div className="container mx-auto py-36 px-8">
        <div className="grid lg:grid-cols-2 gap-[30px] md:grid-cols-2 ">
          {cardList.map((card, index) => (
            <div
              key={index}
              className="shadow-lg bg-gradient-to-r from-white to-[#caf0f86b]"
            >
              <Image
                src={card.img}
                alt="icon"
                width={70}
                height={70}
                className="block mx-auto"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold text-[#03045E] pb-[12px]">
                  {card.title}
                </h2>
                <p className="text-lg font-bold">{card.text}</p>
                <br />
                <p className="text-lg font-bold ">{card.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
