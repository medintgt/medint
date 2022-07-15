import React from "react";
import Input from "@components/Forms/Elements/Input";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PrimaryButton from "@components/Buttons/PrimaryButton";

const CreateEntryForm = () => {
  const options = [
    { value: "0", text: "Blood Pressure" },
    { value: "1", text: "Height" },
    { value: "2", text: "Weight" },
    { value: "3", text: "Heart Rate" },
    { value: "4", text: "Respiratory Rate" },
    { value: "5", text: "Temperature" },
    { value: "6", text: "Pulse" },
    { value: "7", text: "Oxigen Saturation" },
  ];

  const [state, setState] = React.useState("0");

  const select = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.text}
    </option>
  ));
  const selectWithSetValue = (
    <select
      id="data-options"
      className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
      name=""
      onChange={() => setState(document.querySelector("#data-options").value)}
    >
      {select}
    </select>
  );
  return (
    <form>
      <Input placeholder="Jhon Doe" label="Patient" />
      <div>
        <label className="text-lg text-gray-400">Data</label>
      </div>
      <div className=" pt-2 grid place-items-center">{selectWithSetValue}</div>
      <DataType state={state}></DataType>
      <Calendar className="my-4" />
      <div className=" pt-2 grid place-items-center">
        <PrimaryButton text="Save" type="button" />
      </div>
    </form>
  );
};

const DataType = ({ state }) => {
  if (state == "0") {
    return [
      <Input key='0' placeholder="80" label="Diastolic" type="number" />,
      <Input key='1' placeholder="120" label="Systolic" type="number" />,
    ];
  } else if (state == "1") {
    return <Input placeholder="170" label="Height" type="number" />;
  } else if (state == "2") {
    return <Input placeholder="120" label="Weight" type="number" />;
  } else if (state == "3") {
    return <Input placeholder="80" label="Heart Rate" type="number" />;
  } else if (state == "4") {
    return <Input placeholder="18" label="Respiratory Rate" type="number" />;
  } else if (state == "5") {
    return <Input placeholder="37" label="Temperature" type="number" />;
  } else if (state == "6") {
    return <Input placeholder="80" label="Pulse" type="number" />;
  } else if (state == "7") {
    return <Input placeholder="98" label="Oxigen Saturation" type="number" />;
  }
};
export default CreateEntryForm;
