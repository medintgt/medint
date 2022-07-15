import ShowImageGroup from "@components/Show/Elements/ImageGroup"
import Entry from "./Elements/Entry";
import SecondaryButton from "../Buttons/SecondaryButton";
const ShowProduct = () => {
    return (
        <form className="my-4 max-w-md  md:w-96 h-auto p-3" method="POST" action="/products/edit/123123">
    <Entry name="Name" value="Red Scissors" />
    <Entry name="Provider" value="Red Scissors Inc. (7892)" />
    <Entry name="Cost Q." value="100" />
    <Entry name="Price Q." value="150" />
    <Entry name="Show in pharmacy" value="Yes" />
    <Entry name="Description" value="Lorem Impsum Dolor Ammet Sit" />
    <ShowImageGroup image1="/img/avatar5.png" image2="/img/avatar4.png" image3="/img/avatar4.png"/>
    <div className="pt-4 grid place-items-center">
    <SecondaryButton type="submit" text="Edit"/>
    </div>
</form>
    );
};
export { ShowProduct }