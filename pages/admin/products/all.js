import React from "react";
import Title from "@components/Title"
import ShowAll from "@components/Cards/ShowAll";

const allProducts = () => {
  return (
    <div className="container mx-auto grid justify-center">
      <Title title="All Products" src="/products" breadcrumb="Products" />
      <ShowAll />
    </div>
  );
};

export default allProducts