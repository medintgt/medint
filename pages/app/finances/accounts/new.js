import React from "react"
import Title from "@components/Admin/Title";
import LayoutAdmin from "@components/LayoutAdmin";

const NewAccount = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="Nueva Cuenta"
            src="/finances/accounts"
            breadcrumb="Cuentas"
            />
            
        </div>
            </LayoutAdmin>
    )
}

export default NewAccount;