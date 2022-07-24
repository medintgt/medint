import LayoutAdmin from "@components/LayoutAdmin";
import React from "react"
import { useRouter } from "next/router";
import Title from "@components/Admin/Title";
import { ApointmentCard } from "@components/Admin/Appointments/AppointmentCard";

const Appointment = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <LayoutAdmin>
        <div className="container mx-auto grid justify-center">
            <Title 
            title="Cita"
            src="/appointments"
            breadcrumb="Citas"
            />
            <ApointmentCard 
            id={id}/>
        </div>
        </LayoutAdmin>
    );
};

export default Appointment;