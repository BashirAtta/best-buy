import React from "react";
import exclusive_image from "../../assets/exclusive_image.png";
import exclusive_image_mobile from "../../assets/exclusive_image_mobile.png";
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
        <img
          className="offer-rigth-image"
          src={exclusive_image}
          alt=""
          srcSet=""
        />
        <img
          className="offer-right-image-mobile"
          src={exclusive_image_mobile}
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};
