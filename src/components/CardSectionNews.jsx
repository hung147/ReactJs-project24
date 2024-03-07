import React from "react";
import Title2 from "./Title/Title2";
import NewCards from "./Cards/NewCards";

const CardSectionNews = () => {
  return (
    <div className="px-[120px] py-0">
      <Title2 title="BÀI VIẾT MỚI" />
      <div className="grid grid-cols-4 gap-[20px]">
        <NewCards />
        <NewCards />
        <NewCards />
        <NewCards />
      </div>
    </div>
  );
};

export default CardSectionNews;
