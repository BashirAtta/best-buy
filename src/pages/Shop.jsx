import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Popular } from "../components/popular/Popular";
import { Offer } from "../components/Offer/Offer";
import { NewCollection } from "../components/NewCollection/NewCollection";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";
import Section from "../components/Section/Section";

export const Shop = () => {
  return (
    <>
      <Hero />

      <Popular />

      <Offer />
      <NewCollection />
      <NewsLetter />
    </>
  );
};
