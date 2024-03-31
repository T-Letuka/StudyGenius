import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <div className="transform transition-all duration-200 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#0077B6]">
      <XMarkIcon className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]" />

      <ul className="relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center">
        <li className="text-[25px] cursor-pointer text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 ">
          <Link href="/">About</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 ">
          <Link href="/">Quiz</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 ">
          <Link href="/">Technique</Link>
        </li>
        <li className="text-[25px] cursor-pointer  text-white hover:text-pink-600 transition-all duration-200 ">
          <Link href="/">Contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
