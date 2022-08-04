import React from "react";
import Navbar from "./Navbar/Navbar";
import NavbarLogged from "./Navbar/NavbarLogged";
import Footer from "./Footer/Footer";
import { useSession, signIn, signOut } from "next-auth/react"


const Layout = ({ children }) => {
  const { data: session } = useSession()
  if (!session) {
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
