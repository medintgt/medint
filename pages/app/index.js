import LayoutAdmin from "@components/LayoutAdmin";
import React from "react";
import ImportantInfo from "@components/Admin/Cards/ImportantInfo";
import Statistics from "@components/Admin/Cards/Statistics"
import { ShowAppointments } from "@components/Admin/Appointments/ShowAppointments";

const Dashboard = () => {
  return (
    <LayoutAdmin>
    <div className="container mx-auto grid justify-center">
      <section className="flex justify-between py-4">
        <h1 className="text-2xl">Escritorio</h1>
          <a>
            <span className="text-xl flex items-center cursor-pointer">
              <i className="grid place-items-center pr-2"></i>
            </span>
          </a>
      </section>
      <ShowAppointments />
      <Statistics 
      name="Pacientes - Semana"
      value1="2"
      title1="Creados"
      value2="0"
      title2="Historias"
      />
      <Statistics 
      name="Ventas - Semana"
      value1="0"
      title1="Productos"
      value2="0"
      title2="Servicios"
      />
      <ImportantInfo value1="Traumeel S" value2="2 unidades" />
    </div>
    </LayoutAdmin>
  );
};

export default Dashboard;
