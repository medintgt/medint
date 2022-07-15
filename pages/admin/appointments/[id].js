import React from "react"
import { useRouter } from "next/router";
import Title from "@components/Title";
import { ApointmentCard } from "../../components/Appointments/AppointmentCard";

const Appointment = () => {
    const router = useRouter();
    return (
        <div className="container mx-auto grid justify-center">
            <Title 
            title="Appointment"
            src="/appointments"
            breadcrumb="Appointments"
            />
            <ApointmentCard 
            id={router.query.id}
            value1="Valor 1"
            value2="Valor 2"/>
        </div>
    );
};

export default Appointment;