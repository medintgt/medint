import Entry from "../Show/Elements/Entry";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useState, useEffect } from "react";
import axios from "axios";

const ShowRecord = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/finances/record/${props.id}`);
      setData(response.data);
    };
    getData();
  }, [props.id]);
  if (data != null) {
    return (
      <div className="my-4 max-w-md  md:w-96 h-auto p-3">
        <Entry name="Código único" value={data._id}  />
        <Entry name="Cuenta Debe" value={data.account.name}  />
        <Entry name="Cuenta Haber" value={data.account2.name} />
        <Entry name="Fecha" value={data.date} />
        <Entry name="Cantidad" value={data.amount} />
        <Entry name="Descripción" value={data.description} />
        <Entry name="Referencia" value={data.reference} />
        <div className="pt-4 grid place-items-center">
          <SecondaryButton
            location={`/app/finances/record/edit/${props.id}`}
            type="button"
            text="Editar"
          />
        </div>
      </div>
    );
  } else {
    <div className="my-4 max-w-md md:w-96 h-auto p-3">
      <h2 className="text-center text-lg">Los datos estan cargando...</h2>
    </div>;
  }
};
export { ShowRecord };
