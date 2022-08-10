import { useState } from "react";
import axios from "axios";
import Link from "next/Link"

const SearchPatient = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null)

  async function getData(event) {
    const response = await axios.post("/api/patients/search", {
      name: event.target.value,
    });
    setData(response.data);
  }

  const valueChange = (event) => {
    setSearch(event.target.value);
    if (search.length >= 2) {
      getData(event);
    }
  };
  if (data == null || search == "") {
    return (
      <div className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
        <label className="text-lg text-gray-400">Paciente</label>
        <div className="pt-2 grid place-items-center">
          <input
            name="search"
            onChange={(e) => {valueChange(e)}}
            placeholder="Jhon Doe"
            className="capitalize mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            type="text"
            value={search}
          ></input>
        </div>
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
        <label className="text-lg text-gray-400">Paciente</label>
        <div className="pt-2 grid place-items-center">
          <input
            name="search"
            onChange={(e) => {valueChange(e)}}
            placeholder="Jhon Doe"
            className="mx-auto capitalize w-72 py-1 px-2 border rounded-t-md border-gray-400"
            type="text"
            value={search}
          ></input>
          <div className="w-72 max-h-28 overflow-auto px-2 py-1 mx-auto border rounded-b-md border-gray-400 border-t-white">
            <p className="text-gray-800">Sin coincidencias.</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
        <label className="text-lg text-gray-400">Paciente</label>
        <div className="pt-2 grid place-items-center">
          <input
            name="search"
            onChange={(e) => {valueChange(e)}}
            placeholder="Jhon Doe"
            className="capitalize mx-auto w-72 py-1 px-2 border rounded-t-md border-gray-400"
            type="text"
            value={search}
          ></input>
          <div className="w-72 max-h-28 overflow-auto px-2 py-1 mx-auto border rounded-b-md border-gray-400 border-t-white">
            {data.map((item) => (
              <div key={item._id}>
              <Link href={`/app/patients/${item._id}`}>
              <a
                className="cursor-pointer text-gray-800 hover:text-sky-800"
              >
                {item.first_name + " " + item.middle_name + " " + item.last_name}
              </a>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default SearchPatient;
