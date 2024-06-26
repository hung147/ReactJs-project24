import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { IoIosCloseCircleOutline } from "react-icons/io";

const sizes = [
  38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48,
  48.5, 49.5, 50.5, 51.5,
];

const SellPageBody = () => {
  //   const [selectedMethod, setSelectedMethod] = useState("cod");
  //   const handleChange = (event) => {
  //     setSelectedMethod(event.target.id);
  //   };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [activeTab, setActiveTab] = useState("datgiaban");
  const [price, setPrice] = useState("9,310,000");
  const [totalprice, setTotalPrice] = useState("8,844,500");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("42.5");
  const [operate, setOperate] = useState("");
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    toggleModal();
  };
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setInputValue(value);
    const numericValue = parseInt(value, 10);
    if (numericValue > 100000 && numericValue < 9310000) {
      const newOperate = Number(numericValue * 0.03);
      setOperate(newOperate);
      setPrice(numericValue);
      setTotalPrice(Number(numericValue + newOperate));
      setErrorMessage("");
    } else {
      setErrorMessage(
        "Giá đặt mua phải lớn hơn 100,000 ₫ và thấp hơn 9,310,000 ₫"
      );
    }
  };

  const renderContent = (tab) => {
    switch (activeTab) {
      case "datgiaban":
        return (
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="bid"
          >
            <input
              className="bg-white rounded border text-[#333] leading-6 pl-5 pr-3 py-3 border-[#ced4da] border-solid w-full mt-[15px]"
              type="text"
              placeholder="Đặt giá bán ..."
              maxLength="10"
              value={inputValue}
              onChange={handleInputChange}
            />
            {errorMessage && (
              <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
            )}
            <div className="invalid-feedback hidden"></div>
            <div className="sub-price price-include flex justify-between items-center mb-2 w-full border-b border-gray-300 pb-[25px] mt-[25px]">
              <div className="text-gray-700 leading-6 text-left">
                Giá sản phẩm
              </div>
              <div className="sub-price-showing bid text-[#333] font-bold leading-6 text-left whitespace-nowrap mb-0 ">
                {price.toLocaleString()} ₫
              </div>
            </div>
            <div className="shipping-price price-include flex justify-between mb-2 w-full border-b border-gray-300 pb-[25px]">
              <div className="items-center text-gray-700 flex justify-between leading-6 text-left mt-6 mb-0">
                <span className="mr-[2px]">Phí vận hành </span>
                <Tooltip id="my-tooltip" />
                <BsFillQuestionCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Phí vận hành bằng 3% sản phẩm"
                />
              </div>
              <div className="sub-price-showing bid text-[#333] leading-6 text-left whitespace-nowrap mt-6 mb-0">
                {operate.toLocaleString()} ₫
              </div>
            </div>

            <div className="total-price price-include flex justify-between mt-[25px]">
              <div className="">Tổng thanh toán</div>
              <div className="total-price-showing bid total-price-showing bid text-[#f04e40] text-2xl font-bold leading-6 text-left">
                {totalprice.toLocaleString()} ₫
              </div>
            </div>
          </div>
        );
      case "banngay":
        return (
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="bid"
          >
            <input
              className="rounded text-[#6f8094] leading-6 pl-5 pr-3 py-3  w-full mt-[15px] border bg-[#e9ecef] border-solid border-[#ced4da]"
              type="text"
              placeholder="9,310,000 ₫"
              maxLength="10"
              disabled="true"
              value="9,310,000 ₫"
            />
            <div className="invalid-feedback hidden"></div>
            <div className="sub-price price-include flex justify-between items-center mb-2 w-full border-b border-gray-300 pb-[25px] mt-[25px]">
              <div className="text-gray-700 leading-6 text-left">
                Giá sản phẩm
              </div>
              <div className="sub-price-showing bid text-[#333] font-bold leading-6">
                9,310,000 ₫
              </div>
            </div>
            <div className="shipping-price price-include flex justify-between mb-2 w-full border-b border-gray-300 pb-[25px]">
              <div className="items-center text-gray-700 flex justify-between leading-6 text-left mt-6 mb-0">
                <span className="mr-[2px]">Phí vận hành </span>
                <Tooltip id="my-tooltip" />
                <BsFillQuestionCircleFill
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Phí vận hành bằng 5% sản phẩm"
                />
              </div>
              <div className="shipping-price-showing bid mt-6 mb-0">
                465,500 ₫
              </div>
            </div>

            <div className="total-price price-include flex justify-between mt-[25px]">
              <div className="">Tổng thanh toán</div>
              <div className="total-price-showing bid text-[#f04e40] text-2xl font-bold leading-6 text-left">
                8,844,500 ₫
              </div>
            </div>
          </div>
        );
      default:
        return "datgiaban";
    }
  };

  return (
    <div className="buy-container mt-12 px-24 py-0">
      <div className="flex">
        <div className="w-7/12 text-gray-800 leading-6 text-left px-4 py-0">
          <div className="product-info text-gray-800 leading-6 text-center">
            <div className="product-name text-gray-800 text-4xl text-[2.28rem] font-medium leading-tight text-center">
              Adidas Yeezy Boost 700 Wave Runner Solid Grey
            </div>
            <div className="price-info text-gray-800 leading-5 text-center mx-0 my-5">
              <span className="first-row text-gray-800 inline leading-5 text-center">
                Giá đặt mua cao nhất:{" "}
                <span className="bid-price-info text-red-600 inline font-bold leading-5 text-center">
                  9,310,000 ₫{" "}
                </span>
              </span>
              <span className="line"> | </span>
              <span className="second-row text-gray-800 inline leading-5 text-center">
                Giá đặt bán thấp nhất:{" "}
                <span className="ask-price-info text-green-600 inline font-bold leading-5 text-center">
                  9,550,000 ₫
                </span>
              </span>
            </div>
            <div className="size-info-wrapper text-gray-800 text-center  leading-[1.1875rem] mx-0 my-[1.25rem]">
              Size:{" "}
              <span className="size-info text-gray-800 inline font-bold leading-5 text-center">
                {selectedSize}
              </span>
            </div>
            <Link to="/product-details">
              <img
                src="https://projects.techmaster.vn/obo-stadium/image/product-details-image/1.jpg"
                alt="Adidas Yeezy Boost 700"
              />
            </Link>
          </div>
        </div>
        <div className="w-5/12">
          <div className="address-info-wrapper rounded border text-gray-800 leading-6 text-left pt-6 pb-8 px-8 border-gray-300">
            <div className="header flex justify-between items-center">
              <div className="title text-2xl font-bold">Địa chỉ nhận hàng</div>
              <button className="btn-change bg-red-600 text-white rounded px-2.5 py-1.5">
                Thay đổi
              </button>
            </div>
            <div className="info-wrapper">
              <div className="info-choose mt-5 flex items-center">
                <input
                  type="radio"
                  className="address-radio-btn hidden"
                  // checked="true"
                />
                <label className="grid grid-cols-[26px_1fr] gap-2.5 items-center">
                  <div className="flex items-center justify-center w-4 h-4 border-2 border-red-600 rounded-full">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div className="shipping-data">
                    <div className="name-phone">
                      <span className="shipping-name font-bold">Hung </span> |{" "}
                      <span className="shipping-phone">031031313</span>
                    </div>
                    <div className="address">
                      <span className="shipping-address">313, </span>
                      <span className="shipping-ward">null, </span>
                      <span className="shipping-district">
                        Huyện Đông Anh,{" "}
                      </span>
                      <span className="shipping-city">Hà Nội</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="pricing-wrapper rounded border text-gray-800 leading-6 text-left mt-8 mb-0 pt-6 pb-8 px-8 border-gray-300">
            <div className="size-btn" onClick={toggleModal}>
              <button className="table-size flex items-center justify-between bg-white rounded border border-gray-300 p-5 w-full">
                <span className="size-text text-gray-500 leading-7">Size</span>
                <span className="size-details text-gray-800 font-bold leading-6 mx-auto">
                  {selectedSize}
                </span>
                <IoIosArrowDropdown className="text-gray-500" />
              </button>
            </div>
            <div className="bid-buy-btn mt-8">
              <ul className="flex w-full" id="buyTab" role="tablist">
                <li className="flex-1">
                  <button
                    className={`bid-btn border font-bold leading-6 text-center p-5 rounded-l-lg w-full ${
                      activeTab === "datgiaban"
                        ? " bg-[#f04e40] text-white border-[#f04e40]"
                        : "bg-white text-gray-800 border-gray-300"
                    }`}
                    id="bid"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => handleTabChange("datgiaban")}
                  >
                    Đặt giá bán
                  </button>
                </li>
                <li className="flex-1">
                  <button
                    className={`border font-bold leading-6 text-center p-5 rounded-r-lg w-full ${
                      activeTab === "banngay"
                        ? " bg-[#f04e40] text-white border-[#f04e40]"
                        : "bg-white text-gray-800 border-gray-300"
                    }`}
                    id="buy-now"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => handleTabChange("banngay")}
                  >
                    Bán ngay
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-4" id="buyTabContent">
                <div className="">{renderContent()}</div>
              </div>
            </div>
          </div>

          <Link to="/sell-confirm">
            <button className="order-buy items-start bg-[#f04e40] rounded border text-white inline-block text-2xl leading-6 text-center mt-[30px] mb-0 mx-0 px-[25px] py-2.5 border-[#f04e40] border-solid">
              Đặt bán
            </button>
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={toggleModal}
        >
          <div
            className="modal-content bg-white rounded p-5 w-[450px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-cente  mb-4">
              <h2 className="text-xl font-bold">Chọn size</h2>
              {/* <a href="" className="text-[#c1554e] leading-6 text-left">
                Bảng size
              </a> */}
              <div className="text-xl" onClick={toggleModal}>
                <IoIosCloseCircleOutline />
              </div>
            </div>
            <ul className="grid grid-cols-4 gap-4">
              {sizes.map((size) => (
                <li
                  key={size}
                  className="size-item p-4 cursor-pointer hover:bg-gray-200 border border-gray-300 flex items-center justify-center rounded"
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellPageBody;
