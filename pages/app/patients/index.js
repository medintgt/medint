import React from "react";
import Title from "@components/Admin/Title"
import SearchPatient from "@components/Admin/Patients/SearchPatient";
import ShowPatients from "@components/Admin/Patients/ShowPatients";
import LayoutAdmin from "@components/LayoutAdmin";

const Patients = () => {
    return (
        <LayoutAdmin>
        <div className="container mx-auto grid justify-center">
            <Title 
            title="Pacientes"
            src="/"
            breadcrumb="Escritorio"
            />
            <form autoComplete="off">
            <SearchPatient/>
            </form>
            <ShowPatients />
        </div>
        </LayoutAdmin>
    );
};

export default Patients;