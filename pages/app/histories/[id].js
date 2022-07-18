import Title from "@components/Admin/Title";
import ShowTherapy from "@components/Admin/Therapies/ShowTherapy";
import LayoutAdmin from "@components/LayoutAdmin";

const Therapy = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="Therapy" src="/therapies" breadcrumb="Therapies" />
            <ShowTherapy />
        </div>
        </LayoutAdmin>
        );
};

export default Therapy;