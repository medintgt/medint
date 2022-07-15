import React from "react";
import NavbarAdmin from "@components/Admin/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarAdmin />
      {children}
    </div>
  );
};

export default Layout;
