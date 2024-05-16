import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/img/logo-white.png";
import { FaSearch } from "react-icons/fa";
const NewsHeader = () => {
  return (
    <div className="header-container">
      <div>
        <img
          className="header-img"
          src="https://i.pinimg.com/736x/b6/7e/51/b67e510b0c88850c6d41c18db2663312.jpg"
          alt=""
        />
      </div>
      <Link to={"/home"} className="logo">
        <img className="header-logo" src={logoWhite} alt="" />
      </Link>
      <div className="header-shout">Tin tức</div>
      <div className="navbar-nav">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to={"/product"}
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Sản phẩm
            </Link>
          </li>
          <li>
            <a
              href={"/news"}
              className="text-white underline-mt relative text-lg"
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

export default NewsHeader;
