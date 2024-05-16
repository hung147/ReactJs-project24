import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Ads from "../../components/Ads";
import LayoutSection from "../../components/LayoutSection";
import SectionAds from "../../components/SectionAds";
import CardSectionProduct from "../../components/CardSectionProduct";
import CardSectionChoose from "../../components/CardSectionChoose";
import CardSectionLower from "../../components/CardSectionLower";
import ScrollToTop from "react-scroll-to-top";
import SliderNews from "../../components/SliderNews";

const Home = () => {
  return (
    <div>
      <Header src="// https://blog.abit.vn/wp-content/uploads/2020/05/nguon-hang-giay-auth-88.jpg"  />
      <CardSectionProduct />
      <Ads img="https://projects.techmaster.vn/obo-stadium/image/banner/promo-banner-1-lg.png" />
      <CardSectionChoose />
      <Ads img="https://projects.techmaster.vn/obo-stadium/image/banner/promo-banner-2-lg.png" />
      <CardSectionLower />
      <Ads img="https://projects.techmaster.vn/obo-stadium/image/banner/promo-banner-3-lg.png" />
      <LayoutSection />
      <SectionAds />
      <SliderNews />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
