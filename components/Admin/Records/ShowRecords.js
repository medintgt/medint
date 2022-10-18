import Entry from "../Show/Elements/Entry";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link"

const Records = ({data}) => {
  return (<>
    {data.map((record) => (
      <div key={record._id} className="text-lg flex justify-between px-4 py-1">
        <Link href={`/app/records/${record._id}`}>
        <a>
        <span className="cursor-pointer text-sky-800">{record.date}</span>
        </a>
        </Link>
        <span className="cursor-pointer">{record.reason}</span>
      </div>
    ))}
    </>
    )
}
const ShowRecords = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/records/${props.id}`);
      setData(response.data);
    };
    getData();
  }, [props.id]);
  const gender = ["Masculino", "Femenino"];
  if (data != null) {
    return (
      <div className="my-4 max-w-md  md:w-96 h-auto p-3">
        <div className="pt-4 grid place-items-center">
          <SecondaryButton
            location={`/app/records/new/${props.id}`}
            type="button"
            text="Nuevo Registro"
          />
        </div>
        <Records data={data} />
      </div>
    );
  } else {
    <div className="my-4 max-w-md md:w-96 h-auto p-3">
      <h2 className="text-center text-lg">Los datos estan cargando...</h2>
    </div>;
  }
};
export { ShowRecords };
