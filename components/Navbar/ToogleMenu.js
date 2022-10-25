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
    { id: "1", title: "Personas", link: "/services/individual/" },
    { id: "2", title: "Profesionales", link: "/services/professionals/" },
    { id: "3", title: "Empresas", link: "/services/business/" },
    { id: "4", title: "Artículos", link: "/articles" }
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
      className="lg:hidden grid place-items-center cursor-pointer"
    >
      <i className="text-3xl fi fi-rr-menu-burger mx-4"></i>
      <div className={`${state}`}>
        <div className="z-10 absolute top-0 right-0 p-3 w-72 h-auto pl-8 pb-10 shadow-2x1 list-none flex flex-col rounded-md bg-white shadow-2xl">
          <a
            className="w-full my-2 cursor-pointer text-left"
            onClick={toogleMenu}
          >
            <i className="text-3xl fi-rr-cross-small"></i>
          </a>
          {itemList}
        </div>
      </div>
    </div>,
    <div
      key="close-windwow"
      className={`${state} fixed z-9 bg-transparent top-0 bottom-0 right-0 left-0`}
      onClick={toogleMenu}
    ></div>,
  ];
};

export default ToogleMenu;
