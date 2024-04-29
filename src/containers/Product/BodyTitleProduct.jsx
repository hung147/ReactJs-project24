// import { FaChevronRight } from "react-icons/fa";
// import { IoFilterOutline } from "react-icons/io5";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { PaginationGroup } from "./panigation";
// import { AccordionCustomIcon } from "./Acordion";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { PaginationGroup1 } from "./ProductSmallToHight";
// const BodyTitleProduct = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedItem, setSelectedItem] = useState("Hàng mới");

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };
//   const handleItemClick = async (item) => {
//     setSelectedItem(item);
//   };
//   //

//   return (
//     <div className="container-full mt-[50px] px-[100px] py-0">
//       <div className="flex items-center mb-5">
//         <Link
//           className="text-[#060404] inline leading-6 text-left hover:text-black"
//           to="/home"
//         >
//           Trang chủ
//         </Link>
//         <FaChevronRight className="mx-0.5" />
//         <span>Sản phẩm</span>
//       </div>
//       <div className="grid grid-cols-12 gap-4flex">
//         <div className="col-span-3">
//           <div className="flex justify-between px-2.5 py-0">
//             <div className="flex items-center ">
//               <IoFilterOutline />
//               <div className="pl-[10px]">Lọc</div>
//             </div>
//             <button className="rounded bg-[#7a7a7a] text-white leading-[1.1875rem] uppercase px-[0.9375rem] py-[0.3125rem] border-[none]">
//               Bỏ lọc
//             </button>
//           </div>
//           <div className="break-line w-full mx-0 my-5 border-t-[#D5D6D6] border-t border-solid"></div>
//           <AccordionCustomIcon />
//         </div>
//         <div className="col-span-9 ml-10">
//           <div className="sort ml-5" onClick={toggleDropdown}>
//             <div className="sort-content flex justify-between w-[calc(100%/3)] items-center cursor-pointer border px-5 py-3 border-solid border-[#d5d6d6]">
//               Sắp xếp theo
//               <div className="sort-name">{selectedItem}</div>
//               <IoIosArrowDropdown />
//               <div
//                 className={`sort-dropdown ${showDropdown ? "block" : "hidden"}`}
//               >
//                 <div
//                   className={`sort-item ${
//                     selectedItem === "Hàng mới" ? "active" : ""
//                   }`}
//                   onClick={() => handleItemClick("Hàng mới")}
//                 >
//                   Hàng mới
//                 </div>
//                 <div
//                   className={`sort-item ${
//                     selectedItem === "Bán chạy" ? "active" : ""
//                   }`}
//                   onClick={() => handleItemClick("Bán chạy")}
//                 >
//                   Bán chạy
//                 </div>
//                 <div
//                   className={`sort-item ${
//                     selectedItem === "Giá thấp đến cao" ? "active" : ""
//                   }`}
//                   onClick={() => handleItemClick("Giá thấp đến cao")}
//                 >
//                   Giá thấp đến cao
//                 </div>
//                 <div
//                   className={`sort-item ${
//                     selectedItem === "Giá cao đến thấp" ? "active" : ""
//                   }`}
//                   onClick={() => {
//                     handleItemClick("Giá cao đến thấp");
//                   }}
//                 >
//                   Giá cao đến thấp
//                 </div>
//               </div>
//             </div>
//             <div className="filter-icon"></div>
//           </div>
//           <PaginationGroup />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BodyTitleProduct;
import { FaChevronRight } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { PaginationGroup } from "./panigation";
import { PaginationGroup1 } from "./ProductSmallToHight";
import { AccordionCustomIcon } from "./Acordion";
import { Link } from "react-router-dom";
import { useState } from "react";

const BodyTitleProduct = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Hàng mới");
  const [paginationType, setPaginationType] = useState("default"); // Thêm state cho loại pagination

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    if (item === "Giá thấp đến cao") {
      // Nếu click vào "Giá thấp đến cao", set loại pagination là "Giá thấp đến cao"
      setPaginationType("priceLowToHigh");
    } else {
      // Nếu click vào các mục khác, set loại pagination về mặc định
      setPaginationType("default");
    }
  };

  return (
    <div className="container-full mt-[50px] px-[100px] py-0">
      <div className="flex items-center mb-5">
        <Link
          className="text-[#060404] inline leading-6 text-left hover:text-black"
          to="/home"
        >
          Trang chủ
        </Link>
        <FaChevronRight className="mx-0.5" />
        <span>Sản phẩm</span>
      </div>
      <div className="grid grid-cols-12 gap-4flex">
        <div className="col-span-3">
          <div className="flex justify-between px-2.5 py-0">
            <div className="flex items-center ">
              <IoFilterOutline />
              <div className="pl-[10px]">Lọc</div>
            </div>
            <button className="rounded bg-[#7a7a7a] text-white leading-[1.1875rem] uppercase px-[0.9375rem] py-[0.3125rem] border-[none]">
              Bỏ lọc
            </button>
          </div>
          <div className="break-line w-full mx-0 my-5 border-t-[#D5D6D6] border-t border-solid"></div>
          <AccordionCustomIcon />
        </div>
        <div className="col-span-9 ml-10">
          <div className="sort ml-5" onClick={toggleDropdown}>
            <div className="sort-content flex justify-between w-[calc(100%/3)] items-center cursor-pointer border px-5 py-3 border-solid border-[#d5d6d6]">
              Sắp xếp theo
              <div className="sort-name">{selectedItem}</div>
              <IoIosArrowDropdown />
              <div
                className={`sort-dropdown ${showDropdown ? "block" : "hidden"}`}
              >
                <div
                  className={`sort-item ${
                    selectedItem === "Hàng mới" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("Hàng mới")}
                >
                  Hàng mới
                </div>
                <div
                  className={`sort-item ${
                    selectedItem === "Bán chạy" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("Bán chạy")}
                >
                  Bán chạy
                </div>
                <div
                  className={`sort-item ${
                    selectedItem === "Giá thấp đến cao" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("Giá thấp đến cao")}
                >
                  Giá thấp đến cao
                </div>
                <div
                  className={`sort-item ${
                    selectedItem === "Giá cao đến thấp" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleItemClick("Giá cao đến thấp");
                  }}
                >
                  Giá cao đến thấp
                </div>
              </div>
            </div>
            <div className="filter-icon"></div>
          </div>
          {paginationType === "default" ? (
            <PaginationGroup />
          ) : paginationType === "priceLowToHigh" ? (
            <PaginationGroup1 /> // Render PaginationGroup1 khi click vào "Giá thấp đến cao"
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BodyTitleProduct;
