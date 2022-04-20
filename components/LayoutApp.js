import React from "react";
import NavbarApp from "./Navbar/NavbarApp";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarApp />
      {children}
    </div>
  );
};

export default Layout;
