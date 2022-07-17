import Title from "@components/Admin/Title";
import { ShowPatient } from "@components/Admin/Patients/ShowPatient";
import LayoutAdmin from "@components/LayoutAdmin";
import { useRouter } from "next/router";


const Patient = () => {
    const router = useRouter();
    const id = router.query.id;
return (
    <LayoutAdmin>
    <div className="container mx-auto grid justify-center">
        <Title title="Patient" src="/patients" breadcrumb="Patients"/>
        <ShowPatient id={id} />
    </div>
    </LayoutAdmin>
);
};

export default Patient