import Image from "next/image";
import PrimaryButton from "../Button/Primary";
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-4 px-8 md:px-0">
      <Link href="/app">
      <a>
      <Image
        className="cursor-pointer"
        src="/logo.svg"
        alt="Medint Logo"
        width="250"
        height="76.82"
      />
      </a>
      </Link>
      <div>
        <nav className="text-lg flex items-center">
          <div className=" hidden lg:flex">
          <Link href="/app/appointments">
          <a className="m-4">Agenda</a>
          </Link>
          <Link href="/app/courses">
          <a className="m-4">Cursos</a>
          </Link>
          <Link href="/app/history">
          <a className="m-4">Historial</a>
          </Link>
          <Link href="/app/orders">
          <a className="m-4">Pedidos</a>
          </Link>
          </div>
        <i className="fi-rr-menu-burger text-3xl cursor-pointer lg:hidden align-middle md:mr-4 p-2"></i>
        <i className="fi-rr-shopping-cart text-3xl cursor-pointer align-middle md:mr-4 p-2"></i>
            <Image
              className="rounded-full cursor-pointer p-2"
              src="/user1.jpg"
              alt="User"
              width="40"
              height="40"
            />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
