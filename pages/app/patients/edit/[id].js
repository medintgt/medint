import Title from "@components/Title";
import { ShowPatient } from "@components/Show/ShowPatient";
import EditPatient from "@components/Forms/Patients/Edit";

const Patient = () => {
    const values = ["Red Scissors", "Red Scissors Inc. (7892)", "100", "150", "1", "Lorem Impsum Dolor Ammet Sit"];
return (
    <div className="container mx-auto grid justify-center">
        <Title title="Patient" src="/patients" breadcrumb="Patients"/>
        <EditPatient />
    </div>
);
};

export default Patient