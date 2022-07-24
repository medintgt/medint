import Entry from "../Show/Elements/Entry";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useState, useEffect } from "react";
import axios from "axios";

const ShowPatient = (props) => {
  const countries = {
    GTM: "Guatemala" ,
    SLV: "El Salvador" ,
    MEX: "Mexico" ,
    HND: "Honduras" ,
    USA: "Estados Unidos",
    PAN: "Panama" ,
    CRI: "Costa Rica" ,
    NIC: "Nicaragua" ,
    BLZ: "Belize" ,
    "no-specified": "Otro" ,
  };
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
        <Entry name="Usuario" value={data.user_id} />
        <Entry name="Primer Nombre" value={data.first_name} />
        <Entry name="Segundo Nombre" value={data.middle_name} />
        <Entry name="Apellidos" value={data.last_name} />
        <Entry name="DPI/CUI" value={data.dpi} />
        <Entry name="Fecha de nacimiento" value={data.born_date} />
        <Entry name="Número de teléfono" value={data.phone_number} />
        <Entry name="País" value={countries[data.country]} />
        <Entry name="Genero" value={gender[data.gender]} />
        <div className="pt-4 grid place-items-center">
          <SecondaryButton
            location={`/app/patients/edit/${props.id}`}
            type="button"
            text="Editar"
          />
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
