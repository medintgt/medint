import LayoutAdmin from "@components/LayoutAdmin";
import { useRouter } from "next/router";
import { ApointmentCard } from "@components/Admin/Appointments/AppointmentCard";

const EditAppointments = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            Edit Appointments.
            <ApointmentCard 
            id={id}/>
        </div>
        </LayoutAdmin>
    );
};

export default EditAppointments;