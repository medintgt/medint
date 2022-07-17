import React from "react";
import Title from "@components/Admin/Title"
import CreateForm from "@components/Admin/Forms/CreateForm";

const newProduct = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title title="New Product" src="/products" breadcrumb="Products" />
            <CreateForm />
        </div>
    )
}

export default newProduct