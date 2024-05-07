import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const SizeButton = () => {
  return (
    <div>
      <button className="items-center bg-white rounded border text-[#333] flex justify-between leading-6 text-center mt-0 mb-5 mx-0 p-5 border-[#ccc] hover:border-[#333] border-solid w-full">
        <span className="text-xl text-[#ABACAD] leading-7">Size</span>
        <span className="text-[#333] text-3xl font-bold leading-[42px] text-center">
          9US | 42.5VN | 26.2CM
        </span>
        <IoIosArrowDropdown className="text-[#abacad] text-xl font-black leading-7 text-center" />
      </button>
    </div>
  );
};

export default SizeButton;
