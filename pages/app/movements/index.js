import React from "react";
import Title from "@components/Title"
import ImportantInfo from "@components/Cards/ImportantInfo";
import QuickActions from "@components/Buttons/QuickActions";

const Movements = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title 
            title="Movements"
            src="/"
            breadcrumb="Dashboard"
            />
            <ImportantInfo value1="Important info" value2="Important info" />
            <QuickActions />
        </div>
    );
};

export default Movements;