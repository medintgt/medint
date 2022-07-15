import Entry from "./Elements/Entry";
import SecondaryButton from "../Buttons/SecondaryButton";

const ShowPatient = () => {
    return (
        <form className="my-4 max-w-md  md:w-96 h-auto p-3" method="POST" action="/patients/edit/123123">
    <Entry name="User" value="No user selected" />
    <Entry name="Name" value="Jhon" />
    <Entry name="Midle Name" value="Richard" />
    <Entry name="Last Name" value="Doe" />
    <Entry name="DPI/CUI" value="1234567890987" />
    <Entry name="Birth date" value="12/23/1999" />
    <Entry name="Phone number" value="55555555" />
    <Entry name="Country" value="Guatemala" />
    <Entry name="Gender" value="Male" />
    <div className="pt-4 grid place-items-center">
    <SecondaryButton type="submit" text="Edit"/>
    </div>
</form>
    );
};
export { ShowPatient }