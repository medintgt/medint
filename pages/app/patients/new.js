import React from "react"
import Title from "@components/Admin/Title";
import CreatePatient from "@components/Admin/Forms/CreatePatient";
import LayoutAdmin from "@components/LayoutAdmin";

const NewPatient = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="Nuevo Paciente"
            src="/patients"
            breadcrumb="Pacientes"
            />
            <CreatePatient />
        </div>
            </LayoutAdmin>
    );
};

export default NewPatient