import _ from "lodash";
import React from "react";
const CardShop = ({ product }) => {
  const img = _.get(product, "img.data.attributes.url", "");

  return (
    <a href="#">
      <div className="product h-[320px] w-full bg-zinc-50 rounded border-neutral-50 border-2 border-solid hover:shadow-lg transition duration-300 ease-in-out">
        <img
          src={`http://localhost:1337${img}`}
          alt=""
          className="px-[0.6875rem] py-0 bg-white"
        />
        <div className="mx-[12px]">
          <h5 className="card-title font-medium leading-5 text-left mt-0 mb-[11px] mx-0 text-sm  h-[2.3rem] overflow-hidden">
            {product?.title || ""}
          </h5>
          <p className="card-text price-desc text-[#767676] leading-6 text-left mt-0 mb-1.5 mx-0">
            Giá thấp nhất hiện tại
          </p>
          <p className="price text-[#333333] text-2xl font-bold leading-9 text-left mt-0 mb-[5px] mx-0">
            {product?.priceSmallest || ""}
          </p>
          <p className="text-[#767676] leading-6 text-left">
            Đã bán {product?.bought || 0} đôi
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardShop;
