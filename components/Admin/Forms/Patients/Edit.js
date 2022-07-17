import React from "react";
import Input from "@components/Admin/Forms/Elements/Input";
import Textarea from "@components/Admin/Forms/Elements/Textarea";
import PrimaryButton from "@components/Admin/Buttons/PrimaryButton";
import Select from "@components/Admin/Forms/Elements/Select";
import { useState, useEffect } from "react";
import axios from "axios";

const EditPatient = (props) => {
  const countries = [
    { value: "GTM", text: "Guatemala", selected: "true" },
    { value: "1", text: "El Salvador" },
  ];
  const options = [
    { value: "0", text: "Masculino" },
    { value: "1", text: "Femenino" },
  ];

  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/patients/patient/${props.id}`);
      setData(response.data);
    };
    getData();
  }, [props.id]);
  const gender = ["Masculino", "Femenino"];
  if (data != null) {
  return (
    <form className="my-4 max-w-md  md:w-96 h-auto p-3" action="">
      <Input
        label="User"
        placeholder="Select user (if applicable)"
        type="text"
        value={data.user_id}
      />
      <Input label="Name" placeholder="John" type="text" value={data.first_name} />
      <Input
        label="Midle Name"
        placeholder="Richard"
        type="text"
        value={data.middle_name}
      />
      <Input label="Last Name" placeholder="Doe" type="text" value={data.last_name} />
      <Input
        label="DPI/CUI"
        placeholder="1234567890987"
        type="number"
        value={data.dpi}
      />
      <Input label="Birth date" type="date" value={data.born_date} />
      <Select label="Country" options={countries} value={data.address.country} />
      <Select label="Gender" options={options} value={data.gender} />
      <div className="pt-4 grid place-items-center">
        <PrimaryButton text="Update Patient" />
      </div>
    </form>
  );} else {
    return (
        <div className="container mx-auto grid justify-center">
            <h1 className="text-center text-lg">Data is being loaded...</h1>
        </div>
        )
}
};

export default EditPatient;
