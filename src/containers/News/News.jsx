import React from "react";
import NewsHeader from "./NewsHeader";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import BodyNews from "./BodyNews";
// import NewsPost from "./NewsPost";
import NewsPostSection from "./NewsPostSection";

const News = () => {
  const title = "Tin tức";
  return (
    <div>
      <NewsHeader />
      <BodyNews title={title} />
      <NewsPostSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default News;
