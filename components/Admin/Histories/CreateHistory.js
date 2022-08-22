import React from "react";
import Input from "@components/Admin/Forms/Elements/Input";
import Textarea from "@components/Admin/Forms/Elements/Textarea";
import PrimaryButton from "@components/Admin/Buttons/PrimaryButton";
import ImageGroup from "@components/Admin/Show/Elements/ImageGroup";
import Select from "@components/Admin/Forms/Elements/Select";
import SearchPatientInput from "@components/Admin/Patients/SearchPatientInput"
import { useState } from "react"

const CreateHistoy = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    patient: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    dpi: "",
    born_date: "",
    profession: "",
    academic_level: 0,
    country: "GTM",
    gender: 0,
  });
  const sendData = async () => {
    const response = await axios.post(`/api/patients/new/`, data);
    let responseData = response.data;
    if (responseData.acknowledged == true) {
      window.location.href = `/app/patients/${responseData.insertedId}`;
    } else {
      console.log("Hubo un error")
    }
  };
  const handleChange = (e, type) => {
  let updatedData = {
      [type] : e.target.value,
  };
  setData((data) => ({
    ...data,
    ...updatedData,
  }));
}

  const options = [
    { value: "0", text: "No" },
    { value: "1", text: "Yes" },
  ];
  return (
    <form className="my-4 max-w-md  md:w-96 h-auto p-3" action="">
      <SearchPatientInput
      handleChange={handleChange}
      search={search}
      setSearch={setSearch}
      />
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
        <PrimaryButton onClick={() => {sendData()}} text="Save Therapy" />
      </div>
    </form>
  );
};

export default CreateHistory;
