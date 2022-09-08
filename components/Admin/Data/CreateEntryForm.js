import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SearchPatientInput from "@components/Admin/Data/SearchPatientInput";
import { useState, useEffect } from "react";
import axios from "axios"
import { useSession} from "next-auth/react"

const CreateEntryForm = () => {
  const { data: session } = useSession()
  const [search, setSearch] = useState("");
  let [date, onChange] = useState(new Date());
  const options = [
    { id: "0", name: "Presión en sangre" },
    { id: "1", name: "Altura" },
    { id: "2", name: "Peso" },
    { id: "3", name: "Frecuencia cardíaca" },
    { id: "4", name: "Frecuencia respiratoria" },
    { id: "5", name: "Temperatura" },
    { id: "6", name: "Pulso" },
    { id: "7", name: "Saturación de oxígeno" },
  ];
  const [patient, setPatient] = useState({
    name: "",
    id: ""
  });
  const [state, setState] = useState("0");
  const [data, setData] = useState({
    date: date.toISOString().slice(0, 10),
    patient: patient,
    type: 0,
    value1: null,
    value2: null,
    user_create: session.user.email,
  });

  const sendData = async () => {
    const response = await axios.post(`/api/data/new/`, data);
    let responseData = response.data;
    if (responseData.acknowledged == true) {
      window.location.href = `/app/patients/${data.patient.id}`;
    } else {
      window.alert("Hubo un error.")
    }
  };

  const select = options.map((option) => (
    <option key={option.id} value={option.id}>
      {option.name}
    </option>
  ));
  const selectWithSetValue = (
    <select
      id="type_list"
      className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
      name=""
      onChange={() => {setState(document.querySelector("#type_list").value)}}
      
    >
      {select}
    </select>
  );
  useEffect(() => {
    const handleDateChange = () => {
      let updatedData = {
        date: date.toISOString().slice(0, 10),
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handleDateChange();
  }, [date]);
  useEffect(() => {
    const handleTypeChange = () => {
      let updatedData = {
        type: state,
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handleTypeChange();
  }, [state]);
  useEffect(() => {
    const handlePatientChange = () => {
      let updatedData = {
        patient: patient,
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handlePatientChange();
  }, [patient]);
  const handleChangeWithValue = (value, type) => {
    let updatedData = {
      [type]: value,
    };
    setData((data) => ({
      ...data,
      ...updatedData,
    }));
  };
  return (
    <form autoComplete="off">
      <SearchPatientInput
        search={search}
        setSearch={setSearch}
        setPatient={setPatient}
      />
      <div>
        <label className="text-lg text-gray-400">Dato</label>
      </div>
      <div className=" pt-2 grid place-items-center">{selectWithSetValue}</div>
      <DataType state={state} data={data} handleChangeWithValue={handleChangeWithValue}></DataType>
      <Calendar
          className="mt-4 rounded-md"
          onChange={onChange}
          value={date}
          minDate={new Date()}
        />
      <div className=" pt-2 grid place-items-center">
      <button type="button" className="cursor-pointer w-72 text-2xl bg-sky-800 h-12 rounded-full text-white text-center p-2" onClick={sendData}>Agregar dato</button>
      </div>
    </form>
  );
};

const DataType = ({state, data, handleChangeWithValue}) => {
  if (state == "0") {
    return (
      <div>
        <div>
      <label className="text-lg text-gray-400">Diastólica</label>
      <div className="pt-2 grid place-items-center">
        <input
          key='0'
          onChange={(e) => {handleChangeWithValue(e.target.value, e.target.name)}}
          placeholder="80"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="value1"
          type="number"
          value={data.value1}
        ></input>
      </div>
    </div>
    <div>
      <label className="text-lg text-gray-400">Sistólica</label>
      <div className="pt-2 grid place-items-center">
        <input
          key='0'
          onChange={(e) => {handleChangeWithValue(e.target.value, e.target.name)}}
          placeholder="80"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="value2"
          type="number"
          value={data.value2}
        ></input>
      </div>
    </div>
      </div>
    );
  } else if (state == "1") {
    return <div>
    <label className="text-lg text-gray-400">Altura</label>
    <div className="pt-2 grid place-items-center">
      <input
        key='0'
        onChange={(e) => {handleChangeWithValue(e.target.value, e.target.name)}}
        placeholder="80"
        className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
        name="value1"
        type="number"
        value={data.value1}
      ></input>
    </div>
  </div>;
  } else if (state == "2") {
    return (<div>
      <label className="text-lg text-gray-400">Peso (Libras)</label>
      <div className="pt-2 grid place-items-center">
        <input
          key='0'
          onChange={(e) => {handleChangeWithValue(e.target.value, e.target.name)}}
          placeholder="150"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="value1"
          type="number"
          value={data.value1}
        ></input>
      </div>
    </div>)
  } else if (state == "3") {
    return (<div>
      <label className="text-lg text-gray-400">Frecuencia cardíaca</label>
      <div className="pt-2 grid place-items-center">
        <input
          key='0'
          onChange={(e) => {handleChangeWithValue(e.target.value, e.target.name)}}
          placeholder="150"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="value1"
          type="number"
          value={data.value1}
        ></input>
      </div>
    </div>)
  } else if (state == "4") {
    return (<div>
      <label className="text-lg text-gray-400">Frecuencia respiratoria</label>
      <div className="pt-2 grid place-items-center">
        <input
          key='0'
          onChange={(e) => {handleChangeWithValue(e.target.value, e.target.name)}}
          placeholder="150"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="value1"
          type="number"
          value={data.value1}
        ></input>
      </div>
    </div>)
  } else if (state == "5") {
    return (<div>
      <label className="text-lg text-gray-400">Temperatura</label>
      <div className="pt-2 grid place-items-center">
        <input
          key='0'
          onChange={(e) => {handleChangeWithValue(e.target.value, e.target.name)}}
          placeholder="36.5"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="value1"
          type="number"
          value={data.value1}
        ></input>
      </div>
    </div>)
  } else if (state == "6") {
    return (<div>
      <label className="text-lg text-gray-400">Pulso</label>
      <div className="pt-2 grid place-items-center">
        <input
          key='0'
          onChange={(e) => {handleChangeWithValue(e.target.value, e.target.name)}}
          placeholder="80"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="value1"
          type="number"
          value={data.value1}
        ></input>
      </div>
    </div>)
  } else if (state == "7") {
    return (<div>
      <label className="text-lg text-gray-400">Saturación de oxígeno</label>
      <div className="pt-2 grid place-items-center">
        <input
          key='0'
          onChange={(e) => {handleChangeWithValue(e.target.value, e.target.name)}}
          placeholder="150"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="value1"
          type="number"
          value={data.value1}
        ></input>
      </div>
    </div>)
  }
};
export default CreateEntryForm;
