import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "./DisplayProduct.css";
import { AllProductContext } from "../../store/AllProductContext";

export const DisplayProduct = ({ product }) => {
  const { addToCart } = useContext(AllProductContext);
  return (
    <div className="display-product">
      <div className="display-product-left">
        <div className="img-list">
          <img src={product.image} alt="" srcSet="" />
          <img src={product.image} alt="" srcSet="" />
          <img src={product.image} alt="" srcSet="" />
          <img src={product.image} alt="" srcSet="" />
        </div>
        <img className="main-image" src={product.image} alt="" srcSet="" />
      </div>
      <div className="display-product-right">
        <h1>{product.name}</h1>
        <div className="product-stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <FaRegStar style={{ color: "grey" }} />
        </div>
        <div className="product-price">
          <div className="product-price-old">${product.old_price}</div>
          <div className="product-price-new">${product.new_price}</div>
        </div>
        <p className="product-description-top">
          {" "}
          When you want a coat that is lively and stylish our casual coat fits
          the bill perfectly. Having a happening color...
        </p>
        <div className="product-size">
          <p>Select Size:</p>
          <div className="prodcut-size-list">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XL</div>
          </div>
        </div>
        <button
          className="button"
          scroll="disable"
          onClick={(e) => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <div className="prodcut-category">
          <p>
            <span>Category:</span> {product.category}, jacket,
          </p>
          <p>
            <span>tags:</span> modern, latest
          </p>
        </div>
      </div>
    </div>
  );
};
