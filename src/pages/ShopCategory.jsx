import React, { useContext } from "react";
import { AllProductContext } from "../store/AllProductContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import { Item } from "../components/Item/Item";
import "./ShopCategory.css";
import { Banner } from "../components/Banner/Banner";
import { Popular } from "../components/popular/Popular";

export const ShopCategory = (props) => {
  const { all_product } = useContext(AllProductContext);

  return (
    <>
      <div className="shop-category">
        <Banner image={props.banner} />

        <div className="shop-category-indexSort">
          <p>
            <span>showing 1-12</span> out of 36
          </p>
          <div className="shop-category-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shop-category-items">
          {all_product.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  newPrice={item.new_price}
                  oldPrice={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shop-category-laoadMore">Explore more</div>
      </div>
      <Popular />
    </>
  );
};
