import React from "react";
import { useState } from "react";
import SearchUserInput from "@components/Admin/Users/SearchUserInput";
import axios from "axios";

const CreatePatient = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState({
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    dpi: "",
    phone_number: null,
    born_date: "",
    profession: "",
    academic_level: 0,
    country: "GTM",
    gender: 0,
  });
  const handleChange = (e, type) => {
  let updatedData = {
      [type] : e.target.value,
  };
  setData((data) => ({
    ...data,
    ...updatedData,
  }));
}
  const sendData = async () => {
    const response = await axios.post(`/api/patients/new/`, data);
    let responseData = response.data;
    if (responseData.acknowledged == true) {
      window.location.href = `/app/patients/${responseData.insertedId}`;
    } else {
      console.log("Hubo un error")
    }
  };
  const countries = [
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
  const academic = [
    { value: "0", text: "Ninguno" },
    { value: "1", text: "Primario" },
    { value: "2", text: "Básico" },
    { value: "3", text: "Intermedio (Diversificado)" },
    { value: "4", text: "Superior (Universidad/Técnico)" },
  ];
  const gender = [
    { value: "0", text: "Masculino" },
    { value: "1", text: "Femenino" },
  ];
  let date = new Date();
  return (
    <form
      className="my-4 max-w-md  md:w-96 h-auto p-3"
      method="POST"
    >
      <SearchUserInput
        handleChange={handleChange}
        user={user}
        setUser={setUser}
      />
      <div>
        <label className="text-lg text-gray-400">Primer Nombre</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => handleChange(e, "first_name")}
            placeholder="John"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="first_name"
            type="text"
            value={data.first_name}
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Segundo Nombre</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => handleChange(e, "middle_name")}
            placeholder="Richard"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="middle_name"
            type="text"
            value={data.middle_name}
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Apellidos</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => handleChange(e, "last_name")}
            placeholder="Doe"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="last_name"
            type="text"
            value={data.last_name}
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">DPI/CUI</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => handleChange(e, "dpi")}
            placeholder="3030292998987"
            min="1000000000000"
            max="9999999999999"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="dpi"
            type="number"
            value={data.dpi}
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Número de teléfono</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => handleChange(e, "phone_number")}
            placeholder="55555555"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="phone_number"
            type="number"
            value={data.phone_number}
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Fecha de nacimiento</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => handleChange(e, "born_date")}
            placeholder="Doe"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="born_date"
            type="date"
            max={date.toISOString().split('T')[0]}
            value={data.born_date}
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Profesión</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => handleChange(e, "profession")}
            placeholder="Profesión"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="profession"
            type="text"
            value={data.profession}
          ></input>
        </div>
      </div>
      <div>
      <label className="text-lg text-gray-400">Nivel académico</label>
      <div className=" pt-2 grid place-items-center">
        <select
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="academic_level"
          onChange={(e) => handleChange(e, "academic_level")}
        >
            {
          academic.map(option => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))
        }
        </select>
      </div>
    </div>
    <div>
      <label className="text-lg text-gray-400">País</label>
      <div className=" pt-2 grid place-items-center">
        <select
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="country"
          onChange={(e) => handleChange(e, "country")}
        >
            {
          countries.map(option => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))
        }
        </select>
      </div>
    </div>
    <div>
      <label className="text-lg text-gray-400">Genero</label>
      <div className=" pt-2 grid place-items-center">
        <select
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="gender"
          onChange={(e) => handleChange(e, "gender")}
        >
            {
          gender.map(option => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))
        }
        </select>
      </div>
    </div>
      <div className="pt-4 grid place-items-center">
        <button type="button" className="cursor-pointer w-72 text-2xl bg-sky-800 h-12 rounded-full text-white text-center p-2" onClick={sendData}>Crear Paciente</button>
      </div>
    </form>
  );
};

export default CreatePatient;
