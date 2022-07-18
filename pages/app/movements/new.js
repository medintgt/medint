import Title from "@components/Admin/Title"
import LayoutAdmin from "@components/LayoutAdmin";

const NewMovement = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto">
            <Title 
            title="New Movement"
            src="/movements"
            breadcrumb="Movements"
            />
        </div>
            </LayoutAdmin>
    )
}
export default NewMovement;