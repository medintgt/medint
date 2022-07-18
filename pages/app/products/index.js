import React from "react";
import Title from "@components/Admin/Title"
import SearchTab from "@components/Admin/Search/SearchTab";
import ImportantInfo from "@components/Admin/Cards/ImportantInfo";
import QuickActions from "@components/Admin/Buttons/QuickActions";
import ShowAllLink from "@components/Admin/Show/Elements/Link/ShowAllLink"
import LayoutAdmin from "@components/LayoutAdmin";

const Dashboard = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="Products"
            src="/"
            breadcrumb="Dashboard"
            />
            <SearchTab title="Search Products" placeholder="Search by ID, name or SKU"/>
            <ImportantInfo 
            value1="123123123"
            value2="Flora Liv y Beuty"
            />
            <QuickActions />
            <ShowAllLink text="Show all products" link="/products/all" />
        </div>
            </LayoutAdmin>
    );
};

export default Dashboard;