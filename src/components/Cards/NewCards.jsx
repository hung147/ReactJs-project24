import React from "react";
import { Link } from "react-router-dom";

const NewCards = (props) => {
  return (
    <div className="w-[284px] bg-neutral-50 rounded relative     transition-shadow  duration-300 ease-in-out hover:shadow-lg">
      <img
        className="card-img-top  h-[200px] rounded"
        src={props.img}
        alt={props.alt}
      />
      <div className="card-body  pl-2.5 pr-5 pt-4 pb-5">
        <h5 className="card-title font-medium leading-[19px] text-left mt-0 mb-4 mx-0 h-10 overflow-hidden ">
          {/* Nike Classic Cortez – Phối Màu Của Sự Tinh Tế */}
          {props.title}
        </h5>
        <p className="card-desc  text-[#333333] leading-[19px] text-left mt-0 mb-1.5 mx-0">
          {/* Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông màu: Hồng Hoa
          Đăng và màu Cam */}
          {props.desc}
        </p>
        <p className="card-author text-[#333333] text-xs leading-[18px] text-left ">
          By
          <span className="text-[#333333] inline text-xs font-bold leading-[18px] text-left  mx-1 my-0">
            Cody ·
          </span>
          21/08/2019
        </p>
      </div>
    </div>
  );
};

export default NewCards;
