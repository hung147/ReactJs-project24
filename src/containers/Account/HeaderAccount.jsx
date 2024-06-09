import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/img/logo-white.png";
import data from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/containers/Product/data.js";
import useDebounce from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/containers/Product/useDebounce.js";
import useClickOutside from "../../hooks/useClickOutside";

const HeaderAccount = ({ activeTab, user }) => {
  const [search, setSearch] = useState("");
  const [filteredTitle, setFilteredTitle] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  useDebounce(
    () => {
      setFilteredTitle(
        data.filter((d) => d.title.toLowerCase().includes(search.toLowerCase()))
      );
      setShowResults(search.length > 0);
    },
    [data, search],
    800
  );

  useClickOutside(searchRef, () => setShowResults(false));

  const handleSearch = (e) => setSearch(e.target.value);

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
              className={`text-white ${
                activeTab === "product" ? "underline-mt" : "hover:text-gray-300"
              } relative text-lg`}
            >
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className={`text-white ${
                activeTab === "news" ? "underline-mt" : "hover:text-gray-300"
              } relative text-lg`}
            >
              Tin tức
            </Link>
          </li>
          <li>
            <Link
              to={user ? "/account" : "/login"}
              className={`text-white ${
                activeTab === "account" ? "underline-mt" : "hover:text-gray-300"
              } relative text-lg`}
            >
              {user
                ? `Xin chào, ${user.displayName || user.email}`
                : "Tài khoản"}
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="search-form w-[calc(100%_-_903.586px)] m-auto"
        ref={searchRef}
      >
        <form>
          <div className="search-input-wrapper relative grid grid-cols-[2fr_auto]">
            <input
              className="bg-white rounded border text-[#333] leading-6 px-3 py-1.5 border-[#ced4da] border-solid"
              type="text"
              placeholder="Bạn cần tìm gì..."
              data-metatip="true"
              id="search"
              spellCheck="false"
              value={search || ""}
              onChange={handleSearch}
              onFocus={() => setShowResults(true)}
            />
            {showResults && (
              <div className="search-result absolute block p-0 w-full text-center max-h-[50vh] overflow-y-scroll bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_6px_2px] z-[100] top-[50px]">
                {filteredTitle.map((f) => (
                  <a
                    href="./product-details"
                    className="grid grid-cols-[1fr_2fr] text-left gap-5 items-center p-5 border-b-[#d5d6d6] border-b border-solid"
                    key={f.id}
                  >
                    <img className="max-w-full h-auto" alt="" src={f.img} />
                    <div className="">
                      <div className="text-[#767676]">{f.brand}</div>
                      <div className="text-xl font-medium leading-5 text-[#333] mx-0 my-2.5">
                        {f.title}
                      </div>
                      <div className="">
                        <div className="buy">
                          <span className="">Giá đặt bán thấp nhất: </span>
                          <span className="text-[#12b76d] font-[bold]">
                            16,097,047 ₫
                          </span>
                        </div>
                        <div className="sell">
                          <span className="">Giá đặt mua cao nhất: </span>
                          <span className="text-[#f04e40] font-[bold]">
                            <span className="price-showing ">22,989,047 ₫</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderAccount;
