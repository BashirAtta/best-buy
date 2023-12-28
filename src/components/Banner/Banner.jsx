import React from "react";
import "./Banner.css";

export const Banner = ({ image }) => {
  return (
    <>
      <div className="category-banner">
        <div className="category-banner-left">
          <h1>FLAT 50% OFF</h1>
          <p>
            <span>12</span> Hours <span>20</span> mins
          </p>
          <button>Explore now</button>
        </div>
        <div className="category-banner-right">
          <img src={image} alt="" srcSet="" />
        </div>
      </div>
    </>
  );
};
