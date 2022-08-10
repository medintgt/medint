import React from "react"
import { CreateAppointmentForm } from "@components/Admin/Appointments/CreateAppointmentForm";
import Title from "@components/Admin/Title";
import LayoutAdmin from "@components/LayoutAdmin";

const NewAppointment = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="Nueva Cita"
            src="/appointments"
            breadcrumb="Citas"
            />
            <CreateAppointmentForm />
        </div>
            </LayoutAdmin>
    )
}

export default NewAppointment;