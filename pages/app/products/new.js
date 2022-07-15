import React from "react";
import Title from "@components/Title"
import CreateForm from "@components/Forms/CreateForm";

const newProduct = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title title="New Product" src="/products" breadcrumb="Products" />
            <CreateForm />
        </div>
    )
}

export default newProduct