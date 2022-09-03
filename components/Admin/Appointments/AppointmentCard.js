import Entry from "../Show/Elements/Entry";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SelectTime } from "./SelectTime";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export const ApointmentCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `/api/appointments/appointment/${props.id}`
      );
      setData(response.data);
    };
    getData();
  }, [props.id]);
  const deleteAppointment = async () => {
    const response = await axios.get(`/api/appointments/delete/${props.id}`
    );
    const responseData = response.data;
    if (responseData.acknowledged == true) {
      window.location.href = `/app/appointments/`;
    } else {
      console.log("Hubo un error");
    }
  }
  if (data != null) {
    const displayData = (
      <section className="my-4 max-w-md  md:w-96 h-auto p-3 ">
        <Link href={`/app/patients/${data.patient.id}`}>
        <a className="cursor-pointer">
        <Entry
          name="Paciente"
          value={`${data.patient.name} (${data.patient.phone})`}
        />
        </a>
        </Link>
        <Entry name="Profesional" value={data.professional.name} />
        <div className="flex flex-col justify-center">
          <Calendar className="mt-4 rounded-md" value={new Date(`${data.date}`)} />
          <SelectTime time={data.time} />
        </div>
        <div className="pt-4 grid place-items-center">
          <SecondaryButton type="submit" text="Editar" />
          </div>
        <div className="pt-4 grid place-items-center">
          <button type="button" onClick={deleteAppointment} className="cursor-pointer w-72 text-2xl h-12 rounded-full text-red-700 text-center p-2 border-2 border-red-700">Borrar</button>
        </div>
      </section>
    );
    return displayData;
  } else {
    return (
      <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
        <h2 className="text-xl text-center">Los datos estan cargando...</h2>
      </section>
      )
    }
};
