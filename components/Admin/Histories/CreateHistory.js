import React from "react";
import Input from "@components/Admin/Forms/Elements/Input";
import SearchPatientInput from "@components/Admin/Histories/SearchPatientInput";
import { useState, useEffect } from "react";
import { useSession} from "next-auth/react";
import Image from "next/image";
import axios from "axios"

const CreateHistory = () => {
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [search, setSearch] = useState("");
  const [patient, setPatient] = useState({
    name: "",
    id: ""
  });
  const [data, setData] = useState({
    patient_name: patient.name,
    patient_id: patient.id,
    date: date,
    reason: "",
    subjective: "",
    objective: "",
    new_data: "",
    diagnosis: "",
    treatment: "",
    comments: "",
    user_create: session.user.email,
  });
  const sendData = async () => {
    const response = await axios.post(`/api/histories/new/`, data);
    let responseData = response.data;
    if (responseData.acknowledged == true) {
      window.location.href = `/app/histories/${responseData.insertedId}`;
    } else {
      console.log("Hubo un error");
    }
  };
  const handleChange = (value, type) => {
    let updatedData = {
      [type]: value,
    };
    setData((data) => ({
      ...data,
      ...updatedData,
    }));
  };
  useEffect(() => {
    const handlePatientChange = () => {
      let updatedData = {
        patient_id: patient.id,
        patient_name: patient.name,
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handlePatientChange();
  }, [patient]);
  useEffect(() => {
    const handleDateChange = () => {
      let updatedData = {
        date: date,
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handleDateChange();
  }, [date]);
  return (
    <form className="my-4 max-w-md  md:w-96 h-auto p-3" action="">
      <SearchPatientInput
        search={search}
        setSearch={setSearch}
        setPatient={setPatient}
        patient={patient}
      />
      <div>
      <label className="text-lg text-gray-400">Fecha</label>
      <div className="pt-2 grid place-items-center">
        <input
          onChange={(e) => {setDate(e.target.value)}}
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="date"
          type="date"
          value={date}
        ></input>
      </div>
    </div>  
    <div>
        <label className="text-lg text-gray-400">Motivo</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => {handleChange(e.target.value, e.target.name)}}
            placeholder="Control médico"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="reason"
            type="text"
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Subjetivo</label>
        <div className=" pt-2 grid place-items-center">
          <textarea
            name="subjective"
            id=""
            cols="30"
            rows="3"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            placeholder="Lorem Impsum Dolor Ammet Sit"
            onChange={(e) => {handleChange(e.target.value, "subjective")}}
          ></textarea>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Objetivo</label>
        <div className=" pt-2 grid place-items-center">
          <textarea
            name="objective"
            id=""
            cols="30"
            rows="3"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            placeholder="Lorem Impsum Dolor Ammet Sit"
            onChange={(e) => {handleChange(e.target.value, e.target.name)}}
          ></textarea>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Nuevos Datos</label>
        <div className=" pt-2 grid place-items-center">
          <textarea
            name="new_data"
            id=""
            cols="30"
            rows="3"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            placeholder="Lorem Impsum Dolor Ammet Sit"
            onChange={(e) => {handleChange(e.target.value, e.target.name)}}
          ></textarea>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Diagnóstico</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => {handleChange(e.target.value, e.target.name)}}
            placeholder="Osteoporosis"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="diagnosis"
            type="text"
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Tratamiento</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => {handleChange(e.target.value, e.target.name)}}
            placeholder="Terapia neural, Mesoterapia, ..."
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="treatment"
            type="text"
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Comentarios</label>
        <div className=" pt-2 grid place-items-center">
          <textarea
            name="comments"
            id=""
            cols="30"
            rows="3"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            placeholder="Plan educacional..."
            onChange={(e) => {handleChange(e.target.value, e.target.name)}}
          ></textarea>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Images</label>
        <div className=" pt-2 flex justify-center gap-1">
          <div className="w-14 h-14 bg-gray-400 cursor-pointer text-4xl text-white grid place-items-center">
            <Image
              src="https://storage.googleapis.com/medint/public/default-150x150.png"
              alt="Image 1"
              width={150}
              height={150}  
            />
          </div>
          <div className="w-14 h-14 bg-gray-400 cursor-pointer text-4xl text-white grid place-items-center">
            <Image
              src="https://storage.googleapis.com/medint/public/default-150x150.png"
              alt="Image 2"
              width={150}
              height={150}
            />
          </div>
          <div className="w-14 h-14 bg-gray-400 cursor-pointer text-4xl text-white grid place-items-center">
            <Image
              src="https://storage.googleapis.com/medint/public/default-150x150.png"
              alt="Image 3"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="pt-4 grid place-items-center">
        <button
          onClick={() => {
            sendData();
          }}
          type="button"
          className="cursor-pointer w-72 text-2xl bg-sky-800 h-12 rounded-full text-white text-center p-2"
        >
          Guardar Historia
        </button>
      </div>
    </form>
  );
};

export default CreateHistory;
