import React from "react";
import NavbarAdmin from "@components/Admin/Navbar/Navbar";
import QuickActions from "@components/Admin/Buttons/QuickActions";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const LayoutAdmin = ({ children }) => {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return (
      <div>
        <NavbarAdmin />
        {children}
        <QuickActions />
      </div>
    );
  } else if (status === "loading") {
    return (
      <div className="container mx-auto grid place-items-center h-auto py-24">
        <h1 className="text-4xl">Cargando...</h1>
      </div>
    )
  } else {
    return (
      <div>
      <Navbar />
      <div className="container mx-auto grid place-items-center h-auto py-24">
        <div>
          <h1 className="text-4xl">Acceso Denegado</h1>
          <h2 className="text-2xl">
            Debes iniciar sesión antes de ingresar a esta página&nbsp;
            <a onClick={() => signIn()} className="text-sky-800 cursor-pointer">
              Ingresar
            </a>
          </h2>
        </div>
        <div className="m-4">
          <Image
            src="/denied.png"
            alt="Error 404"
            width="512"
            height="512"
          />
        </div>
      </div>
      <Footer />
    </div>
    )
    }
};

export default LayoutAdmin;
