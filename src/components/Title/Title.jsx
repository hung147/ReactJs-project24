import React from "react";
import "./Title.css";
const Title = (props) => {
  return (
    <div className="title-container">
      <h2 className="title-home">{props.title}</h2>
      <a href="/product" className="title-more">
        XEM THÊM
      </a>
    </div>
  );
};

export default Title;
