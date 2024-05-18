import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className=" flex w-full gap-5 border-t-2 pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approach :</h1>
          <button className="flex gap-10 uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
