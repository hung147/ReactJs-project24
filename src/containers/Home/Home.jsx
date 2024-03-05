import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardSection from "../../components/CardSection";
import Ads from "../../components/Ads";
import CardSection2 from "../../components/CardSection2";
import CardSection3 from "../../components/CardSection3";
import LayoutSection from "../../components/LayoutSection";
import SectionAds from "../../components/SectionAds";
import NewsSection from "../../components/NewsSection";
// import "./App.css";
const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <CardSection />
        <Ads img="https://projects.techmaster.vn/obo-stadium/image/banner/promo-banner-1-lg.png" />
        <CardSection2 />
        <Ads img="https://projects.techmaster.vn/obo-stadium/image/banner/promo-banner-2-lg.png" />
        <CardSection3 />
        <Ads img="https://projects.techmaster.vn/obo-stadium/image/banner/promo-banner-3-lg.png" />
        <LayoutSection />
        <SectionAds />
        <NewsSection />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
