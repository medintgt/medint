import React from "react";
import Item from "./Item";

const ToogleMenu = () => {
  const [state, setState] = React.useState("hidden");

  const toogleMenu = () => {
    if (state == "hidden") {
      setState("flex");
    } else {
      setState("hidden");
    }
  };
  const items = [
    { id: "1", title: "Escritorio", link: "/app" },
    { id: "2", title: "Pacientes", link: "/app/patients" },
    { id: "4", title: "Casos Medicos", link: "/app/cases" },
    { id: "5", title: "Citas", link: "/app/appointments" },
    { id: "6", title: "Productos", link: "/app/products" },
    { id: "7", title: "Movimientos", link: "/app/movements" },
    { id: "8", title: "Cursos", link: "/app/courses" },
    { id: "9", title: "Artículos", link: "/app/articles" },
    { id: "10", title: "Usuarios", link: "/app/users" },
    { id: "11", title: "Prescripciones", link: "/app/prescriptions" },
    { id: "12", title: "Ordenes", link: "/app/orders" },
    { id: "13", title: "Ventas", link: "/app/sales" },
    { id: "14", title: "Finanzas", link: "/app/finances" },
  ];

  const itemList = items.map((item) => (
    <Item
      key={item.id}
      text={item.title}
      link={item.link}
      onClick={toogleMenu}
    />
  ));
  return [
    <div
    key="toogle-menu"
      onClick={toogleMenu}
      className="grid place-items-center cursor-pointer"
    >
      <i className="text-2xl fi fi-rr-menu-burger"></i>
      <div className={`${state} relative`}>
        <div className="z-10 fixed top-0 p-3 w-72 h-auto pl-8 pb-10 shadow-2x1 list-none flex flex-col rounded-md bg-white shadow-2xl">
          <a
            className="w-full my-2 cursor-pointer text-left"
            onClick={toogleMenu}
          >
            <i className="text -3xl fi-rr-cross"></i>
          </a>
          {itemList}
        </div>
      </div>
    </div>,
    <div
    key="close-windwow"
      className={`${state} absolute z-9 bg-transparent top-0 bottom-0 right-0 left-0`}
      onClick={toogleMenu}
    ></div>
  ];
};

export default ToogleMenu;
