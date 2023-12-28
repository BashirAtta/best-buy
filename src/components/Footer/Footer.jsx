import React from "react";
import instagram_icon from "../../assets/instagram_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";

import pintester_icon from "../../assets/pintester_icon.png";
import "./Footer.css";
import logo from "../../assets/logo.png";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-log">
        <img src={logo} alt="" srcSet="" />
        <h1>SHOPPER</h1>
      </div>
      <ul className="footer-links">
        <li className="footer-item">Company</li>
        <li className="footer-item">Products</li>
        <li className="footer-item">Offices</li>
        <li className="footer-item">About</li>
        <li className="footer-item">Contact</li>
      </ul>
      <div className="footer-social-items">
        <img src={whatsapp_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={pintester_icon} alt="" />
      </div>
      <hr />
      <p>Copyright © 2023 - All Rights Reserved</p>
    </div>
  );
};
