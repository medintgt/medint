import React from "react";

const SearchTab = (props) => {
    return (
        <section className="my-4 max-w-md  md:w-96 h-auto bg-white shadow-2xl p-3 rounded-md">
    <h2 className="text-xl">{props.title}</h2>
    <div className=" pt-2 grid place-items-center">
    <input placeholder={props.placeholder} className="mx-auto w-72 py-1 px-2 border rounded-md border-gray-400"type="text"></input>
    </div>
</section>
    )
}

export default SearchTab;