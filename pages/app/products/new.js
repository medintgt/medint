import React from "react";
import Title from "@components/Admin/Title"
import CreateForm from "@components/Admin/Forms/CreateForm";
import LayoutAdmin from "@components/LayoutAdmin";

const newProduct = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="New Product" src="/products" breadcrumb="Products" />
            <CreateForm />
        </div>
        </LayoutAdmin>
    )
}

export default newProduct