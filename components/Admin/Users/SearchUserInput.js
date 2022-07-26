import { useState, useEffect } from "react";
import axios from "axios"

const SearchUserInput = (props) => {
  const [user, setUser] = useState("");
  const [data, setData] = useState(null);

    const getData = async () => {
      const response = await axios.get(
        '/api/users/search'
        )
        setData(response.data)
      }

  function setResult(result) {
    setUser(result);
  }
  function valueChange() {
    setUser(event.target.value);
    getData();
  }
  return (
    <div>
      <label className="text-lg text-gray-400">{props.label}</label>
      <div className="pt-2 grid place-items-center">
        <input
          name="user"
          onChange={() => {
            valueChange();
          }}
          placeholder={props.placeholder}
          className="mx-auto w-72 py-1 px-2 border rounded-t-md border-gray-400"
          type={props.type}
          value={user}
        ></input>
        <div className="w-72 max-h-28 overflow-auto px-2 py-1 mx-auto border rounded-b-md border-gray-400 border-t-white">
          <p
            className="cursor-pointer text-gray-800 hover:text-sky-800"
            onClick={() => {
              setResult("Resultado 1");
            }}
          >
            Resultado 1
          </p>
          <p
            className="cursor-pointer text-gray-800 hover:text-sky-800"
            onClick={() => {
              setResult("Resultado 2");
            }}
          >
            Resultado 2
          </p>
          <p className="cursor-pointer text-gray-800 hover:text-sky-800">
            Resultado 3
          </p>
          <p className="cursor-pointer text-gray-800 hover:text-sky-800">
            Resultado 4
          </p>
          <p className="cursor-pointer text-gray-800 hover:text-sky-800">
            Resultado 5
          </p>
          <p className="cursor-pointer text-gray-800 hover:text-sky-800">
            Resultado 6
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchUserInput;
