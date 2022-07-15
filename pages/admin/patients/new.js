import React from "react"
import Title from "@components/Title";
import CreatePatient from "@components/Forms/CreatePatient";

const NewPatient = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title 
            title="New Patient"
            src="/patients"
            breadcrumb="Patients"
            />
            <CreatePatient />
        </div>
    );
};

export default NewPatient