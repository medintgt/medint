// pages/404.js
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  const router = useRouter();
  const url = router.asPath;
  return (
    <div className="container mx-auto grid place-items-center h-auto py-24">
      <div>
        <h1 className="text-4xl">Error 404</h1>
        <h2 className="text-2xl">
          Ops! Theres nothing here, go to <Link href="/">
          <a className="text-sky-800">
               Dashboard
          </a>
          </Link>
        </h2>
      </div>
      <div>
      <Image
                src="/img/error-404.png"
                alt="Error 404"
                width="512"
                height="512"
              />
      </div>
    </div>
  );
}
