import React from "react";
import "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/components/Header/Header.css";
const HeaderProduct = () => {
  return (
    <div className="container-full bg-[#333333]  leading-6  h-[100px] flex justify-center items-center">
      <a href="#" className="logo">
        <img
          className="header-logo"
          src="https://projects.techmaster.vn/obo-stadium/image/logo-white.png"
          alt=""
        />
      </a>
      <div className="navbar-nav">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="#" className="text-white underline-mt relative text-lg ">
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
      <div>
        <form>
          <div className="">
            <input
              className="bg-white rounded border text-[#333333] leading-6 px-3 py-1.5 border-[#ced4da] border-solid w-[590px]  mr-[100px]  z-[100] "
              type="text"
              placeholder="Bạn cần tìm gì..."
              data-metatip="true"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderProduct;
