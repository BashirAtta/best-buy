import React from "react";
import "./BreadCrum.css";
import Arrow from "../../assets/breadcrum_arrow.png";

export const BreadCrum = ({ product }) => {
  return (
    <div className="breadcrum">
      Home <img src={Arrow} alt="" />
      Shop <img src={Arrow} alt="" /> {product.category}
      <img src={Arrow} alt="" /> {product.name.substring(0, 15)} ...
    </div>
  );
};
