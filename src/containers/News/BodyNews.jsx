import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BodyNews = (props) => {
  return (
    <div>
      <div className="container-full mt-[50px] px-[100px] py-0">
        <div className="flex items-center mb-5">
          <Link
            className=" text-[#f04e3f] inline leading-6 text-left hover:text-black"
            to="/home"
          >
            Trang chủ
          </Link>
          <FaChevronRight className="mx-0.5" />
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default BodyNews;
