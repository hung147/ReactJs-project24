import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
const SizeButton = () => {
  const sizes = [
    38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48,
    48.5, 49.5, 50.5, 51.5,
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("42.5");
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    toggleModal();
  };
  return (
    <div onClick={toggleModal}>
      <button className="items-center bg-white rounded border text-[#333] flex justify-between leading-6 text-center mt-0 mb-5 mx-0 p-5 border-[#ccc] hover:border-[#333] border-solid w-full">
        <span className="text-xl text-[#ABACAD] leading-7">Size</span>
        <span className="text-[#333] text-3xl font-bold leading-[42px] text-center">
          9US | {selectedSize}VN | 26.2CM
        </span>
        <IoIosArrowDropdown className="text-[#abacad] text-xl font-black leading-7 text-center" />
      </button>
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

export default SizeButton;
