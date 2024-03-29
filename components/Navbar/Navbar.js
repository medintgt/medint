import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import ToogleMenu from "./ToogleMenu";
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  
  const messages = {
    es: {
      GREETING: "Terapias",
    },
    en: {
      GREETING: "Therapies",
    },
    fr: {
      GREETING: "Thérapies",
    },
  };

  return (
    <header className="bg-white z-10 container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
      <Link href="/">
        <a className="text-3xl w-40">
          <Image className="cursor-pointer h-2" src={logo} alt="Medint Logotype" />
        </a>
      </Link>
      <div className="print:hidden">
        <nav className="text-lg flex items-center">
        <ToogleMenu />
          <div className="hidden lg:flex">
            <Link href="/services/individual/">
              <a className="m-4 hover:text-main">Personas</a>
            </Link>
            <Link href="/services/professionals/">
              <a className="m-4 hover:text-main">Profesionales</a>
            </Link>
            <Link href="/services/business/">
              <a className="m-4 hover:text-main">Empresas</a>
            </Link>
            <Link href="/articles">
              <a className="m-4 hover:text-main">Artículos</a>
            </Link>
          </div>
          <i
            className="fi-rr-shopping-cart text-3xl cursor-pointer align-middle md:mr-4 p-2 text-main hidden"
            title="Shopping Cart"
          ></i>
              <i
                onClick={() => signIn()}
                className="fi-rr-sign-in-alt text-3xl cursor-pointer align-middle md:mr-4 p-2 text-main"
                title="Sign In"
              ></i>
          <span className="text-3xl w-10 ml-2 hidden">
            <Image
              className="rounded-full cursor-pointer"
              src="/user1.jpg"
              alt="User"
              width="40"
              height="40"
            />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
