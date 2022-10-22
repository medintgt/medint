import React from "react";
import LayoutAdmin from "@components/LayoutAdmin";

const ChangeLog = () => {
  return (
    <LayoutAdmin>

    <div className="container mx-auto grid justify-center">
      <div className="w-96">
      <h3 className="text-3xl">Changelog</h3>
      <strong>V.2.2.1</strong>
      <p>- Arreglado error de registros médicos que no guardaba información en colección correcta.</p>
      <p>- Cambio de mostrar pacientes creados recientemente, eliminado DPI y ahora unico dato a mostrar es nombre completo.</p>
      <br/>
      <strong>V.2.2.0</strong>
      <p>- Actualización de historias medicas a registros médicos</p>
      <p>- Eliminado modulo de casos médicos, ahora es Registros médicos.</p>
      <br/>
      <strong>V.2.1.0</strong>
      <p>- Nueva vista del menu para pantalla larga</p>
      <p>- Se cambio posición de pie de página al menu desplegable o lateral.</p>
      <br/>
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
    </div>
    </LayoutAdmin>
  );
};

export default ChangeLog;
