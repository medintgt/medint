import React from "react";
import Link from "next/link";
import Image from "next/image";
import ToogleMenu from "./ToogleMenu";
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const { data: session } = useSession()
  if(session.user.image) {
    return (
      <header className="w-full bg-white items-center">
        <nav className="container mx-auto flex justify-between items-center px-4 py-2">
          <ToogleMenu />
          <div>
            <Link href="/app">
              <a>
                <Image
                  className="w-10 z-8 h-10 rounded-full cursor-pointer"
                  src="/logo.svg"
                  alt="Logotype"
                  width="130"
                  height="40"
                />
              </a>
            </Link>
          </div>
          <Link href="/app/profile">
            <a>
              <Image
                className="w-10 h-10 z-8 rounded-full cursor-pointer"
                src={session.user.image}
                alt="User"
                width="40"
                height="40"
              />
            </a>
          </Link>
        </nav>
      </header>
    );  
  } else {
    return (
      <header className="w-full bg-white items-center">
        <nav className="container mx-auto flex justify-between items-center px-4 py-2">
          <ToogleMenu />
          <div>
            <Link href="/app">
              <a>
                <Image
                  className="w-10 z-8 h-10 rounded-full cursor-pointer"
                  src="/logo.svg"
                  alt="Logotype"
                  width="130"
                  height="40"
                />
              </a>
            </Link>
          </div>
          <Link href="/app/profile">
            <a>
            <Image
            className="rounded-full cursor-pointer"
            src="/user1.jpg"
            alt={session.user.name}
            title={session.user.name}
            width="40"
            height="40"
          />
            </a>
          </Link>
        </nav>
      </header>
    );
  
  }
};

export default Navbar;
