import React from "react";
import Input from "@components/Admin/Forms/Elements/Input";
import Textarea from "@components/Admin/Forms/Elements/Textarea";
import PrimaryButton from "@components/Admin/Buttons/PrimaryButton";
import ImageGroup from "@components/Admin/Show/Elements/ImageGroup";
import Select from "@components/Admin/Forms/Elements/Select";

const CreateTherapy = () => {
  const options = [
    { value: "0", text: "No" },
    { value: "1", text: "Yes" },
  ];
  return (
    <form className="my-4 max-w-md  md:w-96 h-auto p-3" action="">
      <Input label="Patient" placeholder="Jhon Doe (11208040)" type="text" />
      <Input label="Date" type="date" />
      <Textarea
        label="Subjective Data"
        placeholder="Lorem Impsum Dolor Ammet Sit"
      />
      <Textarea
        label="Objective Data"
        placeholder="Lorem Impsum Dolor Ammet Sit"
      />
      <Select label="Show in pharmacy" options={options} />
      <Input label="Diagnosis" placeholder="Osteoporosis" type="text" />
      <Input label="Treatment" placeholder="Neural Therapy" type="text" />
      <Textarea
        label="Comments"
        placeholder="Lorem Impsum Dolor Ammet Sit"
      />
      <ImageGroup />
      <div className="pt-4 grid place-items-center">
        <PrimaryButton text="Save Therapy" />
      </div>
    </form>
  );
};

export default CreateTherapy;
