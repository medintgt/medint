import Image from "next/image";
import Link from "next/dist/client/link";
import whatsIco from "../../public/whatsapp.png";
import instaIco from "../../public/instagram.png";
import linkeIco from "../../public/linkedin.png";

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
        <div className="flex justify-evenly gap-4 font-bold">
        <a href="https://wa.me/50259665659" rel="noreferrer" target="_blank" className="w-8 h-8 cursor-pointer"><Image 
          src={whatsIco}
          alt="Whatsapp Icon"
          /></a>
          <a  href="https://instagram.com/medintgt" rel="noreferrer" target="_blank"  className="w-8 h-8"><Image 
          src={instaIco}
          alt="Whatsapp Icon"
          /></a>
          <a href="https://www.linkedin.com/company/medintgt" rel="noreferrer" target="_blank"  className="w-8 h-8"><Image 
          src={linkeIco}
          alt="Whatsapp Icon"
          /></a>
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
        <div className="flex justify-evenly gap-4">
          <button className="w-10 h-10 rounded-full border-2 p-1 font-bold" title="Español">Es</button>
          <button className="w-10 h-10 rounded-full border-2 p-1 font-bold" title="English">En</button>
          <button className="w-10 h-10 rounded-full border-2 p-1 font-bold" title="Français">Fr</button>
        </div>
        <div>
          <copy>&copy; 2022 Medint</copy>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
