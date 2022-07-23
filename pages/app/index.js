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
        <h1 className="text-2xl">Dashboard</h1>
          <a>
            <span className="text-xl flex items-center cursor-pointer">
              <i className="grid place-items-center pr-2"></i>
            </span>
          </a>
      </section>
      <ShowAppointments />
      <Statistics 
      name="Pacientes - Semana"
      value1="18"
      title1="Creados"
      value2="65"
      title2="Historias"
      />
      <Statistics 
      name="Ventas - Semana"
      value1="34"
      title1="Productos"
      value2="98"
      title2="Servicios"
      />
      <ImportantInfo value1="3 Unidades" value2="Traumeel S" />
    </div>

    </LayoutAdmin>
  );
};

export default Dashboard;
