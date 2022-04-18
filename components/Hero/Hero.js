import Image from "next/image";

const Hero = () => {
    return (
        <div className="w-full hero grid justify-center">
        <Image
          className="cursor-pointer object-contain block"
          src="/mountain.png"
          alt="Hero"
          width="1920"
          height="960"
        />
              <h1 className="text-3xl hero-title border-t-4 border-main -mt-96 z-10 mx-96 p-8 text-center">Aprende sobre lorem 
ipsum en menos de lo
que canta un gallo</h1>
      </div>
    );
};

export default Hero;