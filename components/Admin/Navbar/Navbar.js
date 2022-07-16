import React from "react";
import Link from "next/link";
import Image from "next/image";
import ToogleMenu from "./ToogleMenu";

const Navbar = () => {
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
        <Link href="/profile">
          <a>
            <Image
              className="w-10 h-10 z-8 rounded-full cursor-pointer"
              src="/user1.jpg"
              alt="User"
              width="40"
              height="40"
            />
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
