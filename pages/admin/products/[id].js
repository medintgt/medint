import Title from "@components/Title";
import { ShowProduct } from "@components/Show/ShowProduct";

const Product = () => {
    const values = ["Red Scissors", "Red Scissors Inc. (7892)", "100", "150", "1", "Lorem Impsum Dolor Ammet Sit"];
return (
    <div className="container mx-auto grid justify-center">
        <Title title="Product" src="/products" breadcrumb="Products"/>
        <ShowProduct />
    </div>
);
};

export default Product