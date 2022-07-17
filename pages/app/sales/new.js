import Title from "@components/Admin/Title"
import { CreateSale } from "@components/Admin/Sales/CreateSale"

const NewSale = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title 
            title="New Sale"
            src="/sales"
            breadcrumb="Sales"
            />
            <CreateSale />  
        </div>
    )
}
export default NewSale;