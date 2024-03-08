import React from "react";
import CardShop from "./Cards/Card";
import Title from "./Title/Title";
const CardSectionProduct = () => {
  return (
    <div className="px-[120px] py-0">
      <Title title="SẢN PHẨM BÁN CHẠY" />
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

export default CardSectionProduct;
