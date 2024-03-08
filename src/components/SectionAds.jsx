import React from "react";

const SectionAds = () => {
  return (
    <div className="ads-contaier  h-[260px] bg-[#2e4757] mx-0 my-[50px]">
      <div className="ads-title text-white text-[40px] font-bold leading-[47px] text-center pt-[50px] pb-0 px-0">
        Đăng ký nhận bản tin OBO Stadium
      </div>
      <div className="ads-sub text-white leading-6 text-center mx-0 my-5">
        Hãy đăng ký để nhận tin mới nhanh nhất qua email
      </div>
      <div className="ads-form flex justify-center">
        <form>
          <input
            className="bg-white rounded border text-[#333333] leading-6 ml-0 mr-5 my-0 px-3 py-1.5 border-[#ced4da] border-solid w-[466px] h-[45px] border-[none]"
            type="text"
            placeholder="Nhập địa chỉ email của bạn"
          />
          <button
            className="items-start bg-[#f04e40] rounded border text-white font-bold leading-6 text-center uppercase px-[30px] py-2.5 border-[#f04e40] border-solid"
            type="submit"
          >
            đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default SectionAds;
