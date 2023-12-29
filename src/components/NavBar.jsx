import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./NavBar.css";
import { AllProductContext } from "../store/AllProductContext";
import { IoMenu } from "react-icons/io5";
export const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const { totalCartItems } = useContext(AllProductContext);

  const hideSideBar = () => {
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.display = "none";
    // const menuItem = document.querySelector("li.show-on-mobile");
    // menuItem.style.display = "block";
  };
  const showMobileMenu = () => {
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.display = "flex";
    // const menuItem = document.querySelector("li.show-on-mobile");
    // menuItem.style.display = "none";
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-log">
          <img src={Logo} alt="siteLogo" srcSet="" />
          <p>BEST-BUY</p>
        </div>
        <ul className="nav-menu">
          <li
            className="hide-on-mobile"
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/">Shop</Link> {menu === "shop" && <hr />}
          </li>
          <li
            className="hide-on-mobile"
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link to="/men">Men</Link> {menu === "men" && <hr />}{" "}
          </li>
          <li
            className="hide-on-mobile"
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link to="/women">Women</Link> {menu === "women" && <hr />}{" "}
          </li>
          <li
            className="hide-on-mobile"
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to="/kids">kids</Link> {menu === "kids" && <hr />}{" "}
          </li>
          <li onClick={showMobileMenu} className="show-on-mobile">
            <IoMenu />
          </li>
        </ul>
        <div className="nav-cart-login hide-on-mobile">
          <Link to="/LoginSignIn">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            {" "}
            <img src={cart_icon} alt="" srcSet="" />
          </Link>
          <div style={{ fontSize: "15px" }} className="nav-card-count">
            {totalCartItems}
          </div>
        </div>
      </div>

      <div className="sideBar">
        <div className="menu-close" onClick={hideSideBar}>
          <IoMdClose />
        </div>
        <ul className="sidebar-menu">
          <li
            onClick={() => {
              setMenu("shop");
              hideSideBar();
            }}
          >
            <Link to="/">Shop</Link>
          </li>
          <hr />
          <li
            onClick={() => {
              setMenu("men");
              hideSideBar();
            }}
          >
            <Link to="/men">Men</Link>
          </li>
          <hr />
          <li
            onClick={() => {
              setMenu("women");
              hideSideBar();
            }}
          >
            <Link to="/women">Women</Link>
          </li>
          <hr />
          <li
            onClick={() => {
              setMenu("kids");
              hideSideBar();
            }}
          >
            <Link to="/kids">kids</Link>
          </li>
          <hr />
        </ul>
        <div className="sidebar-login">
          <Link onClick={() => hideSideBar()} to="/LoginSignIn">
            <button>Login</button>
          </Link>
          <Link onClick={() => hideSideBar()} to="/cart">
            {" "}
            <MdOutlineShoppingCart />
            <div
              style={{ fontSize: "15px" }}
              className="side-card-count nav-card-count"
            >
              {totalCartItems}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
