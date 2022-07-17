import Title from "@components/Admin/Title"
import ShowAll from "@components/Admin/Cards/ShowAll";

const AllAppointments = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title title="All Products" src="/products" breadcrumb="Products" />
      <ShowAll />
        </div>
        );
};

export default AllAppointments;