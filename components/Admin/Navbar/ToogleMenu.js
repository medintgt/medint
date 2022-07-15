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
    { id: "1", title: "Dashboard", link: "/" },
    { id: "2", title: "Patients", link: "/patients" },
    { id: "3", title: "Therapies", link: "/therapies" },
    { id: "4", title: "Sales", link: "/sales" },
    { id: "5", title: "Appointments", link: "/appointments" },
    { id: "6", title: "Products", link: "/products" },
    { id: "7", title: "Movements", link: "/movements" },
    { id: "8", title: "Courses", link: "/courses"},
    { id: "9", title: "Articles", link: "/articles"},
    { id: "10", title: "Users", link: "/users"},
    { id: "11", title: "Prescriptions", link: "/prescriptions"},
    { id: "12", title: "Orders", link: "/orders"}
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
