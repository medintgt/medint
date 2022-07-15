import React from "react"
import { CreateAppointmentForm } from "@components/Appointments/CreateAppointmentForm";
import Title from "@components/Title";

const NewAppointment = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title 
            title="New Appointment"
            src="/appointments"
            breadcrumb="Appointments"
            />
            <CreateAppointmentForm />
        </div>
    )
}

export default NewAppointment;