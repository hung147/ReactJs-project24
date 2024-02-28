import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
// import { SearchBar } from "../components/SearchBar";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img
          className="header-img"
          src="https://anchuongshoes.vn/storage/2020/08/giay-20.jpg"
          alt=""
        />
      </div>
      <a href="#" className="logo">
        <img
          className="header-logo"
          src="https://projects.techmaster.vn/obo-stadium/image/logo-white.png"
          alt=""
        />
      </a>
      <div className="header-shout">BEST THINGS WITH BEST OFFERS</div>
      <div className="navbar-nav">
        <a href="#" className="nav-item">
          Sản phẩm
        </a>
        <a href="#" className="nav-item">
          Tin tức
        </a>
        <a href="#" className="nav-item">
          Tài khoản
        </a>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
