import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/containers/Login/FirebaseConfig.js";

const BodyAccount = () => {
  //
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
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

  // set birthday
  const [date, setDate] = useState(2);
  const [month, setMonth] = useState(3);
  const [year, setYear] = useState(1995);
  //   change content nav-bar
  const [activeTab, setActiveTab] = useState("profile");
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="tab-pane" id="profile-setting">
            <form
              action=""
              className="setting-box rounded border text-[#333] leading-6 text-left px-10 py-[30px] border-[#d5d6d6] border-solid"
            >
              <div className="full-name item-row mb-4">
                <div className="text1 mb-2">Họ tên</div>
                <input
                  type="text"
                  className="form-control w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="email item-row mb-4">
                <div className="text1 mb-2">Email</div>
                <input
                  type="text"
                  className="form-control w-full px-3 py-2 border rounded-md"
                  //   disabled
                />
              </div>
              <div className="password item-row mb-4">
                <div className="text1 mb-2">Mật khẩu</div>
                <div className="password-wrapper mb-2 flex items-center justify-between">
                  <input
                    type="password"
                    disabled
                    className="form-control w-full px-3 py-2 border rounded-md"
                    autoComplete="off"
                  />
                  <a
                    className="change-password text-[#f04e40] leading-6 text-left ml-4 mr-0 my-0 whitespace-nowrap"
                    href=""
                    data-toggle="modal"
                    data-target="#changePassword"
                  >
                    Đổi mật khẩu
                  </a>
                </div>
              </div>
              <div className="phone item-row mb-4">
                <div className="text1 mb-2">Số điện thoại</div>
                <input
                  type="text"
                  className="form-control w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="gender item-row mb-4">
                <div className="text1 mb-2">Giới tính</div>
                <div className="gender-input-wrapper flex space-x-4 justify-between">
                  <div className="gender-male-wrapper radio-wrapper flex items-center">
                    <input
                      className="male-btn mr-2"
                      id="male"
                      type="radio"
                      name="gender"
                      defaultChecked
                    />
                    <label htmlFor="male" className="flex items-center">
                      <div className="male">Nam</div>
                    </label>
                  </div>
                  <div className="gender-female-wrapper radio-wrapper flex items-center">
                    <input
                      className="male-btn mr-2"
                      id="female"
                      type="radio"
                      name="gender"
                    />
                    <label htmlFor="female" className="flex items-center">
                      <div className="female">Nữ</div>
                    </label>
                  </div>
                  <div className="gender-other-wrapper radio-wrapper flex items-center">
                    <input
                      className="male-btn mr-2"
                      id="other"
                      type="radio"
                      name="gender"
                    />
                    <label htmlFor="other" className="flex items-center">
                      <div className="other">Khác</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="birthday item-row mb-4">
                <div className="text1 mb-2">Ngày sinh</div>
                <div className="birthday-input-wrapper flex space-x-4">
                  <input
                    className="form-control w-1/3 px-3 py-2 border rounded-md"
                    type="number"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <input
                    className="form-control w-1/3 px-3 py-2 border rounded-md"
                    type="number"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                  <input
                    className="form-control w-1/3 px-3 py-2 border rounded-md"
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="item-row">
                <button className="btn bg-[#f04e3f] text-white px-6 py-2 rounded-md col-[2_/_2] max-w-[120px]">
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        );
      case "address":
        return (
          <div className="tab-pane" id="address-setting">
            <div className="setting-box rounded border text-[#333] grid gap-10 grid-cols-[364.75px_1px_364.75px] grid-rows-[112px] leading-6 text-left px-10 py-[30px] border-[#d5d6d6] border-solid">
              <div className="address-item">
                <div className="header items-center text-[#333] flex justify-between leading-6 text-left">
                  <div className="received-person text-[#333] font-bold leading-6 text-left">
                    Cody
                  </div>
                  <div className="edit-address text-btn text-[#f04e40] leading-6 text-left cursor-pointer">
                    Chỉnh sửa
                  </div>
                </div>
                <div className="phone text-[#333] leading-6 text-left mx-0 my-5">
                  0365304675
                </div>
                <div className="address">
                  48 Tố Hữu, Lê Văn Lương kéo dài, Từ Liêm, Hà Nội
                </div>
              </div>
              <div className="break-line w-px bg-[#D5D6D6] h-full"></div>
              <div className="address-item">
                <div className="header items-center text-[#333] flex justify-between leading-6 text-left">
                  <div className="received-person text-[#333] font-bold leading-6 text-left">
                    Bi Villy
                  </div>
                  <div className="edit-address text-btn text-[#f04e40] leading-6 text-left cursor-pointer">
                    Chỉnh sửa
                  </div>
                </div>
                <div className="phone text-[#333] leading-6 text-left mx-0 my-5">
                  098123xxxx
                </div>
                <div className="address">Khâm Thiên, Đống Đa, Hà Nội</div>
              </div>
            </div>
            <div className="btn-add bg-[#f04e40] rounded border text-white inline-block leading-6 text-center mt-5 mb-0 mx-0 px-3.5 py-2.5 border-[#f04e40] border-soli cursor-pointer">
              + Thêm mới
            </div>
          </div>
        );
      case "payment":
        return (
          <div className="tab-pane" id="payment-setting">
            Payment content
          </div>
        );
      default:
        return "Hello";
    }
  };

  return (
    <div className="container-full mt-12 px-24 py-0">
      <div className="flex">
        <div className="w-1/4 pr-4">
          <div className="left-sidebar bg-white shadow-md p-4 rounded">
            <div className="header flex items-center mb-4">
              <div className="avatar mr-4">
                <img
                  className="rounded-full w-16 h-16"
                  src="https://projects.techmaster.vn/obo-stadium/image/post/avatar.png"
                  alt="Avatar"
                />
              </div>
              <div className="info">
                <div className="name text-lg font-semibold">Cody</div>
                <div className="edit-profile text-[#f68175] cursor-pointer">
                  Chỉnh sửa tài khoản
                </div>
              </div>
            </div>
            <div className="break-line border-t border-gray-200 mb-4"></div>
            <div className="nav-sidebar">
              <a
                href="#"
                className={`block py-2 text-[#fe5e35] font-semibold ${
                  activeTab === "profile" ? "text-[#f68175]" : "text-gray-700"
                }`}
                onClick={() => handleTabChange("profile")}
              >
                Quản lý tài khoản
              </a>
              <a
                href="#"
                className={`block py-2 text-gray-700 hover:text-red-500 ${
                  activeTab === "address" ? "text-[#f68175]" : ""
                }`}
                onClick={() => handleTabChange("address")}
              >
                Quản lý mua/bán sản phẩm
              </a>
              <a
                href="#"
                className={`block py-2 text-gray-700 hover:text-red-500${
                  activeTab === "payment" ? "text-[#f68175]" : ""
                }`}
                onClick={() => handleTabChange("payment")}
              >
                Đơn hàng mua
              </a>
              <a
                href="#"
                className={`block py-2 text-gray-700 hover:text-red-500${
                  activeTab === "payment" ? "text-[#f68175]" : ""
                }`}
                onClick={() => handleTabChange("payment")}
              >
                Đơn hàng bán
              </a>
              {user && (
                <a
                  onClick={handleLogout}
                  href="/home"
                  className="block  mt-2 bg-[#f04e40] rounded border text-white leading-6 text-center px-3 py-1.5 border-[#f04e40] border-solid"
                >
                  Đăng xuất
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="w-3/4 pl-4">
          <div className="right-content">
            <div className="nav-tab p-3.5 border rounded border-b border-solid border-[#D5D6D6]">
              <ul className="grid grid-cols-3 gap-4">
                <li className="nav-item text-center">
                  <a
                    href="#"
                    className={`block ${
                      activeTab === "profile"
                        ? "text-[#f68175] font-bold"
                        : "text-gray-700"
                    } hover:text-[#f68175]`}
                    onClick={() => handleTabChange("profile")}
                  >
                    Hồ sơ tài khoản
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a
                    href="#"
                    className={`block ${
                      activeTab === "address"
                        ? "text-[#f68175] font-bold"
                        : "text-gray-700"
                    } hover:text-[#f68175]`}
                    onClick={() => handleTabChange("address")}
                  >
                    Sổ địa chỉ
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a
                    href="#"
                    className={`block ${
                      activeTab === "payment"
                        ? "text-[#f68175] font-bold"
                        : "text-gray-700"
                    } hover:text-[#f68175]`}
                    onClick={() => handleTabChange("payment")}
                  >
                    Thông tin thanh toán
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content mt-10">{renderContent()}</div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAccount;
