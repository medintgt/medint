import React from "react";
import Title from "@components/Admin/Title";
import ShowHistoriesCard from "@components/Admin/Histories/ShowHistoriesCard";
import QuickActions from "@components/Admin/Buttons/QuickActions";
import SearchTab from "@components/Admin/Search/SearchTab";
import LayoutAdmin from "@components/LayoutAdmin";


const Therapies = () => {
  return (
    <LayoutAdmin>

    <div className="container mx-auto grid justify-center">
      <Title title="Historias" src="/" breadcrumb="Escritorio" />
      <SearchTab
        title="Buscar Historia"
        placeholder="Buscar por id, nombre o dpi..."
        />
      <ShowHistoriesCard />
      {/* Add Statistics: Most common diagnostic; Therapies on the month, week and day.; Most common treatment. */}
      <QuickActions />
    </div>
        </LayoutAdmin>
  );
};

export default Therapies;
