import React from "react";

const ImportantInfo = (props) => {
  return (
    <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
      <h2 className="flex justify-center items-center text-xl">
        <i className="fi-rr-angle-small-left grid place-items-center px-4 cursor-pointer"></i>
        Poco inventario
        <i className="fi-rr-angle-small-right grid place-items-center px-4 cursor-pointer"></i>
      </h2>
      <ul>
        <li className="text-lg flex justify-evenly text-sky-800 px-4 py-1">
          <span className="cursor-pointer">{props.value1}</span>
          <span className="cursor-pointer">{props.value2}</span>
        </li>
      </ul>
    </section>
  );
};

export default ImportantInfo;
