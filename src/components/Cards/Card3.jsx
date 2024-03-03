import React from "react";
import {} from "@chakra-ui/react";
const CardShop3 = () => {
  return (
    <a href="#">
      <div className="product h-[320px] w-full bg-zinc-50 rounded border-neutral-50 border-2 border-solid">
        <img
          src="https://projects.techmaster.vn/obo-stadium/image/product/adidas/Adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg"
          alt=""
        />
        <div className="mx-[12px]">
          <h5 className="card-title font-medium leading-5 text-left mt-0 mb-[11px] mx-0">
            Adidas Yeezy Boost 700 Wave Runner Solid Grey
          </h5>
          <p className="card-text price-desc text-[#767676] leading-6 text-left mt-0 mb-1.5 mx-0">
            Giá thấp nhất hiện tại
          </p>
          <p className="price text-[#333333] text-2xl font-bold leading-9 text-left mt-0 mb-[5px] mx-0">
            9,550,000 ₫
          </p>
          <p className="text-[#767676] leading-6 text-left">Đã bán 2462 đôi</p>
        </div>
      </div>
    </a>
  );
};

export default CardShop3;
