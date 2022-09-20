import React from "react";
import Title from "@components/Admin/Title"
import ImportantInfo from "@components/Admin/Cards/ImportantInfo";
import QuickActions from "@components/Admin/Buttons/QuickActions";
import LayoutAdmin from "@components/LayoutAdmin";
import Link from "next/link";


const Movements = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="Finanzas"
            src="/"
            breadcrumb="Escritorio"
            />
            <Link href={"/app/finances/ledger"}>
            <a className="cursor-pointer text-sky-800">Ir a registros</a>
            </Link>
            <ImportantInfo value1="Important info" value2="Important info" />
            <QuickActions />
        </div>
            </LayoutAdmin>
    );
};

export default Movements;