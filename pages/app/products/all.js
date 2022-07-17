import React from "react";
import Title from "@components/Admin/Title"
import ShowAll from "@components/Admin/Cards/ShowAll";

const allProducts = () => {
  return (
    <div className="container mx-auto grid justify-center">
      <Title title="All Products" src="/products" breadcrumb="Products" />
      <ShowAll />
    </div>
  );
};

export default allProducts