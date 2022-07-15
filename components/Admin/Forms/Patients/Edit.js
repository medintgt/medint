import React from "react";
import Input from "@components/Forms/Elements/Input";
import Textarea from "@components/Forms/Elements/Textarea";
import PrimaryButton from "@components/Buttons/PrimaryButton";
import Select from "@components/Forms/Elements/Select";

const EditPatient = () => {
  const countries = [
    { value: "0", text: "Guatemala", selected: "true" },
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
      <Input label="Name" placeholder="John" type="text" value="Elmer" />
      <Input
        label="Midle Name"
        placeholder="Richard"
        type="text"
        value="Alejandro"
      />
      <Input label="Last Name" placeholder="Doe" type="text" value="Chanquin" />
      <Input
        label="DPI/CUI"
        placeholder="1234567890987"
        type="number"
        value="3029987800108"
      />
      <Input label="Birth date" type="date" value="1999-12-23" />
      <Select label="Country" options={countries} value="1" />
      <Select label="Gender" options={options} />
      <div className="pt-4 grid place-items-center">
        <PrimaryButton text="Update Patient" />
      </div>
    </form>
  );
};

export default EditPatient;
