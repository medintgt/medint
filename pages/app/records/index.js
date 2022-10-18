import React from "react";
import Title from "@components/Admin/Title";
import QuickActions from "@components/Admin/Buttons/QuickActions";
import SearchTab from "@components/Admin/Search/SearchTab";
import LayoutAdmin from "@components/LayoutAdmin";


const Records = () => {
  return (
    <LayoutAdmin>

    <div className="container mx-auto grid justify-center">
      <Title title="Registros" src="/" breadcrumb="Escritorio" />
      <SearchTab
        title="Buscar Registro médico"
        placeholder="Buscar por id, nombre o dpi..."
        />
      <QuickActions />
    </div>
        </LayoutAdmin>
  );
};

export default Records;
