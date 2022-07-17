import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

export const ShowAppointments = () => {
  const [data, setData] = useState(null);
  useEffect (()=> {
    const getData = async () => {
      const response = await axios.get(
        '/api/appointments'
        )
        setData(response.data)
      }
      getData();
    }, [])
    if (data != null) {
      const dataList =
        data.map((item) => (
          <li key={item._id} className="text-lg flex justify-between px-4 py-1">
              <Link href={`/app/appointments/${item._id}`}>
                <a>
                  <span className="cursor-pointer text-sky-800">{item.time}</span>
                </a>
              </Link>
              <span className="">{item.patient.name}</span>
            </li>
          ));
    console.log(data)
      return (
    <section className="my-4 max-w-md md:w-96 w-80 bg-white shadow-2xl p-3 rounded-md">
      <h2 className="text-xl">Appointments - Today</h2>
      {dataList}
    </section>
  );
} else {
  return (
    <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
      <h2 className="text-xl">Appointments - Today</h2>
      <h2 className="text-xl text-center">Data is being loaded...</h2>
    </section>
    )
  }
}