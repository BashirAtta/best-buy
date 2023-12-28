import React from "react";
import "./RelatedProducts.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

export const RelatedProducts = () => {
  return (
    <div className="related-product">
      <h1>Related products</h1>
      <hr />
      <div className="relted-items">
        {data_product.map((item) => {
          return (
            <div key={item.id} className="r-item">
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
