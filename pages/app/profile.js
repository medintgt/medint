import Title from "@components/Admin/Title";
import LayoutAdmin from "@components/LayoutAdmin";
import { useSession, signIn, signOut } from "next-auth/react"
import Head from "next/head";

export default function Profile() {
  const { data: session } = useSession()
  if(session) {
    return <>
    <LayoutAdmin>
      <Head><title>Perfil {session.user.name} - Medint</title></Head>
    <div className="container mx-auto grid justify-center w-96">
    <Title title={session.user.name} src="/" breadcrumb="Escritorio" />
      ¡Hola de nuevo {session.user.name}! <br/>
      <button onClick={() => signOut()}>Cerrar sesión</button>
      </div>
      </LayoutAdmin>
    </>
  }
  return <>
      <LayoutAdmin>
      <div className="container mx-auto grid justify-center w-96">
      <Title title="Perfil" src="/" breadcrumb="Escritorio" />
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
      </div>
    </LayoutAdmin>
  </>
}