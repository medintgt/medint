import Title from "@components/Admin/Title"
import CreateEntryForm from "@components/Admin/Data/CreateEntryForm"

const NewData = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title 
            title="New Entry"
            src="/"
            breadcrumb="Dashboard"
            />
            <CreateEntryForm />
        </div>
    )
}
export default NewData;