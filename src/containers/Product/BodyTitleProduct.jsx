import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
// import CardShop from "../../components/Cards/Card";
import { PaginationGroup } from "./panigation";
import { AccordionCustomIcon } from "./Acordion";
const BodyTitleProduct = () => {
  return (
    <div className="container-full  mt-[50px] px-[100px] py-0 ">
      <div className="flex  items-center  mb-5">
        <a
          className="text-[#f04e40] inline leading-6 text-left hover:text-black"
          href="#"
        >
          Trang chủ
        </a>
        <FaChevronRight />
        <span>Sản phẩm</span>
      </div>
      <div className="grid grid-cols-12 gap-4flex">
        <div className="col-span-3">
          <div className="flex justify-between px-2.5 py-0">
            <div className="flex items-center ">
              <IoFilterOutline />
              <div className="pl-[10px]">Lọc</div>
            </div>
            <button className="rounded bg-[#7a7a7a] text-white leading-[1.1875rem] uppercase px-[0.9375rem] py-[0.3125rem] border-[none]">
              Bỏ lọc
            </button>
          </div>
          <div className="break-line w-full mx-0 my-5 border-t-[#D5D6D6] border-t border-solid"></div>
          {/* <div className="brand-content flex">
            <div className="text">Thương hiệu</div>
            <AccordionCustomIcon />
          </div> */}
          {/* <div className="break-line w-full mx-0 my-5 border-t-[#D5D6D6] border-t border-solid"></div> */}
          {/* <div className="brand-category flex">
            <div className="text">Danh mục</div>
            <AccordionCustomIcon />
          </div> */}
          {/* <div className="brand-size flex">
            <div className="text">Size</div>
            <AccordionCustomIcon />
          </div> */}
          <AccordionCustomIcon />
        </div>
        <div className="col-span-9">
          <div className="sort ml-5">
            <div className="sort-conten  flex justify-between w-[calc(100%/3)] items-center cursor-pointer border px-5 py-3 border-solid border-[#d5d6d6]">
              Sắp xếp theo
              <span className="font-[bold] font-bold">Bán chạy</span>
              <IoIosArrowDropdown />
              <div className="sort-dropdown"></div>
            </div>
            <div className="filter-icon"></div>
          </div>
          {/* <div className="product-row  grid grid-cols-4 grid-rows-4 gap-4 m-5">
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
          </div> */}
          <PaginationGroup />
        </div>
      </div>
    </div>
  );
};

export default BodyTitleProduct;
