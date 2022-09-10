import React from "react";
import Title from "@components/Admin/Title"
import ShowAccounts from "@components/Admin/Finances/ShowAccounts"
import LayoutAdmin from "@components/LayoutAdmin";


const Movements = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="Cuentas"
            src="/finances"
            breadcrumb="Finanzas"
            />
            <ShowAccounts />
        </div>
            </LayoutAdmin>
    );
};

export default Movements;