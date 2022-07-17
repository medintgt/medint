import '../styles/globals.css';
import Head from "next/head";
import "../styles/uicons/css/uicons.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
    return (
      <div>
        <Head>
          <title>Medint</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </div>
    )
  }

  export default MyApp