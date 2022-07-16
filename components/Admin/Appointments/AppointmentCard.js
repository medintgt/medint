import Entry from "../Show/Elements/Entry";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SelectTime } from "./SelectTime";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useState, useEffect } from "react";
import axios from "axios";

export const ApointmentCard = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `/api/patients/patient/${props.id}`
      );
      setData(response.data);
    };
    getData();
  }, [props.id]);
  if (data != null) {
    const displayData = (
      <section className="my-4 max-w-md  md:w-96 h-auto p-3 ">
        <Entry
          name="Patient"
          value={`${data.first_name} (${data.phone_number})`}
        />
        <Entry name="Physician or Therapist" value={data.middle_name} />
        <div className="flex flex-col justify-center">
          <Calendar className="mt-4 rounded-md" value={new Date(2022, 4, 12)} />
          <SelectTime time="12:00 - 12:30" />
        </div>
        <div className="pt-4 grid place-items-center">
          <SecondaryButton type="submit" text="Edit" />
        </div>
      </section>
    );
    return displayData;
  } else {
    return (
      <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
        <h2 className="text-xl text-center">Data is being loaded...</h2>
      </section>
      )
    }
};
