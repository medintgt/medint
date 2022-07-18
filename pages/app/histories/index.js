import React from "react";
import Title from "@components/Admin/Title";
import ShowTherapiesCard from "@components/Admin/Therapies/ShowTherapiesCard";
import QuickActions from "@components/Admin/Buttons/QuickActions";
import SearchTab from "@components/Admin/Search/SearchTab";
import LayoutAdmin from "@components/LayoutAdmin";


const Therapies = () => {
  return (
    <LayoutAdmin>

    <div className="container mx-auto grid justify-center">
      <Title title="Therapies" src="/" breadcrumb="Dashboard" />
      <SearchTab
        title="Search Therapie"
        placeholder="Search by id, patient name or id..."
        />
      <ShowTherapiesCard />
      {/* Add Statistics: Most common diagnostic; Therapies on the month, week and day.; Most common treatment. */}
      <QuickActions />
    </div>
        </LayoutAdmin>
  );
};

export default Therapies;
