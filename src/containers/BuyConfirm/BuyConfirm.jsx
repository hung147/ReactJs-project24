import React from "react";
import HeaderBuyConfirm from "./BuyConfirmHeader";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../components/Footer/Footer";
import BuyConfirmBody from "./BuyConfirmBody";

const BuyConfirm = () => {
  return (
    <div>
      <HeaderBuyConfirm />
      <BuyConfirmBody />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default BuyConfirm;
