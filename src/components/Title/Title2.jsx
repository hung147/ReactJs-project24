import React from "react";
import "./Title2.css";
const Title2 = (props) => {
  return (
    <div className="title-container">
      <h2 className="title-home">{props.title}</h2>
      <a href="#" className="title-more">
        XEM THÊM
      </a>
    </div>
  );
};

export default Title2;
