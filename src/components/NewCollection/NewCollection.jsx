import React from "react";
import "./NewCollection.css";
import new_collections from "../../assets/new_collections";
import { Item } from "../Item/Item";

export const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection">
        {new_collections.map((item) => {
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
