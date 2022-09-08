import Entry from "@components/Admin/Show/Elements/Entry";
import ShowImageGroup from "@components/Admin/Show/Elements/ImageGroup"
import SecondaryButton from "@components/Admin/Buttons/SecondaryButton"
import axios from "axios";
import { useState, useEffect } from "react";

export const ShowHistory = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `/api/histories/history/${props.id}`
      );
      setData(response.data);
    };
    getData();
  }, [props.id]);
  if (data != null) {
    const displayData = (
    <div className="my-4 max-w-md  md:w-96 h-auto p-3">
      <Entry name="Nombre del paciente" value={data.patient_name ? data.patient_name : "No se encontro, es necesario actualizar historia"}/>
      <Entry name="Reason" value={data.date} />
      <Entry name="Reason" value={data.reason} />
      <Entry name="Subjective Data" value={data.subjective} />
      <Entry name="Objective Data" value={data.objective} />
      <Entry name="Objective Data" value={data.new_data} />
      <Entry name="Diagnosis" value={data.diagnosis} />
      <Entry name="Treatment" value={data.treatment} />
      <Entry name="Comments" value={data.comments} />
      <ShowImageGroup
        image1="/avatar3.png"
        image2="/avatar4.png"
        image3="/avatar5.png"
      />
      <div className="pt-4 grid place-items-center">
        <SecondaryButton type="submit" text="Edit" />
      </div>
    </div>
    );
    return displayData;
} else {
  return (
    <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
      <h2 className="text-xl text-center">Los datos estan cargando...</h2>
    </section>
    )
  }
}