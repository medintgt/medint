import React from "react";
import Title from "@components/Admin/Title"
import SearchTab from "@components/Admin/Search/SearchTab";
import ShowPatients from "@components/Admin/Patients/ShowPatients";
import ShowAllLink from "@components/Admin/Show/Elements/Link/ShowAllLink"
import LayoutAdmin from "@components/LayoutAdmin";

const Patients = () => {
    return (
        <LayoutAdmin>
        <div className="container mx-auto grid justify-center">
            <Title 
            title="Patients"
            src="/"
            breadcrumb="Dashboard"
            />
            <SearchTab title="Search Patient" placeholder="Search by Id, name or country ID..." />
            <ShowPatients />
            <ShowAllLink text="Show all patients" link="/app/patients/all"/>
        </div>
        </LayoutAdmin>
    );
};

export default Patients;