import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  title: string;
  image: string;
}

const Cards = ({ title, image }: Props) => {
  return (
    <div
      className="text-center bg-[#000814] p-4  rounded-lg hover:shadow-lg transition-all duration-300
  cursor-pointer hover:scale-110"
    >
      <Image
        src={image}
        alt="icon"
        width={70}
        height={70}
        className="mx-auto"
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-white ">
        {title}
      </h1>
      <p className="mt-[1rem] text-white opacity-90 text-[15px] pb-[15px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        similique eos architecto, distinctio quia provident facere corporis
        commodi minus, at dolores et quam fugiat ad! A eaque tempora beatae
        mollitia?
      </p>
    </div>
  );
};

export default Cards;
