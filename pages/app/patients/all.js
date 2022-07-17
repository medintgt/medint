import React from "react";
import Title from "@components/Admin/Title"
import QuickActions from "@components/Admin/Buttons/QuickActions";
import ShowPatients from "@components/Admin/Cards/ShowPatients";
import ShowAllTools from "@components/Admin/Tools/ShowAllTools";

const Patients = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title 
            title="All Patients"
            src="/patients"
            breadcrumb="Patients"
            />
            <ShowAllTools />
            <ShowPatients />
            <QuickActions />
        </div>
    );
};

export default Patients;