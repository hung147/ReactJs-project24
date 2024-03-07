import React from "react";
import CardShop from "./Cards/Card";
import Title2 from "./Title/Title2";
const CardSectionChoose = () => {
  return (
    <div className="px-[120px] py-0">
      <Title2 title="OBO LỰA CHỌN" />
      <div className="grid grid-cols-5 gap-[14px]">
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
      </div>
    </div>
  );
};

export default CardSectionChoose;
