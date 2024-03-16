import React from "react";
import HeaderProduct from "./HeaderProduct";
import Footer from "../../components/Footer/Footer";
import BodyTitleProduct from "./BodyTitleProduct";
import ScrollToTop from "react-scroll-to-top";

const Product = () => {
  return (
    <div>
      <HeaderProduct />
      <BodyTitleProduct />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Product;
