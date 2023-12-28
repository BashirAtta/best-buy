import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ id, name, image, newPrice, oldPrice }) => {
  return (
    <div className="item-container">
      <Link to={`/product/${id}`}>
        <img onClick={() => window.scroll(0, 0)} src={image} alt="" srcSet="" />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="old-price">{oldPrice}$</div>
        <div className="new-price">
          <em>{newPrice}$</em>
        </div>
      </div>
    </div>
  );
};

export default Item;
