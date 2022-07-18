import Title from "@components/Admin/Title";
import ShowTherapy from "@components/Admin/Histories/ShowHistory";
import LayoutAdmin from "@components/LayoutAdmin";

const Therapy = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="Historia" src="/histories" breadcrumb="Historias" />
            <ShowTherapy />
        </div>
        </LayoutAdmin>
        );
};

export default Therapy;