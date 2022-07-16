import Input from "../components/Forms/Elements/Input";
import Primary from "../components/Button/Primary";
import Image from "next/image";
import Link from "next/link";

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
        <h1 className="text-3xl">Log in</h1>
        <div className="my-2"><Input label="User" type="text" placeholder="User" /></div>
        <div className="my-2"><Input label="Password" type="password" placeholder="Password" /></div>
        <div className="my-2"><Primary link="/app" text="Log In" type="submit"/></div>
        <div className="text-lg"><span>Remember me</span><input className="ml-2 border-2 border-sky-800 rounded-full" type="checkbox"></input></div>
        <div className="text-lg"><Link href="/forgot-password"><a className="ml-2 cursor-pointer text-sky-800">Forgot Password?</a></Link></div>
      </form>
    </section>
  );
};

export default Login;
