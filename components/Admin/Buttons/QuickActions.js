import React from "react";
import Link from "next/link";


/** 
 * If the menu has the class "hidden", remove it. Otherwise, add it.
 */

const items = [
  { title: "New Appointment", link: "/appointments/new", icon: "calendar" },
  { title: "New Therapy", link: "/therapies/new", icon: "stethoscope" },
  { title: "New Sale", link: "/sales/new", icon: "dollar" },
  { title: "New Data", link: "/data/new-entry", icon: "layers" },
  { title: "New Movement", link: "/movements/new", icon: "pharmacy" },
  { title: "New Product", link: "/products/new", icon: "shopping-bag-add" },
  { title: "New Patient", link: "/patients/new", icon: "user-add" },  
  { title: "New Prescription", link: "/prescriptions/new", icon: "receipt"}
];

const QuickActions = () => {
  const [state, setState] = React.useState("hidden");
  
  const toogleMenu = () => {
    if (state == "hidden") {
      setState("flex");
    } else {
      setState("hidden");
    }
  };
  
  return [
    <section key='0'>
      <button
        onClick={toogleMenu}
        className="cursor-pointer bg-fixed bottom-10 right-10 text-4xl bg-sky-800 p-2.5 w-14 h-14 rounded-full text-white text-center grid place-items-center">
        <i className="fi-rr-plus-small"></i>
      </button>
      <div id="quickActions" className={`${state} relative`}>
        <ul
          className="z-10 fixed bottom-28 p-4 w-72 right-10 h-auto pb-10 shadow-2x1 list-none
                        flex flex-col justify-start rounded-md bg-white shadow-2xl"
        >
          {items.map((item) => (
              <li key={item.icon} className="text-lg cursor-pointer p-2">
            <Link href={item.link}>
              <a>
                <i className={`fi-rr-${item.icon} pr-4`}></i>
                {item.title}
              </a>
            </Link>
              </li>
          ))}
        </ul>
      </div>
    </section>,
    <div key='1' className={`${state} absolute z-9 bg-transparent top-0 bottom-0 right-0 left-0`} onClick={toogleMenu}>

    </div>
  ];
};

export default QuickActions;
