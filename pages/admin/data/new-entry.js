import Title from "@components/Title"
import CreateEntryForm from "@components/Data/CreateEntryForm"

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