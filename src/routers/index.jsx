import Home from "../containers/Home/Home";
import { PATH } from "../const";
import Product from "../containers/Product/Product";
import Detail from "../containers/Detail/Detail";
import News from "../containers/News/News";
import Post from "../containers/Post/Post";
// import Login from "../containers/Login/Login";
// import Register from "../containers/Register/Register";
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
  {
    path: PATH.news,
    element: News,
  },
  {
    path: PATH.post,
    element: Post,
  },
];
