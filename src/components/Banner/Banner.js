import React from "react";
import "./Banner.scss";
import { images } from "../../config/image";
const Banner = () => {
  console.log(images);
  return (
    <div className="banner">
      <img src={images.header} alt="banner" />
    </div>
  );
};

export default Banner;
