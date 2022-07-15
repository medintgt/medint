// import App from 'next/app'
import Head from "next/head";
import Layout from "@components/Layout";
import "../dist/output.css";
import "../dist/uicons/css/uicons.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname != "/login") {
    return (
      <Layout>
        <Head>
          <title>Medint</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return (
      <div>
        <Head>
          <title>Medint</title>
        </Head>
        <Component {...pageProps} />
        <footer className="container mx-auto flex justify-end">
          <p className="text-sky-800">Version 2.0.0</p>
        </footer>
      </div>
    );
  }
}

export default MyApp;
