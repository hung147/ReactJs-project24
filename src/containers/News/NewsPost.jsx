import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const NewsPost = ({ news, img }) => {
  const NewsImg = _.get(news, "NewsImg.data.attributes.url", "");
  return (
    <div>
      <Link to="/post" className="bg-[#F2F3F5] block mb-[3.125rem]">
        <div className="flex justify-between items-start text-[#333] flex-wrap leading-6 -mx-[15px] text-left">
          <div className="w-5/12  text-[#333] leading-6 text-left ml-[102.5px] mr-0  px-[15px] py-[26px] my-auto">
            <div className="text-[#333] leading-6">{news?.NewsDate || ""}</div>
            <div className="text-[#333] text-[26px] font-bold leading-[39px] capitalize mt-2.5 mb-[26px]">
              {news?.NewsTitle || ""}
            </div>
            <div className="text-[#333] leading-6">{news?.NewsDesc || ""}</div>
          </div>
          <div className="w-6/12 ">
            <img
              className="w-full h-auto text-[#333] basis-6/12 leading-6 text-left px-[15px] py-0"
              src={img || `http://localhost:1337${NewsImg}`}
              alt="News"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsPost;
