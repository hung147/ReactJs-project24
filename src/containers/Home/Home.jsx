import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardSection from "../../components/CardSection";
import Ads from "../../components/Ads";
import Ads2 from "../../components/Ads2";
import Ads3 from "../../components/Ads3";
import CardSection2 from "../../components/CardSection2";
import CardSection3 from "../../components/CardSection3";
import LayoutSection from "../../components/LayoutSection";
// import "./App.css";
const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <CardSection />
        <Ads />
        <CardSection2 />
        <Ads2 />
        <CardSection3 />
        <Ads3 />
        <LayoutSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
