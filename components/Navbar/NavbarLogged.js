import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import { useSession, signIn, signOut } from "next-auth/react";
import ToogleMenu from "./ToogleMenu";

const NavbarLogged = () => {
  const { data: session } = useSession();
  return (
    <header className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
      <Link href="/">
        <a className="text-3xl w-48 md:w-56">
          <Image className="cursor-pointer h-2" src={logo} alt="Medint Logo" />
        </a>
      </Link>
      <div>
        <nav className="text-lg flex items-center">
          <ToogleMenu />
          <div className=" hidden lg:flex">
            <Link href="/therapies">
              <a className="m-4 hover:text-main">Terapias</a>
            </Link>
            <Link href="/education">
              <a className="m-4 hover:text-main">Educación</a>
            </Link>
            <Link href="/pharmacy">
              <a className="m-4 hover:text-main">Farmacia</a>
            </Link>
            <Link href="/articles">
              <a className="m-4 hover:text-main">Artículos</a>
            </Link>
            <Link href="/app">
              <a className="m-4 hover:text-main">Escritorio</a>
            </Link>
          </div>
          <Link href="/app/checkout">
            <a>
              <i
                className="fi-rr-shopping-cart text-3xl cursor-pointer align-middle md:mr-4 p-2 text-main"
                title="Shopping Cart"
              ></i>
            </a>
          </Link>
          <span className="text-3xl w-10 ml-2">
            <Link href="/app/profile">
              <a>
                <Image
                  className="rounded-full cursor-pointer"
                  src={session.user.image}
                  alt={session.user.name}
                  title={session.user.name}
                  width="40"
                  height="40"
                />
              </a>
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default NavbarLogged;
