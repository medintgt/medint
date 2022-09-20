import React from "react";
import LayoutAdmin from "@components/LayoutAdmin";

const ChangeLog = () => {
  return (
    <LayoutAdmin>

    <div className="container mx-auto py-8">
      <h3 className="text-3xl">Changelog</h3>
      <strong>V.2.0.2</strong>
      <p>- Esconder resultados al seleccionar paciente en historia clinica</p>
      <br/>
      <strong>V.2.0.1</strong>
      <p>- Encontrar pacientes esconde resultados al seleccionar.</p>
      <br/>
      <strong>V.2.0.0</strong>
      <p>- Modulo de citas habilitado.</p>
      <p>- Modulo de pacientes habilitado.</p>
      <p>- Modulo de Historias habilitado.</p>
      <p>- Modulo de Registros habilitado.</p>
    </div>
    </LayoutAdmin>
  );
};

export default ChangeLog;
