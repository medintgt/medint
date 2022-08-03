import '../styles/globals.css';
import Head from "next/head";
import "../styles/uicons/css/uicons.css";
import { SessionProvider } from "next-auth/react"

function App({ Component, pageProps: {session, ...pageProps} }) {
  const getLayout = Component.getLayout || ((page) => page)
    return (
      <SessionProvider session={session}>
      <div>
        <Head>
          <title>Medint</title>
        </Head>
        {getLayout(<Component {...pageProps}/>)}
      </div>
      </SessionProvider>
    )
  }

  export default App

