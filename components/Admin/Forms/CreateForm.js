import React from "react";
import Input from "@components/Admin/Forms/Elements/Input";
import Textarea from "@components/Admin/Forms/Elements/Textarea";
import PrimaryButton from "@components/Admin/Buttons/PrimaryButton";
import ImageGroup from "@components/Admin/Forms/Elements/ImageGroup";
import Select from "@components/Admin/Forms/Elements/Select";


const CreateForm = () => {
    const options = [
        {value:"0", text:"No"},
        {value:"1", text:"Yes"}
    ]
    return (
        <form className="my-4 max-w-md  md:w-96 h-auto p-3" action="">
    <Input 
    label="Name"
    placeholder="Red Scissors"
    type="text"
    />
    <Input 
    label="Provider"
    placeholder="Red Scissors Inc. (7892)"
    type="text"
    />
    <Input 
    label="Cost Q."
    placeholder="100"
    type="number"
    />
    <Input 
    label="Price Q."
    placeholder="150"
    type="number"
    />
    <Select 
    label="Show in pharmacy"
    options={options}
    />
    <Textarea 
    label="Description"
    placeholder="Lorem Impsum Dolor Ammet Sit"
    />
    <ImageGroup />
    <div className="pt-4 grid place-items-center">
        <PrimaryButton 
        text="Create Product"
        />
    </div>
</form>
    );
};

export default CreateForm;