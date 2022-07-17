import Input from "@components/Admin/Forms/Elements/Input";
import Select from "@components/Admin/Forms/Elements/Select";
import "react-calendar/dist/Calendar.css";
import PrimaryButton from "@components/Admin/Buttons/PrimaryButton";

const options = [
  { value: "0", text: "Cash" },
  { value: "1", text: "Credit/Debit Card" },
  { value: "2", text: "Cheque" },
  { value: "3", text: "Bank transfer" },
];
export const CreateSale = () => {
  return (
    <form className="w-96">
      <Input
        placeholder="Jhon Doe (12323454)"
        label="Patient (If applicable)"
        type="text"
      />
      <Input placeholder="112480926" label="NIT" type="number" />
      <div>
        <label className="text-lg text-gray-400">Billing Name</label>
        <div className="pt-2 grid place-items-center">
          <input
            placeholder="It will complete automatically."
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            type="text"
            value=""
            disabled
          ></input>
        </div>
      </div>
      <Input type="date" label="Date" />
      <Input type="text" label="Address" placeholder="Address" />
      <div className="my-4">
        <div className="relative my-4">
          <h2 className="text-xl">Services</h2>
          <div className="grid justify-end my-4">
          <span className="text-lg text-gray-400">Add Item</span>
          <span className="text-gray-400">SubTotal - Q0</span>
          </div>
        </div>
        <div className="relative my-4">
          <h2 className="text-xl">Products</h2>
          <div className="grid justify-end my-4">
          <span className="text-lg text-gray-400">Add Item</span>
          <span className="text-gray-400">SubTotal - Q0</span>
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
