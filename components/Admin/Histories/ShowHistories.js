import Entry from "../Show/Elements/Entry";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link"

const Histories = ({data}) => {
  return (<>
    {data.map((history) => (
      <div key={history._id} className="text-lg flex justify-between px-4 py-1">
        <Link href={`/app/histories/${history._id}`}>
        <a>
        <span className="cursor-pointer text-sky-800">{history.date}</span>
        </a>
        </Link>
        <span className="cursor-pointer">{history.reason}</span>
      </div>
    ))}
    </>
    )
}
const ShowHistories = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/histories/${props.id}`);
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
            location={`/app/histories/new/${props.id}`}
            type="button"
            text="Nueva Historia"
          />
        </div>
        <Histories data={data} />
      </div>
    );
  } else {
    <div className="my-4 max-w-md md:w-96 h-auto p-3">
      <h2 className="text-center text-lg">Los datos estan cargando...</h2>
    </div>;
  }
};
export { ShowHistories };
