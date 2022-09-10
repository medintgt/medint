import React from "react"
import Title from "@components/Admin/Title";
import LayoutAdmin from "@components/LayoutAdmin";
import NewRecordForm from "@components/Admin/Finances/NewRecord"
const NewRecord = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="Nuevo Registro"
            src="/finances"
            breadcrumb="Finanzas"
            />
            <NewRecordForm />
        </div>
            </LayoutAdmin>
    )
}

export default NewRecord;