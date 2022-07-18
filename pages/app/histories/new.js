import Title from "@components/Admin/Title"
import CreateTherapy from "@components/Admin/Therapies/CreateTherapy";
import LayoutAdmin from "@components/LayoutAdmin";

const NewTherapie = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="New Therapie" src="/therapies" breadcrumb="Therapies"/>
            <CreateTherapy />
        </div>
        </LayoutAdmin>
    );
};
export default NewTherapie

