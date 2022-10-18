import Title from "@components/Admin/Title";
import React from "react"
import { ShowRecord } from "@components/Admin/Records/ShowRecord";
import LayoutAdmin from "@components/LayoutAdmin";
import { useRouter } from "next/router";

const Record = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="Registro" src="/records" breadcrumb="Registros" />
            <ShowRecord
            id={id}/>
        </div>
        </LayoutAdmin>
        );
};

export default Record;