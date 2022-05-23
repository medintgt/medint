import React from "react";

const Input = (props) => {
  return (
    <div>
      <label className="text-lg text-gray-400">{props.label}</label>
      <div className="pt-2 grid place-items-center">
        <input
          placeholder={props.placeholder}
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          type={props.type}
          value={props.value}
        ></input>
      </div>
    </div>
  );
};

export default Input