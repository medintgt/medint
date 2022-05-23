import Input from "../components/Forms/Elements/Input";
import Primary from "../components/Button/Primary";
import Image from "next/image";
import Link from "next/dist/client/link";

const Login = () => {
  return (
    <section className="grid place-items-center w-full h-screen">
      <form className="bg-white w-96 p-4 grid place-items-center py-12 rounded-lg" method="POST">
        <div className="my-4">
        <Image 
        alt="Logotype"
        src="/logo.svg"
        width="250"
        height="76.82"
        />
        </div>
        <h1 className="text-3xl">Recover password</h1>
        <div className="my-2"><Input label="Email" type="text" placeholder="Email" /></div>
        <div className="my-2"><Primary link="/forgot-password" text="Enviar código" type="submit"/></div>
        <div className="text-lg"><Link href="/login"><a className="ml-2 cursor-pointer text-sky-800">Ir al login</a></Link></div>
      </form>
    </section>
  );
};

export default Login;
