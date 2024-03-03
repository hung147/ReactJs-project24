import React from "react";
import CardShop2 from "./Cards/Card2";
import Title2 from "./Title/Title2";
const CardSection2 = () => {
  return (
    <div className="px-[100px] py-0">
      <Title2 />
      <div className="grid grid-cols-5 gap-[14px]">
        <CardShop2 />
        <CardShop2 />
        <CardShop2 />
        <CardShop2 />
        <CardShop2 />
      </div>
    </div>
  );
};

export default CardSection2;
