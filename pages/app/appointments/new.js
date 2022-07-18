import React from "react"
import { CreateAppointmentForm } from "@components/Admin/Appointments/CreateAppointmentForm";
import Title from "@components/Admin/Title";
import LayoutAdmin from "@components/LayoutAdmin";

const NewAppointment = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="New Appointment"
            src="/appointments"
            breadcrumb="Appointments"
            />
            <CreateAppointmentForm />
        </div>
            </LayoutAdmin>
    )
}

export default NewAppointment;