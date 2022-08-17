import React from "react";
import Input from "@components/Admin/Forms/Elements/Input";
import PrimaryButton from "@components/Admin/Buttons/PrimaryButton";
import Select from "@components/Admin/Forms/Elements/Select";
import { useState, useEffect } from "react";
import axios from "axios";

const EditPatient = (props) => {
  const countries = {
    GTM: "Guatemala" ,
    SLV: "El Salvador" ,
    MEX: "Mexico" ,
    HND: "Honduras" ,
    USA: "Estados Unidos",
    PAN: "Panama" ,
    CRI: "Costa Rica" ,
    NIC: "Nicaragua" ,
    BLZ: "Belize" ,
    "no-specified": "Otro" ,
  };
  const sendCountries = [
    { value: "GTM", text: "Guatemala" },
    { value: "SLV", text: "El Salvador" },
    { value: "MEX", text: "Mexico" },
    { value: "HND", text: "Honduras" },
    { value: "USA", text: "Estados Unidos" },
    { value: "PAN", text: "Panama" },
    { value: "CRI", text: "Costa Rica" },
    { value: "NIC", text: "Nicaragua" },
    { value: "BLZ", text: "Belize" },
    { value: "no-specified", text: "Otro" },
  ];

  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/patients/patient/${props.id}`);
      setData(response.data);
    };
    getData();
  }, [props.id]);
  const [user, setUser] = useState("");
  if (data != null) {
   if (data.gender == 0){
      var gender = [<option key="0" value="0" selected>Masculino</option>,<option key="1" value="1">Femenino</option>]
    } else {
      var gender = [<option key="0" value="0">Masculino</option>,<option key="1" value="1" selected>Femenino</option>]
    }
  return (
    <form className="my-4 max-w-md  md:w-96 h-auto p-3" action="">
      <Input
        label="Usuario"
        placeholder="Seleccionar Usuario (if applicable)"
        type="text"
        value={data.user_id}
      />
      <Input label="Primer Nombre" placeholder="John" type="text" value={data.first_name} />
      <Input
        label="Segundo Nombre"
        placeholder="Richard"
        type="text"
        value={data.middle_name}
      />
      <Input label="Apellidos" placeholder="Doe" type="text" value={data.last_name} />
      <Input
        label="DPI/CUI"
        placeholder="1234567890987"
        type="number"
        value={data.dpi}
      />
      <Input label="Fecha de Nacimiento" type="date" value={data.born_date} />
      <Select label="País" options={sendCountries} value={countries[data.country]} />
      <div>
      <label className="text-lg text-gray-400">Genero</label>
      <div className=" pt-2 grid place-items-center">
        <select
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name=""
          id=""
        >
          {gender}
        </select>
      </div>
    </div>
      <div className="pt-4 grid place-items-center">
        <PrimaryButton text="Actualizar Paciente" />
      </div>
    </form>
  );} else {
    return (
        <div className="container mx-auto grid justify-center">
            <h1 className="text-center text-lg">Contenido esta cargando...</h1>
        </div>
        )
}
};

export default EditPatient;
