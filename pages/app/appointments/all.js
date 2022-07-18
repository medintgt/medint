import Title from "@components/Admin/Title"
import ShowAll from "@components/Admin/Cards/ShowAll";
import LayoutAdmin from "@components/LayoutAdmin";

const AllAppointments = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title title="All Products" src="/products" breadcrumb="Products" />
      <ShowAll />
        </div>
        </LayoutAdmin>
        );
};

export default AllAppointments;