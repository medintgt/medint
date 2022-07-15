import React from "react";

const Textarea = (props) => {
  return (
    <div>
      <label className="text-lg text-gray-400">{props.label}</label>
      <div className=" pt-2 grid place-items-center">
        <textarea
          name=""
          id=""
          cols="30"
          rows="3"
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          placeholder={props.placeholder}
        ></textarea>
      </div>
    </div>
  );
};

export default Textarea;
