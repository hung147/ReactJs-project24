import React from "react";
import Title from "./Title/Title";

const LayoutSection = () => {
  return (
    <div className="px-[100px] py-0">
      <Title title="BỘ SƯU TẬP" />
      <div className="grid grid-cols-3 gap-5 justify-center items-center">
        <a href="/product" className="relative">
          <img
            className="w-full"
            src="https://projects.techmaster.vn/obo-stadium/image/categories/category-1.png"
            alt=""
          />
          <div className="uppercase bg-white absolute text-[0.6875rem] px-2.5 py-[0.3125rem] left-1.5 bottom-1.5">
            TECH PERFORMANCE
          </div>
        </a>
        <a href="/product" className="relative">
          <img
            className="w-full"
            src="https://projects.techmaster.vn/obo-stadium/image/categories/category-2.png"
            alt=""
          />
          <div className="uppercase bg-white absolute text-[0.6875rem] px-2.5 py-[0.3125rem] left-1.5 bottom-1.5">
            OFF-WHITE
          </div>
        </a>
        <a href="/product" className="relative">
          <img
            className="w-full"
            src="https://projects.techmaster.vn/obo-stadium/image/categories/category-3.png"
            alt=""
          />
          <div className="uppercase bg-white absolute text-[0.6875rem] px-2.5 py-[0.3125rem] left-1.5 bottom-1.5">
            SUPREME
          </div>
        </a>
        <a href="/product" className="relative">
          <img
            className="w-full"
            src="https://projects.techmaster.vn/obo-stadium/image/categories/category-4.png"
            alt=""
          />
          <div className="uppercase bg-white absolute text-[0.6875rem] px-2.5 py-[0.3125rem] left-1.5 bottom-1.5">
            NBA
          </div>
        </a>
        <a href="/product" className="relative">
          <img
            className="w-full"
            src="https://projects.techmaster.vn/obo-stadium/image/categories/category-5.png"
            alt=""
          />
          <div className="uppercase bg-white absolute text-[0.6875rem] px-2.5 py-[0.3125rem] left-1.5 bottom-1.5">
            YEEZY
          </div>
        </a>
        <a href="/product" className="relative">
          <img
            className="w-full"
            src="https://projects.techmaster.vn/obo-stadium/image/categories/category-6.png"
            alt=""
          />
          <div className="uppercase bg-white absolute text-[0.6875rem] px-2.5 py-[0.3125rem] left-1.5 bottom-1.5">
            Comme Des Garçons
          </div>
        </a>
      </div>
    </div>
  );
};

export default LayoutSection;
