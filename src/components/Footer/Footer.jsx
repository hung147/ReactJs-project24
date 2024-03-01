import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiPixiv } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-navbar">
        <div className="logo">
          <img
            className="footer-logo"
            src="https://projects.techmaster.vn/obo-stadium/image/logo-white.png"
            alt=""
          />
        </div>
        <div class="navbar-nav footer-navbar-nav">
          <ul class="flex justify-center space-x-6">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300  relative text-base"
              >
                Các câu hỏi thường gặp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300  relative text-base"
              >
                Điều khoản
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300  relative text-base"
              >
                Chính sách
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <a
          className="footer-phone"
          href="tel:+84365304675"
          target="_blank"
          data-metatip="true"
        >
          Hotline: 0365304675
        </a>
        <div className="social-icon">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <SiPixiv />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
