import React, { useContext } from "react";
import "./CartItem.css";
import { AllProductContext } from "../../store/AllProductContext";

export const CartItem = () => {
  const { all_product, cartItems, addToCart, deletFromCart, totalCartAmount } =
    useContext(AllProductContext);

  return (
    <div className="cart-items-container">
      <div className="cart-items-title">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div className="cart-items cart-items-title">
                <img
                  src={e.image}
                  className="cart-item-image"
                  alt=""
                  srcSet=""
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>

                <div className="item-quantity-container">
                  <div className="item-add" onClick={() => addToCart(e.id)}>
                    +
                  </div>
                  <div className="item-quantity">{cartItems[e.id]}</div>
                  <div
                    className="item-remove"
                    onClick={() => deletFromCart(e.id)}
                  >
                    -
                  </div>
                </div>
                <p>${e.new_price * cartItems[e.id]}</p>
              </div>
              <hr />
            </>
          );
        } else {
          return null;
        }
      })}
      <div className="total-cart-Items">
        <div className="total-cart-items-left">
          <h1>Cart Summary</h1>
          <div className="total-items-detail">
            <p className="bold-element">Subtotal:</p>
            <p> ${totalCartAmount}</p>
          </div>
          <hr />
          <div className="total-items-detail">
            <p className="bold-element">Shiping fee:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="total-items-detail">
            <p className="bold-element">Total:</p>
            <p className="bold-element">${totalCartAmount}</p>
          </div>
          <hr />
          <button>Proceed to checkout</button>
        </div>
        <div className="total-cart-items-rigth">
          <p>If you have any promo code enter here:</p>
          <div className="promo-code">
            <input type="text" placeholder="Promo Code here..." name="" id="" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
