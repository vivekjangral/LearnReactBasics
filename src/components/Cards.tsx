import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-24 gap-5">
      <div className="card-container  w-1/2 h-[50vh]">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute py-1 px-5 border-2 rounded-full left-10 bottom-10 ">
            &copy; 2024-2025
          </button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[50vh] flex gap-5">
        <div className="card w-1/2 relative flex items-center justify-center rounded-xl h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute uppercase font-light text-sm  py-1 px-5 border-2 rounded-full left-10 bottom-10 ">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className="card w-1/2 relative flex items-center justify-center rounded-xl h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute uppercase font-light text-sm py-1 px-5 border-2 rounded-full left-10 bottom-10 ">
            Business BootCamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
