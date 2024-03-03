import React from "react";
import CardShop3 from "./Cards/Card3";
import Title3 from "./Title/Title3";
const CardSection3 = () => {
  return (
    <div className="px-[100px] py-0">
      <Title3 />
      <div className="grid grid-cols-5 gap-[14px]">
        <CardShop3 />
        <CardShop3 />
        <CardShop3 />
        <CardShop3 />
        <CardShop3 />
      </div>
    </div>
  );
};

export default CardSection3;
