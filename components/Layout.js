import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children }
            <footer className="container mx-auto flex justify-end"><p className="text-sky-800">Version 2.0.0</p></footer>
        </div>
    )
}

export default Layout