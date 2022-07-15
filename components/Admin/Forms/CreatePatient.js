import React from "react";
import Input from "@components/Forms/Elements/Input";
import Textarea from "@components/Forms/Elements/Textarea";
import PrimaryButton from "@components/Buttons/PrimaryButton";
import ImageGroup from "./Elements/ImageGroup";
import Select from "./Elements/Select";

const CreatePatient = () => {
    const countries = [
        { value: "0", text: "Guatemala" },
        { value: "1", text: "El Salvador" },
      ];
    const options = [
    { value: "0", text: "Male" },
    { value: "1", text: "Female" },
  ];
  return (
    <form className="my-4 max-w-md  md:w-96 h-auto p-3" action="">
      <Input
        label="User"
        placeholder="Select user (if applicable)"
        type="text"
      />
      <Input label="Name" placeholder="John" type="text" />
      <Input label="Midle Name" placeholder="Richard" type="text" />
      <Input label="Last Name" placeholder="Doe" type="text" />
      <Input label="DPI/CUI" placeholder="1234567890987" type="number" />
      <Input label="Birth date" type="date" />
      <Select label="Country" options={countries} />
      <Select label="Gender" options={options} />
      <div className="pt-4 grid place-items-center">
        <PrimaryButton text="Create Patient" />
      </div>
    </form>
  );
};

export default CreatePatient;
