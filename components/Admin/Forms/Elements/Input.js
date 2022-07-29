import {useState} from 'react';

const Input = (props) => {
  const [value, setValue] = useState(props.value)
  return (
    <div>
      <label className="text-lg text-gray-400">{props.label}</label>
      <div className="pt-2 grid place-items-center">
        <input
          onChange={(e) => {setValue(e.target.value)}}
          placeholder={props.placeholder}
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          name={props.name}
          type={props.type}
          value={value}
        ></input>
      </div>
    </div>
  );
};

export default Input