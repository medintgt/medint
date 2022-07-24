import React from "react";
import Input from "@components/Admin/Forms/Elements/Input";
import Textarea from "@components/Admin/Forms/Elements/Textarea";
import PrimaryButton from "@components/Admin/Buttons/PrimaryButton";
import ImageGroup from "./Elements/ImageGroup";
import Select from "./Elements/Select";
import { useState, useEffect } from "react";

const CreatePatient = () => {
    const countries = [
        { value: "GTM", text: "Guatemala" },
        { value: "SLV", text: "El Salvador" },
        { value: "MEX", text: "Mexico" },
        { value: "HND", text: "Honduras" },
        { value: "USA", text: "Estados Unidos" },
        { value: "PAN", text: "Panama" },
        { value: "CRI", text: "Costa Rica" },
        { value: "NIC", text: "Nicaragua" },
        { value: "BLZ", text: "Belize" },
        { value: "no-specified", text: "Otro" },
      ];
      const academic = [
        { value: "0", text: "Ninguno" },
        { value: "1", text: "Primaria" },
        { value: "2", text: "Básico" },
        { value: "3", text: "Diversificado" },
        { value: "4", text: "Superior" }
        
      ];
    const gender = [
    { value: "0", text: "Masculino" },
    { value: "1", text: "Femenino" },
  ];
  return (
    <form className="my-4 max-w-md  md:w-96 h-auto p-3" action="">
      <Input
        label="Usuario"
        placeholder="Buscar usuario (si aplica)"
        type="text"
      />
      <Input label="Primer Nombre" placeholder="John" type="text" />
      <Input label="Segundo Nombre" placeholder="Richard" type="text" />
      <Input label="Apellidos" placeholder="Doe" type="text" />
      <Input label="DPI/CUI" placeholder="1234567890987" type="number" />
      <Input label="Fecha de nacimiento" type="date" />
      <Input label="Ocupacion" placeholder="Bombero" type="text"/>
      <Select label="Nivel Academico" options={academic} />
      <Select label="País" options={countries} />
      <Select label="Genero" options={gender} />
      <div className="pt-4 grid place-items-center">
        <PrimaryButton text="Crear Paciente" />
      </div>
    </form>
  );
};

export default CreatePatient;