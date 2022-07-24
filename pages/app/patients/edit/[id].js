import Title from "@components/Admin/Title";
import { ShowPatient } from "@components/Admin/Patients/ShowPatient";
import EditPatient from "@components/Admin/Forms/Patients/Edit";
import LayoutAdmin from "@components/LayoutAdmin";
import { useRouter } from "next/router";


const Patient = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
    <LayoutAdmin>
    <div className="container mx-auto grid justify-center">
        <Title title="Editar Paciente" src="/patients" breadcrumb="Pacientes"/>
        <EditPatient id={id} />
    </div>
    </LayoutAdmin>
);
};

export default Patient