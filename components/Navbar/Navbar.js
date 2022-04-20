import Image from "next/image";
import PrimaryButton from "../Button/Primary";
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-4 px-8 md:px-0">
      <Link href="/">
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
        <nav className="text-lg hidden lg:inline">
          <Link href="/therapies">
          <a className="m-4">Terapias</a>
          </Link>
          <Link href="/education">
          <a className="m-4">Educación</a>
          </Link>
          <Link href="/pharmacy">
          <a className="m-4">Farmacia</a>
          </Link>
          <Link href="/articles">
          <a className="m-4">Artículos</a>
          </Link>
        </nav>
        <i className="fi-rr-menu-burger text-3xl cursor-pointer lg:hidden align-middle md:mr-4"></i>
        <span className="hidden md:inline">
        <PrimaryButton
        text="Iniciar sesión"
        link="/app"
        />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
