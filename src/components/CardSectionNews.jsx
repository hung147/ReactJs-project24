import React from "react";
import Title from "./Title/Title";
import NewCards from "./Cards/NewCards";
import { Carousel } from "@material-tailwind/react";

const CardSectionNews = () => {
  return (
    <div className="px-[100px] py-0">
      <Title title="BÀI VIẾT MỚI" />
      <Carousel className="grid grid-cols-4 gap-[20px]">
        <NewCards />
        <NewCards />
        <NewCards />
        <NewCards />
      </Carousel>
    </div>
  );
};

export default CardSectionNews;
