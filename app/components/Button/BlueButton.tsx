import React from "react";
interface Props {
  onClick: () => void;
  text: string;
}

const BlueButton = ({ text, onClick }: Props) => {
  return (
    <button
      className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-[#03071e] 
      relative hover:bg-gradient-to-r 
    hover:from-bg-[#03071e] hover:to-bg-[#03045E] text-white hover:ring-2 hover:ring-offset-2
     hover:ring-cyan-400
    transition-all ease-out duration-300"
      onClick={onClick}
    >
      <span
        className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 trasnform trasnlate-x-12 
      group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"
      ></span>
      <span className="relative"> {text}</span>
    </button>
  );
};

export default BlueButton;
