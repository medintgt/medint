import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SelectTime } from "./SelectTime";
import SearchPatientInput from "@components/Admin/Appointments/SearchPatientInput";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react"

const times = [
  { id: 0, time: "6:00 - 7:00" },
  { id: 1, time: "7:00 - 8:00" },
  { id: 2, time: "8:00 - 9:00" },
  { id: 3, time: "9:00 - 10:00" },
  { id: 4, time: "10:00 - 11:00" },
  { id: 5, time: "11:00 - 12:00" },
  { id: 6, time: "12:00 - 13:00" },
  { id: 7, time: "13:00 - 14:00" },
  { id: 8, time: "14:00 - 15:00" },
  { id: 9, time: "15:00 - 16:00" },
  { id: 10, time: "16:00 - 17:00" },
  { id: 11, time: "17:00 - 18:00" },
  { id: 12, time: "18:00 - 19:00" }
];
/**
 * It removes the class "bg-sky-800" and "text-white" from all the elements with the id "select-time-0"
 * to "select-time-5" and then adds the class "bg-sky-800" and "text-white" to the element with the id
 * "select-time-id" where id is the parameter passed to the function.
 * @param id - the id of the element you want to change
 */
function changeSelected(id) {
  let i = 0;
  while (i < 13) {
    document.querySelector(`#select-time-${i}`).classList.remove("bg-sky-800");
    document.querySelector(`#select-time-${i}`).classList.remove("text-white");
    i++;
  }

  document.querySelector(`#select-time-${id}`).classList.add("bg-sky-800");
  document.querySelector(`#select-time-${id}`).classList.add("text-white");
}

export const CreateAppointmentForm = () => {
  const { data: session } = useSession()
  let [date, onChange] = useState(new Date());
  const [search, setSearch] = useState("");
  const [patient, setPatient] = useState({
    name: "",
    id: "",
    phone: "",
  });
  const [professional, setProfessional] = useState({
    name: "",
    id: "",
  });
  const [professionals, setProfessionals] = useState([]);
  const [data, setData] = useState({
    patient: patient,
    professional: professional,
    date: date.toISOString().slice(0, 10),
    time: "",
    time_id: null,
    user_create: session.user.email,
  });

  /* A hook that is called when the component is mounted. It is used to fetch data from the server. */
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/professionals/`);
      setProfessionals(response.data);
    };
    getData();
  }, []);

  /**
   * It takes a value and a type, and then updates the data object with the new value.
   * @param value - The value of the input field
   * @param type - the name of the field you want to update
   */
  const handleChangeWithValue = (value, type) => {
    let updatedData = {
      [type]: value,
    };
    setData((data) => ({
      ...data,
      ...updatedData,
    }));
  };

  /* A hook that is called when the date changes. It updates the data object with the new date. */
  useEffect(() => {
    const handleDateChange = () => {
      let updatedData = {
        date: date.toISOString().slice(0, 10),
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handleDateChange();
  }, [date]);
  useEffect(() => {
    const handlePatientChange = () => {
      let updatedData = {
        patient: patient,
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handlePatientChange();
  }, [patient]);
  useEffect(() => {
    const handleProfessionalChange = () => {
      let updatedData = {
        professional: professional,
      };
      setData((data) => ({
        ...data,
        ...updatedData,
      }));
    };
    handleProfessionalChange();
  }, [professional]);
  /**
   * It sends a POST request to the server with the data from the form, and if the server responds with
   * a success message, it redirects the user to the page of the appointment that was just created.
   * </code>
   */
  const sendData = async () => {
    const response = await axios.post(`/api/appointments/new/`, data);
    let responseData = response.data;
    if (responseData.acknowledged == true) {
      window.location.href = `/app/appointments/${responseData.insertedId}`;
    } else {
      console.log("Hubo un error");
    }
  };
  const getProfessionalData = async () => {
    var name = await document.querySelector("#professionals_list").value;
    var index = await document.querySelector("#professionals_list")
      .selectedIndex;
    var id = await document.querySelector("#professionals_list").options[index]
      .id;
    await setProfessional({
      name: name,
      id: id,
    });
  };
  return (
    <form className="w-96" autoComplete="off">
      <SearchPatientInput
        search={search}
        setSearch={setSearch}
        setPatient={setPatient}
      />
      <div>
        <label className="text-lg text-gray-400">Profesionales</label>
        <div className=" pt-2 grid place-items-center">
          <select
            className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"
            name="professionals"
            id="professionals_list"
            onChange={() => {
              getProfessionalData();
            }}
          >
            <option selected disabled>
              Seleccionar
            </option>
            {professionals.map((value) => (
              <option key={value._id} id={value._id} value={value.name}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <label className="text-lg text-gray-400">Fecha y hora</label>
      <div className="flex flex-col justify-between items-center w-96">
        <Calendar
          className="mt-4 rounded-md"
          onChange={onChange}
          value={date}
          minDate={new Date()}
        />
        <div className="grid grid-cols-2 gap-1 justify-between w-full">
        {times.map((time) => (
          
          <SelectTime
            id={`select-time-${time.id}`}
            key={`select-time-${time.id}`}
            time={time.time}
            onclick={() => {
              changeSelected(time.id), handleChangeWithValue(time.time, "time"), handleChangeWithValue(time.id, "time_id");
            }}
          />
        ))}
        </div>
      </div>
      <div className=" pt-2 grid place-items-center">
        <button
          type="button"
          className="cursor-pointer w-72 text-2xl bg-sky-800 h-12 rounded-full text-white text-center p-2"
          onClick={sendData}
        >
          Crear Cita
        </button>
      </div>
    </form>
  );
};
