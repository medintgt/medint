import React from "react";
import Title from "@components/Admin/Title";
import QuickActions from "@components/Admin/Buttons/QuickActions";
import SearchTab from "@components/Admin/Search/SearchTab";
import LayoutAdmin from "@components/LayoutAdmin";


const Histories = () => {
  return (
    <LayoutAdmin>

    <div className="container mx-auto grid justify-center">
      <Title title="Historias" src="/" breadcrumb="Escritorio" />
      <SearchTab
        title="Buscar Historia"
        placeholder="Buscar por id, nombre o dpi..."
        />
      <QuickActions />
    </div>
        </LayoutAdmin>
  );
};

export default Histories;
