import React from "react";
import Title from "@components/Title";
import ShowTherapiesCard from "@components/Therapies/ShowTherapiesCard";
import QuickActions from "@components/Buttons/QuickActions";
import SearchTab from "@components/Search/SearchTab";

const Therapies = () => {
  return (
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
  );
};

export default Therapies;
