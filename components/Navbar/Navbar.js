import react from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="container mx-auto p-4">
            <nav>
            <Image
                className="cursor-pointer"
                src="/logo.svg"
                alt="Medint Logo"
                width="250"
                height="76.82"
              />
              </nav>
        </div>
    )
}

export default Navbar