import React from "react";
import Title from "@components/Admin/Title"
import QuickActions from "@components/Admin/Buttons/QuickActions";
import ShowPatients from "@components/Admin/Patients/ShowPatients";
import ShowAllTools from "@components/Admin/Tools/ShowAllTools";
import LayoutAdmin from "@components/LayoutAdmin";


const Patients = () => {
    return (
        <LayoutAdmin>

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
            </LayoutAdmin>
    );
};

export default Patients;