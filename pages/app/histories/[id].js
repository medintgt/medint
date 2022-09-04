import Title from "@components/Admin/Title";
import React from "react"
import { ShowHistory } from "@components/Admin/Histories/ShowHistory";
import LayoutAdmin from "@components/LayoutAdmin";
import { useRouter } from "next/router";

const History = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="Historia" src="/histories" breadcrumb="Historias" />
            <ShowHistory 
            id={id}/>
        </div>
        </LayoutAdmin>
        );
};

export default History;