import React from "react";
import LoginPage from "./LoginPage";
import Footer from "../../components/Footer/Footer";
import HeaderLogin from "./HeaderLogin";
import Welcome from "./Welcome";
import ScrollToTop from "react-scroll-to-top";

const Login = () => {
  return (
    <div>
      <HeaderLogin />
      <LoginPage />
      <Welcome />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Login;
