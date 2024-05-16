import React from "react";
import HeaderProduct from "../Product/HeaderProduct";
import BodyNews from "../News/BodyNews";
import MainBodyPost from "./MainBodyPost";
import SlideNews from "../../components/SliderNews";

const Post = () => {
  const title =
    " Pack “Logo Sketch” với branding mộc mạc trên Air Max 97 và Air Max Plus";
  return (
    <div>
      <HeaderProduct />
      <BodyNews title={title} />
      <MainBodyPost />
      <SlideNews />
    </div>
  );
};

export default Post;
