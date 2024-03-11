import Home from "../containers/Home/Home";
import { PATH } from "../const";
import Product from "../containers/Product/Product";
export const publicRouter = [
  {
    path: PATH.home,
    element: Home,
  },
  {
    path: PATH.product,
    element: Product,
  },
];
