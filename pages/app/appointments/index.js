import React, { useEffect, useState } from "react"
import { ShowAppointments } from "@components/Admin/Appointments/ShowAppointments";
import Title from "@components/Admin/Title";
import ShowAllLink from "@components/Admin/Show/Elements/Link/ShowAllLink"
import LayoutAdmin from "@components/LayoutAdmin";


const Appointments = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="Citas"
            src="/"
            breadcrumb="Escritorio"
            />
            <ShowAppointments />
            <ShowAllLink text="Show all appointments" link="/appointments/all" />
        </div>
            </LayoutAdmin>
    )
}

export default Appointments;