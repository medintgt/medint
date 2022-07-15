import React from "react";
import Link from "next/link";

const Title = (props) => {
    return (
        <section className="flex justify-between py-4">
        <h1 className="text-2xl">{ props.title }</h1>
        <Link href= { props.src }>
        <a>
        <span className="text-xl flex items-center cursor-pointer"><i className="fi fi-rr-arrow-left grid place-items-center pr-2"></i>{ props.breadcrumb }</span>
        </a>
        </Link>
        </section>
    )
}

export default Title