import Input from "@components/Admin/Forms/Elements/Input";
import Select from "@components/Admin/Forms/Elements/Select";
import "react-calendar/dist/Calendar.css";
import PrimaryButton from "@components/Admin/Buttons/PrimaryButton";
import { useState } from "react";

const options = [
  { value: "0", text: "Cash" },
  { value: "1", text: "Credit/Debit Card" },
  { value: "2", text: "Cheque" },
  { value: "3", text: "Bank transfer" },
];
export const CreateSale = () => {
  const [email, setEmail] = useState("");
  const [taxId, setTaxId] = useState();
  const [taxName, setTaxName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [address, setAddress] = useState("");
  return (
    <form className="w-96">
      <div>
      <label className="text-lg text-gray-400">Correo electrónico</label>
      <div className="pt-2 grid place-items-center">
        <input
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder="Correo electrónico"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="email"
          type="text"
          value={email}
        ></input>
      </div>
    </div>

    <div>
      <label className="text-lg text-gray-400">NIT</label>
      <div className="pt-2 grid place-items-center">
        <input
          onChange={(e) => {setTaxId(e.target.value)}}
          placeholder="NIT"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="taxId"
          type="text"
          value={taxId}
        ></input>
      </div>
    </div>

    <div>
        <label className="text-lg text-gray-400">Nombre/Razón Social</label>
        <div className="pt-2 grid place-items-center">
          <input
            placeholder="Debe ingresar NIT o CF"
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            type="text"
            value={taxName}
            disabled
          ></input>
        </div>
      </div>
      <div>
        <label className="text-lg text-gray-400">Fecha</label>
        <div className="pt-2 grid place-items-center">
          <input
            onChange={(e) => {setDate(e.target.value)}}
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            type="date"
            value={date}
          ></input>
        </div>
      </div>
      
      <div>
      <label className="text-lg text-gray-400">Dirección</label>
      <div className="pt-2 grid place-items-center">
        <input
          onChange={(e) => {setAddress(e.target.value)}}
          placeholder="Dirección"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name="taxId"
          type="text"
          value={address}
        ></input>
      </div>
    </div>
    
      <div className="my-4">
        <div className="relative my-4">
          <h2 className="text-xl">Detalle</h2>
          <div className="grid justify-end my-4">
          <span className="text-lg text-gray-400">Añadir Item</span>
          <span className="text-gray-400">Subtotal - Q0</span>
          </div>
        </div>
      </div>
      <div className="my-4">
          <h2 className="text-xl">Payment</h2>
          <Select label="Payment Method" options={options} />
          <Input label="Discount code" type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
          <div className="grid justify-end my-4">
          <span className="text-gray-400">Discount - -Q0</span>
          <span className="text-gray-400">Tax - Q0</span>
          <span className="text-gray-400">Total - Q0</span>
          </div>
        </div>
        <div>
            <p className="text-red-600">This sale needs confirmation, because you selected Bank transfer or Cheque.</p>
        </div>
      <div className=" pt-2 grid place-items-center">
        <PrimaryButton text="Save" type="button" />
      </div>
    </form>
  );
};
