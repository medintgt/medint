import React from "react";
import QuickActions from "@components/Buttons/QuickActions";
import ImportantInfo from "@components/Cards/ImportantInfo";
import Statistics from "@components/Cards/Statistics"
import { ShowAppointments } from "@components/Appointments/ShowAppointments";

const Dashboard = () => {
  return (
    <div className="container mx-auto grid justify-center">
      <section className="flex justify-between py-4">
        <h1 className="text-2xl">Dashboard</h1>
          <a>
            <span className="text-xl flex items-center cursor-pointer">
              <i className="grid place-items-center pr-2"></i>
            </span>
          </a>
      </section>
      <Statistics 
      name="Patients - Week"
      value1="18"
      title1="First time"
      value2="65"
      title2="Teraphies"
      />
      <Statistics 
      name="Sells - Week"
      value1="34"
      title1="Pharmacy"
      value2="98"
      title2="Courses"
      />
      <ShowAppointments />
      <ImportantInfo value1="12312031" value2="Traumeel S" />
      <QuickActions />
    </div>
  );
};

export default Dashboard;
