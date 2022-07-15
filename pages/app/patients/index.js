import React from "react";
import Title from "@components/Title"
import QuickActions from "@components/Buttons/QuickActions";
import SearchTab from "@components/Search/SearchTab";
import ShowPatients from "@components/Cards/ShowPatients";
import ShowAllLink from "@components/Show/Elements/Link/ShowAllLink"

const Patients = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title 
            title="Patients"
            src="/"
            breadcrumb="Dashboard"
            />
            <SearchTab title="Search Patient" placeholder="Search by Id, name or country ID..." />
            <ShowPatients />
            <ShowAllLink text="Show all patients" link="/patients/all"/>
            <QuickActions />
        </div>
    );
};

export default Patients;