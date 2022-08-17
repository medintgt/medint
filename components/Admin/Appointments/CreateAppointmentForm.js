import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SelectTime } from "./SelectTime";
import PrimaryButton from "@components/Admin/Buttons/PrimaryButton";
import SearchPatientInput from "@components/Admin/Patients/SearchPatientInput";
import { useState, useEffect } from "react";
import axios from "axios";

const times = [
  { id: 0, time: "14:00 - 14:30" },
  { id: 1, time: "14:30 - 15:00" },
  { id: 2, time: "15:00 - 16:30" },
  { id: 3, time: "16:30 - 17:00" },
  { id: 4, time: "17:00 - 17:30" },
  { id: 5, time: "17:30 - 18:00" },
];
function changeSelected(id) {
  let i = 0;
  while (i < 6) {
    document.querySelector(`#select-time-${i}`).classList.remove("bg-sky-800");
    document.querySelector(`#select-time-${i}`).classList.remove("text-white");
    i++;
  }

  document.querySelector(`#select-time-${id}`).classList.add("bg-sky-800");
  document.querySelector(`#select-time-${id}`).classList.add("text-white");
}
export const CreateAppointmentForm = () => {
  const [date, onChange] = useState(new Date());
  const [search, setSearch] = useState("");
  const [professionals, setProfessionals] = useState([]);
  const [data, setData] = useState({
    patient: {
      id: "",
      name: "",
      phone: "",
    },
    professional: {
      id: "",
      name: "",
    },
    date: "",
    time: "",
  });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/professionals/`);
      setProfessionals(response.data);
    };
    getData();
  }, []);

  const handleChange = (e, type) => {
    let updatedData = {
      [type]: e.target.value,
    };
    setData((data) => ({
      ...data,
      ...updatedData,
    }));
  };
  const handleChangeWithValue = (value, type) => {
    let updatedData = {
      [type]: value,
    };
    setData((data) => ({
      ...data,
      ...updatedData,
    }));
  };
  const sendData = async () => {
    const response = await axios.post(`/api/appointments/new/`, data);
    let responseData = response.data;
    if (responseData.acknowledged == true) {
      window.location.href = `/app/appointments/${responseData.insertedId}`;
    } else {
      console.log("Hubo un error");
    }
  };
  return (
    <form className="w-96">
      <SearchPatientInput
        handleChange={handleChange}
        search={search}
        setSearch={setSearch}
      />
      <div>
        <label className="text-lg text-gray-400">Profesionales</label>
        <div className=" pt-2 grid place-items-center">
          <select
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="professionals"
          >
            {professionals.map((value) => (
              <option key={value._id} value={value._id}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
      </div>
        <label className="text-lg text-gray-400">Fecha y hora</label>
      <div className="flex flex-col justify-center items-center">
        <Calendar
          className="mt-4 rounded-md"
          onChange={onChange}
          onClick={() => {handleChangeWithValue(date), "date"}}
          value={date}
        />
        {times.map((time) => (
          <SelectTime
            id={`select-time-${time.id}`}
            key={time.id}
            time={time.time}
            onclick={() => {
              changeSelected(time.id), handleChangeWithValue(parseInt(time.id), "time");
            }}
            minDate={new Date()}
          />
        ))}
      </div>
      <div className=" pt-2 grid place-items-center">
        <PrimaryButton
          onClick={() => {
            sendData();
          }}
          text="Agendar cita"
          type="button"
        />
      </div>
      <p onClick={() => {console.log(data)}}>Ver datos</p>
    </form>
  );
};
