import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { CheckboxRippleEffect } from "./Checkbox";
import SizeSelector from "./Size";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const brandDataList = [
  {
    title: "Nike",
  },
  {
    title: "Air Jordan",
  },
  {
    title: "Adidas",
  },
  {
    title: "Converse",
  },
  {
    title: "Asics",
  },
  {
    title: "Vans",
  },
];

export function AccordionCustomIcon() {
  const [openAccordion, setOpenAccordion] = useState(
    Array.from({ length: brandDataList.length + 1 }, () => true)
  );
  const [isShowAll, setIsShowAll] = useState(false);
  const [brandDataListArr, setBrandDataList] = useState(
    brandDataList.slice(0, 4)
  );

  const handleOpen = (index) => {
    setOpenAccordion((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  const handleClick = () => {
    if (isShowAll) {
      setBrandDataList((prev) => prev.slice(0, 4));
    } else {
      setBrandDataList(brandDataList);
    }
    setIsShowAll((prev) => !prev);
  };

  return (
    <>
      <Accordion
        open={openAccordion[1]}
        icon={<Icon id={1} open={openAccordion[1]} />}
      >
        <AccordionHeader onClick={() => handleOpen(1)} className="text-base">
          Thương hiệu
        </AccordionHeader>
        <AccordionBody>
          <div className="select-filter">
            {brandDataListArr?.map((item, index) => {
              return <CheckboxRippleEffect title={item.title} />;
            })}
          </div>
          <button className="ml-3.5 mt-1.5" onClick={() => handleClick()}>
            {isShowAll ? "Rút gọn" : "Xem thêm"}
          </button>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={openAccordion[2]}
        icon={<Icon id={2} open={openAccordion[2]} />}
      >
        <AccordionHeader onClick={() => handleOpen(2)} className="text-base">
          Danh mục
        </AccordionHeader>
        <AccordionBody>
          <CheckboxRippleEffect title="Nam" />
          <CheckboxRippleEffect title="Nữ" />
          <CheckboxRippleEffect title="Thiếu niên" />
          <CheckboxRippleEffect title="Sơ sinh" />
        </AccordionBody>
      </Accordion>

      <Accordion
        open={openAccordion[3]}
        icon={<Icon id={3} open={openAccordion[3]} />}
      >
        <AccordionHeader onClick={() => handleOpen(3)} className="text-base">
          Size
        </AccordionHeader>
        <AccordionBody>
          <SizeSelector />
        </AccordionBody>
      </Accordion>

      <Accordion open={openAccordion[4]}>
        <AccordionHeader onClick={() => handleOpen(4)} className="text-base">
          Khoảng giá
        </AccordionHeader>
        <input
          type="text"
          placeholder="Từ"
          className="bg-white rounded border text-[#333333] leading-6 w-full mt-0 mb-2.5 mx-0 px-3 py-1.5 border-[#ced4da] border-solid input-price"
        />
        <input
          type="text"
          placeholder="Đến"
          className="bg-white rounded border text-[#333333] leading-6 w-full mt-0 mb-2.5 mx-0 px-3 py-1.5 border-[#ced4da] border-solid input-price"
        />
        <button className="bg-[#f88f85] inline-block font-normal text-[#fff8f8] text-center border text-base leading-normal rounded px-3 py-1.5 border-solid border-transparent ">
          Áp dụng
        </button>
      </Accordion>

      <Accordion
        open={openAccordion[5]}
        icon={<Icon id={5} open={openAccordion[5]} />}
      >
        <AccordionHeader onClick={() => handleOpen(5)} className="text-base">
          Năm ra mắt
        </AccordionHeader>
        <AccordionBody className="grid-cols-2 flex  justify-between items-center">
          <div>
            <CheckboxRippleEffect title="< 2010" />
            <CheckboxRippleEffect title="2012" />
            <CheckboxRippleEffect title="2014" />
            <CheckboxRippleEffect title="2016" />
            <CheckboxRippleEffect title="2018" />
          </div>
          <div>
            <CheckboxRippleEffect title="2011" />
            <CheckboxRippleEffect title="2013" />
            <CheckboxRippleEffect title="2015" />
            <CheckboxRippleEffect title="2017" />
            <CheckboxRippleEffect title="2019" />
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}
