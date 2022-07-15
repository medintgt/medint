import React, { useEffect, useState } from "react"
import { ShowAppointments } from "@components/Appointments/ShowAppointments";
import Title from "@components/Title";
import QuickActions from "@components/Buttons/QuickActions";
import ShowAllLink from "@components/Show/Elements/Link/ShowAllLink"

const Appointments = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title 
            title="Appointments"
            src="/"
            breadcrumb="Dashboard"
            />
            <ShowAppointments />
            <QuickActions />
            <ShowAllLink text="Show all appointments" link="/appointments/all" />
        </div>
    )
}

export default Appointments;