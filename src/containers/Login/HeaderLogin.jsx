import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/img/logo-white.png";
import SearchBar from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/components/SearchBar.jsx"; 

const HeaderLogin = () => {
  return (
    <div className="container-full bg-[#333333] leading-6 h-[100px] flex justify-center items-center">
      <Link to="/home" className="logo">
        <img className="header-logo" src={logoWhite} alt="" />
      </Link>
      <div className="navbar-nav">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="/product"
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Tin tức
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white underline-mt relative text-lg"
            >
              Tài khoản
            </Link>
          </li>
        </ul>
      </div>
      <SearchBar />
    </div>
  );
};

export default HeaderLogin;
