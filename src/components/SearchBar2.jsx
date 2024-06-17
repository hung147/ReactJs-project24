import React, { useState, useRef } from "react";
import useDebounce from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/components/useDebounce.jsx";
import useClickOutside from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/hooks/useClickOutside.jsx";
import data from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/containers/Product/data.js";
import { FaSearch } from "react-icons/fa";

const SearchBar2 = () => {
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
    <div className="search-form w-full m-auto relative" ref={searchRef}>
      <form className="relative">
        <div className="search-input-wrapper relative">
          <div className="search-home">
            <input
              placeholder="Bạn cần tìm gì..."
              className="search-input"
              type="text"
              data-metatip="true"
              id="search"
              spellCheck="false"
              value={search || ""}
              onChange={handleSearch}
              onFocus={() => setShowResults(true)}
            />
            <button type="submit" className="search-button ">
              <FaSearch />
            </button>
          </div>
          {showResults && (
            <div className="search-result absolute w-full max-h-[50vh] overflow-y-scroll bg-white shadow-lg z-10 top-[50px] left-0 mt-2">
              {filteredTitle.map((f) => (
                <a
                  href="./product-details"
                  className="grid grid-cols-[1fr_2fr] text-left gap-5 items-center p-5 border-b border-[#d5d6d6]"
                  key={f.id}
                >
                  <img className="max-w-full h-auto" alt="" src={f.img} />
                  <div>
                    <div className="text-[#767676]">{f.brand}</div>
                    <div className="text-xl font-medium leading-5 text-[#333] my-2.5">
                      {f.title}
                    </div>
                    <div>
                      <div className="buy">
                        <span>Giá đặt bán thấp nhất: </span>
                        <span className="text-[#12b76d] font-bold">
                          16,097,047 ₫
                        </span>
                      </div>
                      <div className="sell">
                        <span>Giá đặt mua cao nhất: </span>
                        <span className="text-[#f04e40] font-bold">
                          22,989,047 ₫
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
  );
};

export default SearchBar2;
