import Title from "@components/Admin/Title";
import { ShowPatient } from "@components/Admin/Patients/ShowPatient";
import { ShowHistories} from "@components/Admin/Histories/ShowHistories";
import LayoutAdmin from "@components/LayoutAdmin";
import { useRouter } from "next/router";


const Patient = () => {
    const router = useRouter();
    const id = router.query.id;
return (
    <LayoutAdmin>
    <div className="container mx-auto grid justify-center">
        <Title title="Paciente" src="/patients" breadcrumb="Pacientes"/>
        <ShowPatient id={id} />
        <h1 className="text-2xl">Historial médico</h1>
        <ShowHistories id={id} />
        <section className="flex justify-between py-4">
        <h1 className="text-2xl">Datos</h1>
        </section>
    </div>
    </LayoutAdmin>
);
};

export default Patient