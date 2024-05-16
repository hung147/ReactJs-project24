import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../../components/useDebounce";
import logoWhite from "../../assets/img/logo-white.png";

// import data from "./data";

const HeaderProduct = () => {
  const [search, setSearch] = useState("");
  const [filteredTitle, setFilteredTitle] = useState([]);

  // useDebounce(
  //   () => {
  //     setFilteredTitle(
  //       data.filter((d) => d.title.toLowerCase().includes(search.toLowerCase()))
  //     );
  //   },
  //   [data, search],
  //   800
  // );

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div className="container-full bg-[#333333]  leading-6  h-[100px] flex justify-center items-center">
      <Link to="/home" className="logo">
        <img className="header-logo" src={logoWhite} alt="" />
      </Link>
      <div className="navbar-nav">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="/product"
              className="text-white underline-mt relative text-lg "
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
              to="/"
              className="text-white hover:text-gray-300 hover:underline-mt relative text-lg"
            >
              Tài khoản
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <form>
          <div className="">
            <input
              className="bg-white rounded border text-[#333333] leading-6 px-3 py-1.5 border-[#ced4da] border-solid w-[590px]  mr-[100px]  z-[100] product-header"
              type="text"
              placeholder="Bạn cần tìm gì..."
              onChange={handleSearch}
              value={search}
              data-metatip="true"
            ></input>
            {filteredTitle.map((f) => (
              <p key={f.id}>{f.title}</p>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderProduct;
