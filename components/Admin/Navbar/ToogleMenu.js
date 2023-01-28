import React from "react";
import Item from "./Item";
import Link from "next/link";

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
    { id: "3", title: "Registros Médicos", link: "/app/records" },
    { id: "4", title: "Citas", link: "/app/appointments" },
    { id: "5", title: "Medicamentos", link: "/app/products" },
    { id: "6", title: "Usuarios", link: "/app/users" },
    { id: "7", title: "Prescripciones", link: "/app/prescriptions" }
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
      <i className="text-2xl fi fi-rr-menu-burger lg:hidden"></i>
      <div className={`${state}  lg:flex relative`}>
        <div className="z-10 fixed top-0 py-3 w-72 h-full pl-8 pb-10 shadow-2x1 list-none flex flex-col bg-white shadow-2xl lg:shadow-md border-l-2 border-sky-800">
          <a
            className="w-full my-2 cursor-pointer lg:hidden justify-end"
            onClick={toogleMenu}
          >
            <i className="text-xl fi-rr-cross"></i>
          </a>
          {itemList}
          <footer className="mt-10 mr-10 flex justify-between">
            <p>© 2022 Medint</p>
          <Link href="/app/changelog">
            <a>
              <p className="text-sky-800">V. 2.2.1</p>
            </a>
          </Link>
         </footer>
        </div>
      </div>
    </div>,
    <div
      key="close-windwow"
      className={`${state} absolute z-9 bg-transparent top-0 bottom-0 right-0 left-0`}
      onClick={toogleMenu}
    ></div>,
  ];
};

export default ToogleMenu;
