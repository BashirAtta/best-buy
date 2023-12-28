import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import Hero_image1 from "../../assets/Hero_image1.png";
import arrow from "../../assets/arrow.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 style={{ marginBottom: "-8px" }}>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" srcSet="" />
          </div>
          <p>Collection</p>
          <p>for Everyone</p>
        </div>
        <div className="hero-button button">
          latest Collection <img src={arrow} alt=""></img>
        </div>
      </div>
      <div className="hero-right">
        <img src={Hero_image1} alt="" srcSet="" />
      </div>
    </div>
  );
};
