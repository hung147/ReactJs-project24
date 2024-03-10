import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Ads from "../../components/Ads";
import LayoutSection from "../../components/LayoutSection";
import SectionAds from "../../components/SectionAds";
import CardSectionProduct from "../../components/CardSectionProduct";
import CardSectionChoose from "../../components/CardSectionChoose";
import CardSectionLower from "../../components/CardSectionLower";
import CardSectionNews from "../../components/CardSectionNews";
import { CarouselDefault } from "../../components/SliderHome";
import ScrollToTop from "react-scroll-to-top";
// import "./App.css";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <CardSectionProduct />
        <Ads img="https://projects.techmaster.vn/obo-stadium/image/banner/promo-banner-1-lg.png" />
        <CardSectionChoose />
        <Ads img="https://projects.techmaster.vn/obo-stadium/image/banner/promo-banner-2-lg.png" />
        <CardSectionLower />
        <Ads img="https://projects.techmaster.vn/obo-stadium/image/banner/promo-banner-3-lg.png" />
        <LayoutSection />
        <SectionAds />
        {/* <SliderComponent /> */}
        <CarouselDefault />
        {/* <CardSectionNews /> */}
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
