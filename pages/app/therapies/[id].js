import Title from "@components/Title";
import ShowTherapy from "@components/Therapies/ShowTherapy";

const Therapy = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title title="Therapy" src="/therapies" breadcrumb="Therapies" />
            <ShowTherapy />
        </div>
        );
};

export default Therapy;