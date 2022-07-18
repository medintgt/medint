import React from "react";
import NavbarAdmin from "@components/Admin/Navbar/Navbar";
import Link from "next/link"

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarAdmin />
      {children}
      <footer className="container mx-auto flex justify-end">
            <Link href='/app/changelog'>
            <a>
            <p className="text-sky-800">Version 2.0.0</p>
            </a>
            </Link>
            </footer>
    </div>
  );
};

export default Layout;
