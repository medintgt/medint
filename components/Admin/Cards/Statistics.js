import React from "react";

const Statistics = (props) => {
  return (
    <section className="my-4 max-w-md md:w-96 bg-white shadow-2xl p-3 rounded-md">
      <h2 className="text-xl">
        {props.name}
      </h2>
      <div className="flex justify-evenly">
          <div className="grid place-items-center">
              <h2 className="text-4xl">{props.value1}</h2>
              <h3 className="text-xl">{props.title1}</h3>
          </div>
          <div className="grid place-items-center">
              <h2 className="text-4xl">{props.value2}</h2>
              <h3 className="text-xl">{props.title2}</h3>
          </div>
        </div>
    </section>
  );
};

export default Statistics;