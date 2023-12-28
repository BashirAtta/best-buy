import React, { useContext } from "react";
import { BreadCrum } from "../components/BreadCrum/BreadCrum";
import { AllProductContext } from "../store/AllProductContext";
import { useParams } from "react-router-dom";
import { DisplayProduct } from "../components/DisplayProduct/DisplayProduct";
import { ProductDescription } from "../components/ProductDescription/ProductDescription";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts";

export const Product = () => {
  const { all_product } = useContext(AllProductContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));
  console.log(product);
  return (
    <>
      <BreadCrum product={product} />

      <DisplayProduct product={product} />

      <ProductDescription />
      <RelatedProducts />
    </>
  );
};
