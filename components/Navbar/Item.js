import React from "react";
import Link from "next/link";

const Item = (props) => {

  return (
    <Link href={props.link}>
        <a className="my-2 text-lg cursor-pointer hover:text-sky-800">
          {props.text}
        </a>
    </Link>
  );
};

export default Item;
