import React, { useState } from "react";

const SlideDetail = ({ images, handleClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleImageClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="list-img w-[600px] mt-[10px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          onClick={() => handleImageClick(index)}
          className={index === currentSlide ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default SlideDetail;