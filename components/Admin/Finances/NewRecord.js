import React from "react";
import SearchAccount from "@components/Admin/Finances/SearchAccount";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const NewRecordForm = () => {
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [account, setAccount] = useState({
    name: "",
    id: "",
  });
  const [account2, setAccount2] = useState({
    name: "",
    id: "",
  });
  const [data, setData] = useState({
    account: account,
    account2: account2,
    date: date,
    amount: null,
    description: "",
    reference: "",
    proof: "",
    user_create: session.user.email,
  });
  const sendData = async () => {
    const response = await axios.post(`/api/finances/record/new/`, data);
    let responseData = response.data;
    if (responseData.acknowledged == true) {
      window.location.href = `/app/finances/ledger/record/${responseData.insertedId}`;
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
    const handleAccountChange = () => {
      let updatedData = {
        account: account,
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handleAccountChange();
  }, [account]);
  useEffect(() => {
    const handleAccount2Change = () => {
      let updatedData = {
        account2: account2,
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handleAccount2Change();
  }, [account2]);
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
      <SearchAccount
        search={search}
        setSearch={setSearch}
        setAccount={setAccount}
        text={"Cuenta Debe"}
        account={account}
      />
      <SearchAccount
        search={search2}
        setSearch={setSearch2}
        setAccount={setAccount2}
        text={"Cuenta Haber"}
        account={account2}
      />
      <div>
        <label className="text-lg text-gray-400">Fecha</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="date"
            type="date"
            value={date}
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Cantidad</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => {
              handleChange(parseInt(e.target.value), e.target.name);
            }}
            placeholder="995"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="amount"
            type="number"
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Descripción</label>
        <div className=" pt-2 grid place-items-center">
          <textarea
            name="description"
            id=""
            cols="30"
            rows="3"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            placeholder="Lorem Impsum Dolor Ammet Sit"
            onChange={(e) => {
              handleChange(e.target.value, e.target.name);
            }}
          ></textarea>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">No. Referencia</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => {
              handleChange(e.target.value, e.target.name);
            }}
            placeholder="231589"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="reference"
            type="text"
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Comprobante</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => {
              handleChange(e.target.value, e.target.name);
            }}
            placeholder="231589"
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4 
            file:cursor-pointer cursor-pointer
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-sky-200 file:text-sky-800
            hover:file:bg-sky-800 hover:file:text-white" 
            name="proof"
            type="file"
          ></input>
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
          Crear Registro
        </button>
        <p onClick={()=>{console.log(data)}}>Mostrar datos en consola</p>
      </div>
    </form>
  );
};

export default NewRecordForm;
