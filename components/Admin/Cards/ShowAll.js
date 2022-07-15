import React from "react";

const ShowAll = () => {
    return (
        <div className="container mx-auto grid justify-center">
{/* All data tools */}
<section className="my-4 max-w-md  md:w-96 h-auto p-3 flex justify-between">
        <div className="cursor-pointer"><h2 className="text-2xl"><i className="fi-rr-cloud-download pr-2"></i>Export</h2></div>
        <div className="cursor-pointer"><h2 className="text-2xl">Filters<i className="fi-rr-settings-sliders pl-2"></i></h2></div>
</section>
{/* Show all products */}
<section className="my-4 max-w-md md:w-96 p-3">
<ul>
        <li className="text-lg flex justify-between text-sky-800 px-4 py-1"><span className="cursor-pointer">123123123</span><span className="cursor-pointer">Abatelenguas de Madera</span></li>
    </ul>
</section>
</div>
    );
};

export default ShowAll;