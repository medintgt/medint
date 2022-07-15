import React from "react";
import Link from "next/link";

const ShowPatients = (props) => {
  const patientsArray = [
    { name: "Fernando Zampura", id: "123123123" },
    { name: "Carlos Palacio", id: "234234234" },
    { name: "Samantha Polilla", id: "345345345" },
    { name: "Ivan Dunkerke", id: "456456456" },
    { name: "Frederich Nergoman", id: "567567567" },
    { name: "Sautin Manhatan", id: "678678678" },
  ];
  return (
    <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
      <h2 className="text-xl">Recent created</h2>
      <ul>
        {patientsArray.map((patient) => (
          <li key={patient.id} className="text-lg flex justify-between px-4 py-1">
            <Link href={`/patients/${patient.id}`}>
            <a>
            <span className="cursor-pointer text-sky-800">{patient.id}</span>
            </a>
            </Link>
            <span className="cursor-pointer">{patient.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowPatients;
