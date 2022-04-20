import React from "react";
import Navbar from "./Navbar/Navbar";
import NavbarLogged from "./Navbar/NavbarLogged";
import Footer from "./Footer/Footer";


const Layout = ({ children }) => {
  if (true) {
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <NavbarLogged />
        {children}
        <Footer />
      </div>
    );
  }
};

export default Layout;
