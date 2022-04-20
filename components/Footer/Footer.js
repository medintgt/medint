import Image from "next/image";
import Link from "next/dist/client/link";

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
          <nav className="text-lg flex flex-wrap">
            <Link href="/terms">
            <a className="m-4 cursor-pointer">Términos y Condiciones</a>
            </Link>
            <Link href="/privacy">
            <a className="m-4 cursor-pointer">Política de Privacidad</a>
            </Link>
            <Link href="/careers">
            <a className="m-4 cursor-pointer">Empleos</a>
            </Link>
            <Link href="/contact">
            <a className="m-4 cursor-pointer">Contactanos</a>
            </Link>
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
