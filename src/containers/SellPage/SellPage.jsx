import React from "react";
import ScrollToTop from "react-scroll-to-top";
import SellPageHeader from "./SellPageHeader";
import Footer from "../../components/Footer/Footer";
import SellPageBody from "./SellPageBody";

const SellPage = () => {
  return (
    <div>
      <SellPageHeader />
      <SellPageBody />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default SellPage;
