import React from "react";
import Title from "@components/Title"
import SearchTab from "@components/Search/SearchTab";
import ImportantInfo from "@components/Cards/ImportantInfo";
import QuickActions from "@components/Buttons/QuickActions";
import ShowAllLink from "@components/Show/Elements/Link/ShowAllLink"

const Dashboard = () => {
    return (
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
    );
};

export default Dashboard;