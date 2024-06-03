import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logoWhite from "../../assets/img/logo-white.png";
import "./Header.css";
// import ModalLogin from "../../containers/Login/Modal";
const Header = () => {
  // const [showLogin, setShowLogin] = useState(false);

  // const handleLoginClick = (e) => {
  //   e.preventDefault(); // Ngăn chặn link dẫn đến trang khác
  //   setShowLogin(true);
  // };

  // const handleCloseLogin = () => {
  //   setShowLogin(false);
  // };

  return (
    <div className="header-container">
      <div>
        <img
          className="header-img"
          src="https://blog.abit.vn/wp-content/uploads/2020/05/nguon-hang-giay-auth-88.jpg"
          alt=""
        />
      </div>
      <Link to={"/home"} className="logo">
        <img className="header-logo" src={logoWhite} alt="" />
      </Link>
      <div className="header-shout">BEST THINGS WITH BEST OFFERS</div>
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
              href="/news"
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Tin tức
            </a>
          </li>
          <li>
            <Link
              to={"/login"}
              // onClick={handleLoginClick}
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Tài khoản
            </Link>
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
      {/* <ModalLogin open={showLogin} handleClose={handleCloseLogin} /> */}
    </div>
  );
};

export default Header;
