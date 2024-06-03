// SlideNews.js
import React from "react";
import Slider from "react-slick";
import NewCards from "./Cards/NewCards";
import Title from "./Title/Title";
import { Link } from "react-router-dom";
function SlideNews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    // variableWidth: true,
    // centerMode: false,
    // centerPadding: "0px",
  };

  return (
    <div className="pl-[100px] py-0 pr-[60px]">
      <div className="pr-[30px]">
        <Title title="BÀI VIẾT MỚI" />
      </div>
      <Slider {...settings} className="">
        <Link to={"/post"} className="slide-item w-[284px]">
          <NewCards
            img="https://projects.techmaster.vn/obo-stadium/image/news/news-1-thumnails.jpg"
            title="Pack “Logo Sketch” với branding mộc mạc trên Air Max 97"
            desc="Cùng đến với mẫu branding kiểu phác thảo, đầy mộc mạc và 'blend' hoàn hảo cùng tổng thể phối màu."
          />
        </Link>
        <div className="slide-item">
          <NewCards
            img="https://projects.techmaster.vn/obo-stadium/image/news/news-2-thumnails.jpg"
            title="Nike Classic Cortez – Phối Màu Của Sự Tinh Tế"
            desc="Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông màu: Hồng Hoa
            Đăng và màu Cam "
          />
        </div>
        <div className="slide-item">
          <NewCards
            img="https://projects.techmaster.vn/obo-stadium/image/news/news-3-thumnails.jpg"
            title="Air Jordan 1 “Satin Black Toe” xuất hiện hình ảnh chi tiết"
            desc="Air Jordan 1 “Black Toe” luôn là thiết kế đáng mua nhất, lại còn là satin nữa chứ?"
          />
        </div>
        <div className="slide-item">
          <NewCards
            img="https://projects.techmaster.vn/obo-stadium/image/news/news-4-thumnails.jpg"
            title="HOT! Nike và Levi’s tái hợp với hàng loạt siêu phẩm mới"
            desc="Đến hẹn lại lên, Nike và Levi’s lại tái hợp với nhau khiến các tín đồ thời trang mê mệt."
          />
        </div>
        <div className="slide-item">
          <NewCards
            img="https://projects.techmaster.vn/obo-stadium/image/news/news-5-thumnails.jpg"
            title="Nike tung ảnh chính thức phối màu Supreme x SB Dunk Low “Metallic Silver”"
            desc="Mùa thu năm nay, lần collab thứ 3 của Supreme cùng dòng SB Dunk Low của Nike sẽ ra mắt."
          />
        </div>
        <div className="slide-item">
          <NewCards
            img="https://projects.techmaster.vn/obo-stadium/image/news/news-6-thumnails.jpg"
            title="Xuất hiện phối màu thứ 3 của Nike Air Force 1 Type N354"
            desc="Nike N354 là tên dự án với những thiết kế lấy cảm hứng từ kho Archive khổng lồ của The Swoosh."
          />
        </div>
        <div className="slide-item">
          <NewCards
            img="https://projects.techmaster.vn/obo-stadium/image/news/news-7-thumnails.jpg"
            title="Red Wing kết hợp cùng New Balance chế tác mẫu 997 đầy tinh xảo"
            desc="Trong lần collab này, Red Wing và New Balance sẽ mang đến dòng sneaker 997."
          />
        </div>
      </Slider>
    </div>
  );
}

export default SlideNews;
