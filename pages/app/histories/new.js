import Title from "@components/Admin/Title"
import CreateHistory from "@components/Admin/Histories/CreateHistory";
import LayoutAdmin from "@components/LayoutAdmin";

const NewTherapie = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="Nueva Historia" src="/histories" breadcrumb="Historias"/>
            <CreateHistory/>
        </div>
        </LayoutAdmin>
    );
};
export default NewTherapie

