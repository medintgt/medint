import '../styles/globals.css'
import Head from "next/head"
import Layout from "../components/Layout";
import "../styles/uicons/css/uicons.css";

function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Head>
          <title>Medint</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    )
  }

  export default MyApp