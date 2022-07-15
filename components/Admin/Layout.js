import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children }
            <footer className="container mx-auto flex justify-end">
            <Link href='/changelog'>
            <a>
            <p className="text-sky-800">Version 2.0.0</p>
            </a>
            </Link>
            </footer>
        </div>
    )
}

export default Layout