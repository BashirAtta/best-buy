import React from "react";
import "./popular.css";
import data_product from "../../assets/data";
import { Item } from "../Item/Item";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR PRODUCT</h1>
      <hr />
      <div className="popular-item-container">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
