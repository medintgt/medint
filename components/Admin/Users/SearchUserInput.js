import { useState, useEffect } from "react";
import axios from "axios";

const SearchUserInput = ({user, setUser, handleChange}) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  async function getData(event) {
    const response = await axios.post("/api/users/search", {
      email: event.target.value,
    });
    setData(response.data);
  }

  function setResult(result) {
    setUser(result);
  }
  const valueChange = (event) => {
    setUser(event.target.value);
    if (user.length >= 2) {
      getData(event);
    }
  };

  if (data == null || user == "" || search == user) {
    return (
      <div>
        <label className="text-lg text-gray-400">Usuario</label>
        <div className="pt-2 grid place-items-center">
          <input
            name="user"
            onChange={(e) => {valueChange(e), handleChange(e, "email")}}
            placeholder="example@example.com"
            className="lowercase mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            type="text"
            value={user}
          ></input>
        </div>
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div>
        <label className="text-lg text-gray-400">Usuario</label>
        <div className="pt-2 grid place-items-center">
          <input
            name="user"
            onChange={(e) => {valueChange(e), handleChange(e, "email")}}
            placeholder="example@example.com"
            className="lowercase mx-auto w-72 py-1 px-2 border rounded-t-md border-gray-400"
            type="text"
            value={user}
          ></input>
          <div className="w-72 max-h-28 overflow-auto px-2 py-1 mx-auto border rounded-b-md border-gray-400 border-t-white">
            <p className="text-gray-800">Sin coincidencias.</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <label className="text-lg text-gray-400">Usuario</label>
        <div className="pt-2 grid place-items-center">
          <input
            name="user"
            onChange={(e) => {valueChange(e), handleChange(e, "email")}}
            placeholder="example@example.com"
            className="lowercase mx-auto w-72 py-1 px-2 border rounded-t-md border-gray-400"
            type="text"
            value={user}
          ></input>
          <div className="w-72 max-h-28 overflow-auto px-2 py-1 mx-auto border rounded-b-md border-gray-400 border-t-white">
            {data.map((item) => (
              <p
                key={item._id}
                className="cursor-pointer text-gray-800 hover:text-sky-800"
                onClick={() => {
                  setResult(item.email), setSearch(item.email)
                }}
              >
                {item.email}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default SearchUserInput;
