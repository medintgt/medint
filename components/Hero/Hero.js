import Image from "next/image";
import heroPic from "../../public/hero.png";
import PrimaryButton from "../Button/Primary";
import SecondaryButton from "../Button/Secondary";

const Hero = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="pb-24">
        <h1 className="text-4xl font-extrabold my-2 text-center md:text-left">Un estilo de vida saludable</h1>
        <h2 className="text-2xl my-2 text-center md:text-left">
          Tu cuerpo y mente necesitan un estilo de vida nuevo.
        </h2>
        <div className="my-8 flex justify-center md:justify-start">
          <PrimaryButton
          text="Empezar ahora"
          link="/"
          />
          
          <SecondaryButton
          text="Conocer más"
          link="/"
          />
        </div>
      </div>
      <div className="hidden md:inline">
      <Image
        className="cursor-pointer object-contain"
        src="https://storage.googleapis.com/medint/public/home.jpg"
        alt="Hero"
        width="600"
        height="600"
      />
      </div>
    </div>
  );
};

export default Hero;
