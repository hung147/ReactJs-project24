import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SizeButton from "./SizeButton";
import CardSectionRelate from "../../components/CardSectionRelate";
const BodyTitleDetail = () => {
  return (
    <div>
      <div className="container-full mt-[50px] px-[100px] py-0">
        <div className="flex items-center mb-5">
          <Link
            className=" text-[#f04e3f] inline leading-6 text-left hover:text-black"
            to="/home"
          >
            Trang chủ
          </Link>
          <FaChevronRight className="mx-0.5" />
          <Link
            className=" text-[#f04e3f] inline leading-6 text-left hover:text-black"
            to="/product"
          >
            Sản phẩm
          </Link>
          <FaChevronRight className="mx-0.5" />
          <Link
            className=" text-[#000000] inline leading-6 text-left hover:text-black"
            to="/product"
          >
            Adidas Yeezy Boost 700 Wave Runner Solid Grey
          </Link>
        </div>
        <div className="detail-content">
          <div className="detail-info  mb-[3.125rem]">
            <div className="detail-band text-[#767676] leading-6 text-left mt-0 mb-[15px] mx-0">
              Adidas
            </div>
            <div className="detail-name text-[#333] text-[40px] font-medium leading-[47px] text-left mt-0 mb-[15px] mx-0">
              Adidas Yeezy Boost 700 Wave Runner Solid Grey
            </div>
            <div className="detail-code">Style Code: B75571</div>
          </div>
          <div className="detail-main flex">
            <div className="detail-img w-1/2 text-[#333] basis-6/12 leading-6 text-left  pr-[15px] py-0">
              <img
                src="https://projects.techmaster.vn/obo-stadium/image/product-details-image/1.jpg"
                alt=""
              />
            </div>
            <div className="detail-desc w-1/2 text-[#333] basis-6/12 leading-6 text-left pl-[15px] py-0">
              <div className="detail-title text-[#333] text-[28px] font-medium leading-[33.6px] text-left mt-0 mb-5 mx-0">
                Mô tả sản phẩm
              </div>
              <div className="detail-idesc">
                <p className=" text-[#333] leading-6 text-left mt-0 mb-4 mx-0">
                  Trend “dad shoes” đang gây bão trong giới trẻ hiện nay và mẫu
                  giày Yeezy 700 Wave Runner Solid Grey cũng góp phần tạo nên
                  sức hút cho cơn sốt này, khiến giới săn giày đứng ngồi không
                  yên. Kiểu dáng của Yeezy 700 Wave Runner Solid Grey chịu sự
                  ảnh hưởng của những mẫu “dad shoes” và cross-trainer, hiện
                  đang là 2 xu hướng sneaker được ưa thích trong những năm gần
                  đây. Đế giày đậm chất chunky sneaker và thiết kế retro, đi
                  cùng bản phối xám / xanh / cam đã dễ dàng thổi “bùa yêu” vào
                  giới yêu giày.
                </p>
                <p className="text-[#333] leading-6 text-left mt-0 mb-4 mx-0">
                  Phần upper sử dụng chất liệu breathable mesh, suede và nubuck.
                  Điểm nhấn ấn tượng chính là thiết kế là dây giày màu neon đi
                  kèm một số chi tiết được làm bằng chất liệu 3M phản quang. Với
                  bộ đế boost nổi tiếng và form giày rộng rãi, Yeezy 700 Wave
                  Runner Solid Grey mang đến cảm giác dễ chịu nhất cho người
                  mang. Cộng nghệ Boost với tấm đệm lót “thần thánh” êm ái, bạn
                  có thể mang đôi giày này từ sáng đến tối mà không hề có cảm
                  giác khó chịu hay bí bách. Không những hype mà còn comfy nữa.
                </p>
              </div>
              <div className="detail-sub text-[#333] leading-6 text-left mt-0 mb-5 mx-0">
                <span className="desc-sub-title text-[#333] inline font-bold leading-6 text-left">
                  Phối màu:{" "}
                </span>
                <span>Solid grey/Chalk white/Core black</span>
              </div>
              <div className="detail-sub text-[#333] leading-6 text-left mt-0 mb-5 mx-0">
                <span className="desc-sub-title text-[#333] inline font-bold leading-6 text-left">
                  Giá bán lẻ khi ra mắt:{" "}
                </span>
                <span> 7.350.000₫</span>
              </div>
              <div className="detail-sub text-[#333] leading-6 text-left mt-0 mb-5 mx-0">
                <span className="desc-sub-title text-[#333] inline font-bold leading-6 text-left">
                  Ngày ra mắt:{" "}
                </span>
                <span> 11/01/2017</span>
              </div>
              <div className="detail-btns">
                <div className="size-btn">
                  <SizeButton />
                </div>
                <Link
                  to={"./"}
                  className="buy-btn  items-center bg-[#11b76d] hover:bg-[#0f985b] rounded border text-white flex justify-between leading-6 text-center mt-0 mb-5 mx-0 px-5 py-3 border-[#12b76d] border-solid w-full"
                >
                  <div className="ask-text w-[55%] border-r-white border-r border-solid">
                    <div className="text-3xl font-[bold] leading-[2.625rem] text-left">
                      9.555.000 ₫
                    </div>
                    <div className="text-[#fff] leading-6 text-left">
                      Giá đặt bán thấp nhất
                    </div>
                  </div>
                  <div className="buy-text  w-[45%] pl-5">
                    <div className="buy-now text-white text-3xl font-bold leading-[42px] text-left">
                      Mua ngay
                    </div>
                    <div className="text-white leading-6 text-left">
                      hoặc đấu giá
                    </div>
                  </div>
                </Link>
                <Link
                  to={"./"}
                  className="sell-btn  items-center bg-[#f04e40] hover:bg-[#ce2e2f] rounded border text-white flex justify-between leading-6 text-center mt-0 mb-5 mx-0 px-5 py-3 border-[#12b76d] border-solid w-full"
                >
                  <div className="ask-text w-[55%] border-r-white border-r border-solid">
                    <div className="text-3xl font-[bold] leading-[2.625rem] text-left">
                      9.310.000 ₫
                    </div>
                    <div className="text-[#fff] leading-6 text-left">
                      Giá đặt bán thấp nhất
                    </div>
                  </div>
                  <div className="buy-text  w-[45%] pl-5">
                    <div className="buy-now text-white text-3xl font-bold leading-[42px] text-left">
                      Bán ngay
                    </div>
                    <div className="text-white leading-6 text-left">
                      hoặc đặt giá bán
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="break-section bg-neutral-50 h-[0.9375rem] mx-0 my-[3.125rem] border-t-[#D5D6D6] border-t border-solid"></div>
          <div className="insta-img w-full items-center text-[#333] flex basis-full justify-between leading-6 text-left px-[15px] py-0">
            <div className="insta-title">
              <h2 className="text-[#333] text-[26px] font-medium leading-[31.2px] text-left uppercase">
                Hình ảnh on feet
              </h2>
              <p className="text-[#767676] text-xs leading-[18px] text-left uppercase mt-0 mb-4 mx-0">
                Hãy tag chúng tôi @obostadium
              </p>
            </div>
          </div>
          <div className="break-section bg-neutral-50 h-[0.9375rem] mx-0 my-[3.125rem] border-t-[#D5D6D6] border-t border-solid"></div>
          <div className="w-full">
            <CardSectionRelate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyTitleDetail;
