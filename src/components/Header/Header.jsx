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
          src="https://blog.abit.vn/wp-content/uploads/2020/05/nguon-hang-giay-auth-88.jpg"
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
      <div class="navbar-nav">
        <ul class="flex justify-center space-x-6">
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Sản phẩm
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Tin tức
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Tài khoản
            </a>
          </li>
        </ul>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Bạn cần tìm gì..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
