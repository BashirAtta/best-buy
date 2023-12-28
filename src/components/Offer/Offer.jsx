import React from "react";
import exclusive_image from "../../assets/exclusive_image.png";
import "./Offer.css";

export const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button className="button">Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" srcSet="" />
      </div>
    </div>
  );
};
