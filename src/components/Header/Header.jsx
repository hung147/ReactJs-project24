import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logoWhite from "../../assets/img/logo-white.png";
import { auth } from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/containers/Login/FirebaseConfig.js";
import "./Header.css";
import SearchBar2 from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/components/SearchBar2.jsx";
const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate
  // useEffect nay de xac minh k can thiet vi da dung o body account
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Dọn dẹp khi thành phần unmount
    return () => unsubscribe();
  }, []);

  const handleAccountClick = (e) => {
    e.preventDefault();
    if (user) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };
  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       navigate("/home");
  //     })
  //     .catch((error) => {
  //       console.error("Error signing out: ", error);
  //     });
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
            <a
              href="#!"
              onClick={handleAccountClick}
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Tài khoản
            </a>
          </li>
        </ul>
      </div>

      <div className="search-container">
        <SearchBar2 />
      </div>
    </div>
  );
};

export default Header;
