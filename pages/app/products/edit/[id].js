import React from "react";
import Title from "@components/Admin/Title"
import EditProductForm from "@components/Admin/Forms/EditProductForm";
import { useRouter } from "next/router";
import LayoutAdmin from "@components/LayoutAdmin";

const EditProduct = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="Edit Product" src="/products" breadcrumb="Products" />
            <EditProductForm />
        </div>
        </LayoutAdmin>
    );
};

export default EditProduct;
