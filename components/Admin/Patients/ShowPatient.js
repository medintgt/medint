import Entry from "../Show/Elements/Entry";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useState, useEffect } from "react";
import axios from "axios";

const ShowPatient = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/patients/patient/${props.id}`);
      setData(response.data);
    };
    getData();
  }, [props.id]);
  const gender = ["Masculino", "Femenino"];
  if (data != null) {
    return (
      <div className="my-4 max-w-md  md:w-96 h-auto p-3">
        <Entry name="User" value={data.user_id} />
        <Entry name="Name" value={data.first_name} />
        <Entry name="Middle Name" value={data.middle_name} />
        <Entry name="Last Name" value={data.last_name} />
        <Entry name="DPI/CUI" value={data.dpi} />
        <Entry name="Birth date" value={data.born_date} />
        <Entry name="Phone number" value={data.phone_number} />
        <Entry name="Country" value={data.address.country} />
        <Entry name="Gender" value={gender[data.gender]} />
        <div className="pt-4 grid place-items-center">
          <SecondaryButton location={`/app/patients/edit/${props.id}`} type="button" text="Edit" />
        </div>
      </div>
    );
  } else {
    <div className="my-4 max-w-md md:w-96 h-auto p-3">
      <h2 className="text-center text-lg">Data is being loaded...</h2>
    </div>;
  }
};
export { ShowPatient };
