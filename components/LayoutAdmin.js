import React from "react";
import NavbarAdmin from "@components/Admin/Navbar/Navbar";
import Link from "next/link";
import QuickActions from "@components/Admin/Buttons/QuickActions";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const LayoutAdmin = ({ children }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <NavbarAdmin />
        {children}
        <QuickActions />
        <footer className="container mx-auto flex justify-end">
          <Link href="/app/changelog">
            <a>
              <p className="text-sky-800">Version 2.0.0</p>
            </a>
          </Link>
        </footer>
      </div>
    );
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
