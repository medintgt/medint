import React from "react";
import Title from "@components/Admin/Title"
import ShowAll from "@components/Admin/Cards/ShowAll";
import LayoutAdmin from "@components/LayoutAdmin";

const allProducts = () => {
  return (
    <LayoutAdmin>

    <div className="container mx-auto grid justify-center">
      <Title title="All Products" src="/products" breadcrumb="Products" />
      <ShowAll />
    </div>
    </LayoutAdmin>
  );
};

export default allProducts