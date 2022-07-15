import React from "react";
import Title from "@components/Title"
import QuickActions from "@components/Buttons/QuickActions";
import ShowPatients from "@components/Cards/ShowPatients";
import ShowAllTools from "@components/Tools/ShowAllTools";

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