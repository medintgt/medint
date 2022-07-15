import Entry from "../Show/Elements/Entry";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SelectTime } from "./SelectTime";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useState, useEffect } from "react";


export const ApointmentCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/appointments/448")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  if (data != null) {
    return (
      <section className="my-4 max-w-md  md:w-96 h-auto p-3 ">
        <Entry name="Patient" value={`${data.titulo} (${data.telefono})`} />
        <Entry name="Physician or Therapist" value={data.medico} />
        <div className="flex flex-col justify-center">
          <Calendar className="mt-4 rounded-md" value={new Date(2022, 4, 12)} />
          <SelectTime time="12:00 - 12:30" />
        </div>
        <div className="pt-4 grid place-items-center">
          <SecondaryButton type="submit" text="Edit" />
        </div>
      </section>
    );
  } else {
    <section className="my-4 max-w-md  md:w-96 h-auto p-3 ">
      Loading data...
    </section>
  }
};
