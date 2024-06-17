import React, { useState, useRef } from "react";
import useDebounce from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/components/useDebounce.jsx";
import useClickOutside from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/hooks/useClickOutside.jsx";
import data from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/containers/Product/data.js";

const SearchBar = () => {
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
  );
};

export default SearchBar;
