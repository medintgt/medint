import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const ShowAppointments = () => {
  let [date, onChange] = useState(new Date());
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.post("/api/appointments", {date: date.toISOString().slice(0, 10)});
      setData(response.data);
    };
    getData();
  }, [date]);
  if (data != null) {
    const dataList = data.map((item) => (
      <li key={item._id} className="text-lg flex justify-between px-4 py-1">
        <Link href={`/app/appointments/${item._id}`}>
          <a>
            <span className="cursor-pointer text-sky-800">{item.time}</span>
          </a>
        </Link>
        <Link href={`/app/patients/${item.patient.id}`}>
          <a>
        <span className="cursor-pointer text-sky-800">{item.patient.name}</span>
        </a>
        </Link>
      </li>
    ));
    return (
      <section className="text-lg my-4 max-w-md md:w-96 w-80 bg-white shadow-2xl p-3 rounded-md">
        <h2 className="text-xl">Citas</h2>
         <Calendar
          className="mt-4 rounded-md"
          onChange={onChange}
          value={date}
        />
        { data.length > 0 ?  dataList : "Aún no se han agendado citas para este día." }  
      </section>
    );
  } else {
    return (
      <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
        <h2 className="text-xl">Citas - Hoy</h2>
        <h2 className="text-xl text-center">Los datos estan cargando...</h2>
      </section>
    );
  }
};
