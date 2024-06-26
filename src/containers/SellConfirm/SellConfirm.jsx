import React from "react";
import ScrollToTop from "react-scroll-to-top";
import HeaderBuyConfirm from "../BuyConfirm/BuyConfirmHeader";
import Footer from "../../components/Footer/Footer";
import SellConfirmBody from "./SellConfirmBody";

const SellConfirm = () => {
  return (
    <div>
      <HeaderBuyConfirm />
      <SellConfirmBody />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default SellConfirm;
