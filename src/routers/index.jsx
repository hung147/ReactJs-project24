import Home from "../containers/Home/Home";
import { PATH } from "../const";
import Product from "../containers/Product/Product";
import Detail from "../containers/Detail/Detail";
export const publicRouter = [
  {
    path: PATH.home,
    element: Home,
  },
  {
    path: PATH.product,
    element: Product,
  },
  {
    path: PATH.detail,
    element: Detail,
  },
];
