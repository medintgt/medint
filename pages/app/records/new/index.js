import Title from "@components/Admin/Title"
import CreateRecord from "@components/Admin/Records/CreateRecord";
import LayoutAdmin from "@components/LayoutAdmin";

const NewRecord = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="Nuevo Regsitro Médico" src="/records" breadcrumb="Registros"/>
            <CreateRecord/>
        </div>
        </LayoutAdmin>
    );
};
export default NewRecord

