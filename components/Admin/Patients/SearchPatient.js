import React from "react";
import Link from "next/Link"

const SearchPatient = () => {
  return [
    <section key="0" className="my-4 max-w-md  md:w-96 h-auto bg-white shadow-2xl p-3 rounded-md">
      <h2 className="text-xl">Buscar paciente</h2>
      <div className=" pt-2 grid place-items-center">
        <input
          placeholder="Buscar por nombre o DPI..."
          className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
          type="text"
        ></input>
      </div>
    </section>,
    <section key="1" className="hidden my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
    <h2 className="text-xl">Resultados</h2>
    <ul>
      {/* {data.map((patient) => (
        <li key={patient._id} className="text-lg flex justify-between px-4 py-1">
          <Link href={`/app/patients/${patient._id}`}>
          <a>
          <span className="cursor-pointer text-sky-800">{patient.dpi}</span>
          </a>
          </Link>
          <span className="cursor-pointer">{patient.first_name + " " + patient.last_name.split(" ")[0]}</span>
        </li>
      ))} */}
    </ul>
  </section>
  ];
};

export default SearchPatient;
