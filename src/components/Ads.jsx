import React from "react";
import { Link } from "react-router-dom";

function Ads(props) {
  return (
    <Link to="/product-details">
      <img src={props.img} alt={props.alt} className="mt-[50px]" />
    </Link>
  );
}

export default Ads;
