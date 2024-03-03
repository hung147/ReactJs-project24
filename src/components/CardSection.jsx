import React from "react";
import Title from "./Title/Title";
import CardShop from "./Cards/Card";
const CardSection = () => {
  return (
    <div className="px-[100px] py-0">
      <Title />
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

export default CardSection;
