import React from "react";
import HeaderProduct from "../Product/HeaderProduct";
import Footer from "../../components/Footer/Footer";
import BodyTitleDetail from "./BodyTitleDetail";
import ScrollToTop from "react-scroll-to-top";
const Detail = () => {
  return (
    <div>
      <HeaderProduct />
      <BodyTitleDetail />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Detail;
