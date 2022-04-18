import Image from "next/image";

const Navbar = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-4">
      <Image
        className="cursor-pointer"
        src="/logo.svg"
        alt="Medint Logo"
        width="250"
        height="76.82"
      />
      <div>
        <nav className="text-lg hidden lg:inline">
          <a className="m-4">Tratamientos</a>
          <a className="m-4">Educación</a>
          <a className="m-4">Farmacia</a>
          <a className="m-4">Artículos</a>
        </nav>
        <i className="fi-rr-menu-burger text-3xl cursor-pointer lg:hidden align-middle md:mr-4"></i>
        <button className="ml-4 text-white py-2 px-8 bg-main rounded-full hidden md:inline">
          Iniciar sesión
        </button>
      </div>
    </header>
  );
};

export default Navbar;
