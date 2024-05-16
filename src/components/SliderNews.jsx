// SlideNews.js
import React from "react";
import Slider from "react-slick";
import NewCards from "./Cards/NewCards";
import Title from "./Title/Title";
function SlideNews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    // variableWidth: true,
    // centerMode: false,
    // centerPadding: "0px",
  };

  return (
    <div className="pl-[100px] py-0 pr-[60px]">
      <div className="pr-[30px]">
        <Title title="BÀI VIẾT MỚI" />
      </div>
      <Slider {...settings} className="">
        <div className="slide-item w-[284px]">
          <NewCards />
        </div>
        <div className="slide-item">
          <NewCards />
        </div>
        <div className="slide-item">
          <NewCards />
        </div>
        <div className="slide-item">
          <NewCards />
        </div>
        <div className="slide-item">
          <NewCards />
        </div>
        <div className="slide-item">
          <NewCards />
        </div>
        <div className="slide-item">
          <NewCards />
        </div>
      </Slider>
    </div>
  );
}

export default SlideNews;
