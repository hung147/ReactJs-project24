import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import Card from "../../components/Cards/Card";
// import "./App.css";
const Home = () => {
  return (
    <div>
      <div>
        <Header></Header>
        {/* Body */}
        <Title />
        {/* <Card /> */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
