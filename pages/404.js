// pages/404.js
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";

export default function Custom404() {
  const router = useRouter();
  const url = router.asPath;
  const [location, setLocation] = useState("/")
  const [text, setText] = useState("Home")

  useEffect(() => {
    function checkLocation() {
      if (url.includes("/app/")) {
        /* When is located in the app */
        setLocation("/app/")
        setText("Dashboard")
      } else {
        /* When is not located in the app. */
        setLocation("/")
        setText("Home")
      }
    }
    checkLocation()
  }, [url])
  
  return (
    <div className="container mx-auto grid place-items-center h-auto py-24">
      <div>
        <h1 className="text-4xl">Error 404</h1>
        <h2 className="text-2xl">
          Ops! There&apos;s nothing here, go to <Link href={location}>
          <a className="text-sky-800">
               {text}
          </a>
          </Link>
        </h2>
      </div>
      <div>
      <Image
                src="/error-404.png"
                alt="Error 404"
                width="512"
                height="512"
              />
      </div>
    </div>
  );
}
