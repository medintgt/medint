import React from "react";
import Title from "@components/Admin/Title"
import ImportantInfo from "@components/Admin/Cards/ImportantInfo";
import QuickActions from "@components/Admin/Buttons/QuickActions";
import LayoutAdmin from "@components/LayoutAdmin";

const Sales = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="Ventas"
            src="/"
            breadcrumb="Dashboard"
            />
            <ImportantInfo value1="Important info" value2="Important info" />
            <QuickActions />
        </div>
            </LayoutAdmin>
    );
};

export default Sales;