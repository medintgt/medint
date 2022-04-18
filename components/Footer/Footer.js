import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white bg-main text-lg">
      <div className="container mx-auto py-8  grid justify-items-center gap-y-8">
        <div>
          <Image
            className="cursor-pointer"
            src="/logo-white.svg"
            alt="Medint Logo"
            width="150"
            height="46"
          />
        </div>
        <div className="">
          <nav className="text-lg hidden lg:inline">
            <a className="m-4">Términos y Condiciones</a>
            <a className="m-4">Política de Privacidad</a>
            <a className="m-4">Empleos</a>
            <a className="m-4">Contactanos</a>
          </nav>
        </div>
        <div>
          <copy>&copy; 2022 Medint</copy>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
