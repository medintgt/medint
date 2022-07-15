import Input from "@components/Forms/Elements/Input";
import Select from "@components/Forms/Elements/Select";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SelectTime } from "./SelectTime";
import PrimaryButton from "@components/Buttons/PrimaryButton";

const options = [
  { value: "0", text: "Erika Perez" },
  { value: "1", text: "Vilma Arriaga" },
  { value: "2", text: "Gladys Perez" },
  { value: "3", text: "Eva Valdez" },
];
const times = [
    {id: "0", time:"14:00 - 14:30"},
    {id: "1", time:"14:30 - 15:00"},
    {id: "2", time:"15:00 - 16:30"},
    {id: "3", time:"16:30 - 17:00"},
    {id: "4", time:"17:00 - 17:30"},
    {id: "5", time:"17:30 - 18:00"}
]
function sayHi(id) {
    let i = 0;
    while (i < 6) {
        document.querySelector(`#select-time-${i}`).classList.remove("bg-sky-800")
        document.querySelector(`#select-time-${i}`).classList.remove("text-white") 
        i++
    }

    document.querySelector(`#select-time-${id}`).classList.add("bg-sky-800")
    document.querySelector(`#select-time-${id}`).classList.add("text-white")
}
export const CreateAppointmentForm = () => {
  return (
    <form className="w-96">
      <Input placeholder="Jhon Doe" label="Patient" />
      <Select label="Professional" options={options} />
      <div className="flex flex-col justify-center">
        <Calendar className="mt-4 rounded-md" value={new Date()} />
        {times.map((time) => 
        <SelectTime id={`select-time-${time.id}`} key={time.id} time={time.time} onclick={() => sayHi(time.id)} />
        )}
          </div>
          <div className=" pt-2 grid place-items-center">
        <PrimaryButton text="Save" type="button" />
      </div>
    </form>
  );
};
