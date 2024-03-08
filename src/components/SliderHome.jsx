import { Carousel } from "@material-tailwind/react";
import Title from "./Title/Title";

export function CarouselDefault() {
  return (
    <div className="px-[120px] py-0 ">
      <Title title="BÀI VIẾT MỚI" />
      <Carousel className="grid grid-cols-4 gap-[20px]">
        <div className=" w-[284px] bg-neutral-50 rounded relative ">
          <img
            className="card-img-top  h-[200px] rounded"
            src="https://projects.techmaster.vn/obo-stadium/image/news/news-2-thumnails.jpg"
            alt=""
          />
          <div className="card-body  pl-2.5 pr-5 pt-4 pb-5">
            <h5 className="card-title font-medium leading-[19px] text-left mt-0 mb-4 mx-0 ">
              Nike Classic Cortez – Phối Màu Của Sự Tinh Tế
            </h5>
            <p className="card-desc  text-[#333333] leading-[19px] text-left mt-0 mb-1.5 mx-0">
              Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông màu: Hồng
              Hoa Đăng và màu Cam
            </p>
            <p className="card-author text-[#333333] text-xs leading-[18px] text-left ">
              By
              <span className="text-[#333333] inline text-xs font-bold leading-[18px] text-left  mx-1 my-0">
                Cody ·
              </span>
              21/08/2019
            </p>
          </div>
        </div>
        <div className=" w-[284px] bg-neutral-50 rounded relative">
          <img
            className="card-img-top  h-[200px] rounded"
            src="https://projects.techmaster.vn/obo-stadium/image/news/news-3-thumnails.jpg"
            alt=""
          />
          <div className="card-body  pl-2.5 pr-5 pt-4 pb-5">
            <h5 className="card-title font-medium leading-[19px] text-left mt-0 mb-4 mx-0 ">
              Nike Classic Cortez – Phối Màu Của Sự Tinh Tế
            </h5>
            <p className="card-desc  text-[#333333] leading-[19px] text-left mt-0 mb-1.5 mx-0">
              Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông màu: Hồng
              Hoa Đăng và màu Cam
            </p>
            <p className="card-author text-[#333333] text-xs leading-[18px] text-left ">
              By
              <span className="text-[#333333] inline text-xs font-bold leading-[18px] text-left  mx-1 my-0">
                Cody ·
              </span>
              21/08/2019
            </p>
          </div>
        </div>
        <div className=" w-[284px] bg-neutral-50 rounded relative">
          <img
            className="card-img-top  h-[200px] rounded"
            src="https://projects.techmaster.vn/obo-stadium/image/news/news-3-thumnails.jpg"
            alt=""
          />
          <div className="card-body  pl-2.5 pr-5 pt-4 pb-5">
            <h5 className="card-title font-medium leading-[19px] text-left mt-0 mb-4 mx-0 ">
              Nike Classic Cortez – Phối Màu Của Sự Tinh Tế
            </h5>
            <p className="card-desc  text-[#333333] leading-[19px] text-left mt-0 mb-1.5 mx-0">
              Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông màu: Hồng
              Hoa Đăng và màu Cam
            </p>
            <p className="card-author text-[#333333] text-xs leading-[18px] text-left ">
              By
              <span className="text-[#333333] inline text-xs font-bold leading-[18px] text-left  mx-1 my-0">
                Cody ·
              </span>
              21/08/2019
            </p>
          </div>
        </div>
        <div className=" w-[284px] bg-neutral-50 rounded relative">
          <img
            className="card-img-top  h-[200px] rounded"
            src="https://projects.techmaster.vn/obo-stadium/image/news/news-3-thumnails.jpg"
            alt=""
          />
          <div className="card-body  pl-2.5 pr-5 pt-4 pb-5">
            <h5 className="card-title font-medium leading-[19px] text-left mt-0 mb-4 mx-0 ">
              Nike Classic Cortez – Phối Màu Của Sự Tinh Tế
            </h5>
            <p className="card-desc  text-[#333333] leading-[19px] text-left mt-0 mb-1.5 mx-0">
              Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông màu: Hồng
              Hoa Đăng và màu Cam
            </p>
            <p className="card-author text-[#333333] text-xs leading-[18px] text-left ">
              By
              <span className="text-[#333333] inline text-xs font-bold leading-[18px] text-left  mx-1 my-0">
                Cody ·
              </span>
              21/08/2019
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

// export function CarouselDefault() {
//   return (
//     <Carousel className="rounded-xl">
//       <div className="w-[284px] bg-neutral-50 rounded relative ">
//         <img
//           className="card-img-top  h-[200px] rounded"
//           src="https://projects.techmaster.vn/obo-stadium/image/news/news-2-thumnails.jpg"
//           alt=""
//         />
//         <div className="card-body  pl-2.5 pr-5 pt-4 pb-5">
//           <h5 className="card-title font-medium leading-[19px] text-left mt-0 mb-4 mx-0 ">
//             Nike Classic Cortez – Phối Màu Của Sự Tinh Tế
//           </h5>
//           <p className="card-desc  text-[#333333] leading-[19px] text-left mt-0 mb-1.5 mx-0">
//             Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông màu: Hồng
//             Hoa Đăng và màu Cam
//           </p>
//           <p className="card-author text-[#333333] text-xs leading-[18px] text-left ">
//             By
//             <span className="text-[#333333] inline text-xs font-bold leading-[18px] text-left  mx-1 my-0">
//               Cody ·
//             </span>
//             21/08/2019
//           </p>
//         </div>
//       </div>
//     </Carousel>
//   );
// }
