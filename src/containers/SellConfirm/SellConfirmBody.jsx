import React from "react";
import { Link } from "react-router-dom";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const SellConfirmBody = () => {
  return (
    <div className="buy-confirm-container w-full mr-auto  mt-[3.125rem]">
      <div className="buy-header">
        <h1 className="text-[#333] text-[50px] font-bold leading-[60px] text-center">
          Xin chúc mừng
        </h1>
        <div className="sub-title text-[#333] leading-6 text-center mx-0 my-5">
          Bạn đã đặt hàng thành công, vui lòng kiểm tra lại thông tin đơn hàng ở
          dưới đây
        </div>
      </div>
      <div className="short-desc-wrapper bg-[#f4f4f4f4] text-[#333] flex flex-wrap leading-6 mr-[-15px] ml-[-15px] text-left my-0 px-0 py-[50px]">
        <div className="short-desc container  items-center text-[#333] flex justify-between leading-6 text-left mx-[105px] my-0 px-[15px] py-0">
          <div className="order-number-wrapper content">
            <div className="text-[#333] font-bold leading-6 text-left">
              MÃ ĐƠN HÀNG
            </div>
            <div className="order-number  text-[#abacad] font-bold leading-6 text-left text-[15px]">
              12345
            </div>
          </div>
          <div className="order-date-wrapper content">
            <div className="text-[#333] font-bold leading-6 text-left">
              NGÀY ĐẶT BÁN
            </div>
            <div className="order-date  text-[#abacad] font-bold leading-6 text-left text-[15px]">
              03/08/2019
            </div>
          </div>
          <div className="total-price-wrapper content">
            <div className="text-[#333] font-bold leading-6 text-left">
              DOANH THU
            </div>
            <div className="total-price  text-[#abacad] font-bold leading-6 text-left text-[15px]">
              8,844,500 ₫
            </div>
          </div>
          <div className="payment-methods-wrapper content">
            <div className="text-[#333] font-bold leading-6 text-left">
              PHƯƠNG THỨC THANH TOÁN
            </div>
            <div className="payment-methods  text-[#abacad] font-bold leading-6 text-left text-[15px]">
              Thanh toán khi nhận hàng
            </div>
          </div>
        </div>
      </div>
      <div className="full-desc-wrappe mx-0 my-[100px]">
        <div className="full-desc  px-[100px] py-0">
          <div>
            <h2 className="text-[#333] text-[40px] font-bold leading-[48px] text-left">
              Thông tin đơn hàng bán
            </h2>
            <div className="font-[bold] grid grid-cols-[1fr_1fr] mx-0 my-5">
              <div className="text-[#333] font-bold leading-6 text-left">
                SẢN PHẨM
              </div>
              <div className="text-[#333] font-bold leading-6 text-right">
                THÀNH TIỀN
              </div>
            </div>
            <div className="break-line bg-[#D5D6D6] h-px mb-2.5"></div>
            <div className="font-[bold] grid grid-cols-[1fr_1fr] mx-0 my-5">
              <div className="product-details text-[#333] font-bold leading-6 text-left">
                <Link
                  className="product-name text-[#f04e40] inline font-bold leading-6 text-left"
                  to="/product-details"
                >
                  Adidas Yeezy Boost 700 Wave Runner Solid Grey
                </Link>
                <div className="text-[#abacad] leading-6 text-left">
                  8US | 41VN | 26CM
                </div>
              </div>
              <div className="sub-price text-[#333] font-bold leading-6 text-right mt-[10px]">
                9,030,700 ₫
              </div>
            </div>
            <div className="break-line bg-[#D5D6D6] h-px mb-2.5"></div>
            <div className="font-[bold] grid grid-cols-[1fr_1fr] mx-0 my-5">
              <div className="sub-price-wrapper  flex items-center justify-between col-start-2 col-end-2">
                <div className="text-[#333] font-bold leading-6 text-left">
                  GIÁ BÁN SẢN PHẨM
                </div>
                <div className="sub-price text-[#333] font-bold leading-6 text-left">
                  9,310,000 ₫
                </div>
              </div>
            </div>
            <div className="font-[bold] grid grid-cols-[1fr_1fr] mx-0 my-5">
              <div className="shipping-price-wrapper  flex items-center justify-between col-start-2 col-end-2">
                <div className="flex items-center">
                  <span className="text-[rgb(51,51,51)] font-bold leading-6 text-left ">
                    {`PHÍ VẬN HÀNH\u00A0`}
                  </span>
                  <Tooltip id="my-tooltip" />
                  <BsFillQuestionCircleFill
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Phí vận hành bằng 3% sản phẩm"
                  />
                </div>
                <div className="sub-price text-[#333] font-bold leading-6 text-left">
                  465,500 ₫
                </div>
              </div>
            </div>
            <div className="font-[bold] grid grid-cols-[1fr_1fr] mx-0 my-5">
              <div className="total-price-wrapper flex items-center justify-between col-start-2 col-end-2">
                <div className=" text-[#333] font-bold leading-6 text-left">
                  DOANH THU
                </div>
                <div className="sub-price text-[#f04e40] text-2xl font-bold leading-9 text-left">
                  8,844,500 ₫
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="go-back-home-wrapper text-center">
        <Link to="/home">
          <button className="items-start bg-[#e24139] rounded border text-white inline-block text-2xl font-bold leading-6 text-center px-6 py-4 border-[#e24139] border-solid">
            Trở về trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SellConfirmBody;
