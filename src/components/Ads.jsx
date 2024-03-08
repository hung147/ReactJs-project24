import React from "react";
function Ads(props) {
  return (
    <div>
      <img src={props.img} alt={props.alt} className="mt-[50px]" />
    </div>
  );
}

export default Ads;
