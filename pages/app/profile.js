import Title from "@components/Admin/Title";
import LayoutAdmin from "@components/LayoutAdmin";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Profile() {
  const { data: session } = useSession()
  if(session) {
    return <>
    <LayoutAdmin>
    <div className="container mx-auto grid justify-center w-96">
    <Title title="Perfil" src="/" breadcrumb="Escritorio" />
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
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