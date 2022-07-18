import Title from "@components/Admin/Title"
import CreateEntryForm from "@components/Admin/Data/CreateEntryForm"
import LayoutAdmin from "@components/LayoutAdmin";

const NewData = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="New Entry"
            src="/"
            breadcrumb="Dashboard"
            />
            <CreateEntryForm />
        </div>
            </LayoutAdmin>
    )
}
export default NewData;