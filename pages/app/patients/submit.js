import React from "react";
import Title from "@components/Admin/Title"
import SearchPatient from "@components/Admin/Patients/SearchPatient";
import ShowPatients from "@components/Admin/Patients/ShowPatients";
import LayoutAdmin from "@components/LayoutAdmin";

const SubmitPatients = () => {
    return (
        <LayoutAdmin>
        <div className="container mx-auto grid justify-center">
            <Title 
            title="Paciente Nuevo"
            src="/patients"
            breadcrumb="Pacientes"
            />
        </div>
        </LayoutAdmin>
    )
}
export default SubmitPatients;