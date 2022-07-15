
import Title from "@components/Title"
import CreateTherapy from "@components/Therapies/CreateTherapy";
const NewTherapie = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title title="New Therapie" src="/therapies" breadcrumb="Therapies"/>
            <CreateTherapy />
        </div>
    );
};
export default NewTherapie

