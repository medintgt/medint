import Title from "@components/Admin/Title"
import { CreateSale } from "@components/Admin/Sales/CreateSale"
import LayoutAdmin from "@components/LayoutAdmin";

const NewSale = () => {
    return (
        <LayoutAdmin>

        <div className="container mx-auto grid justify-center">
            <Title 
            title="New Sale"
            src="/sales"
            breadcrumb="Sales"
            />
            <CreateSale />  
        </div>
            </LayoutAdmin>
    )
}
export default NewSale;