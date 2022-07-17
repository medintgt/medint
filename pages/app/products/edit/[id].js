import React from "react";
import Title from "@components/Admin/Title"
import EditProductForm from "@components/Admin/Forms/EditProductForm";
import { useRouter } from "next/router";

const EditProduct = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title title="Edit Product" src="/products" breadcrumb="Products" />
            <EditProductForm />
        </div>
    );
};

export default EditProduct;
