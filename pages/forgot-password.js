import Input from "../components/Forms/Elements/Input";
import Primary from "../components/Button/Primary";
import Image from "next/image";
import Link from "next/dist/client/link";

const Login = () => {
  return (
    <section className="grid place-items-center w-full h-screen">
      <form className="bg-white w-96 p-4 grid place-items-center py-12 rounded-lg" method="POST">
        <div className="my-4">
        <Link href="/">
        <a>
        <Image 
        alt="Logotype"
        src="/logo.svg"
        width="250"
        height="76.82"
        />
        </a>
        </Link>
        </div>
        <h1 className="text-3xl">Recuperar contraseña</h1>
        <div className="my-2"><Input label="Correo electrónico" type="text" placeholder="example@example.com" /></div>
        <div className="my-2"><Primary link="/forgot-password" text="Recuperar constraseña" type="submit"/></div>
        <div className="text-lg"><Link href="/login"><a className="ml-2 cursor-pointer text-sky-800">Regresar a Inicio de sesión</a></Link></div>
      </form>
    </section>
  );
};

export default Login;
