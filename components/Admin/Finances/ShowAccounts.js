import React from "react";
import Link from "next/link"
import { useState, useEffect } from "react";
import axios from "axios";

const ShowAccounts = (props) => {
  const [data, setData] = useState(null);

  useEffect (()=> {
    const getData = async () => {
      const response = await axios.get(
        '/api/accounts'
        )
        setData(response.data)
      }
      getData();
    }, [])
if (data != null) {
  
  return (
    <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
      <h2 className="text-xl">Creados Recientemente</h2>
      <ul>
        {data.map((patient) => (
          <li key={patient._id} className="text-lg flex justify-between px-4 py-1">
            <Link href={`/app/finances/accounts/${patient._id}`}>
            <a>
            <span className="cursor-pointer text-sky-800">{patient.code}</span>
            <span> - </span>
            <span className="cursor-pointer">{patient.name}</span>
            </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
} else {
  
  return (
    <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
      <h2 className="text-xl">Recent created</h2>
      <h2 className="text-center text-xl"> Data is being loaded...</h2>
    </section>
  );
}
};

export default ShowAccounts;
