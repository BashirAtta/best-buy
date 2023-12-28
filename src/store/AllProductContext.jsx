import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

//================context

export const AllProductContext = createContext(null);

// =============== default cart Item function

const defaultCartItems = () => {
  let cartItems = {};
  for (var index = 0; index <= all_product.length; index++) {
    cartItems[index] = 0;
  }
  return cartItems;
};

//==================  contextProvider component
const AllProductContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCartItems);
  var totalCartAmount = 0;
  var totalCartItems = 0;

  all_product.map((item) => {
    if (cartItems[item.id] > 0) {
      totalCartAmount += item.new_price * cartItems[item.id];
      totalCartItems += 1;
    }
    console.log(
      "total amount is: ",
      totalCartAmount,
      "item is: ",
      totalCartItems
    );
  });

  // ===== Add to Card function
  const addToCart = (itemID) => {
    setCartItems((prev) => {
      return { ...prev, [itemID]: prev[itemID] + 1 };
    });
    console.log(cartItems);
  };
  //====delete from cart fuction
  const deletFromCart = (itemID) => {
    setCartItems((prev) => {
      return { ...prev, [itemID]: prev[itemID] - 1 };
    });
  };
  return (
    <AllProductContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        deletFromCart,
        totalCartAmount,
        totalCartItems,
      }}
    >
      {children}
    </AllProductContext.Provider>
  );
};

export default AllProductContextProvider;
