import Title from "@components/Admin/Title";
import { ShowRecord } from "@components/Admin/Finances/ShowRecord";
import LayoutAdmin from "@components/LayoutAdmin";
import { useRouter } from "next/router";


const Record = () => {
    const router = useRouter();
    const id = router.query.id;
return (
    <LayoutAdmin>
    <div className="container mx-auto grid justify-center">
        <Title title="Registro" src="/finances/ledger" breadcrumb="Registros"/>
        <ShowRecord id={id} />
    </div>
    </LayoutAdmin>
);
};

export default Record