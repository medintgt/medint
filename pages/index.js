import Image from "next/image";
import Hero from "../components/Hero/Hero";
import aboutPic from "../public/mountain.png";
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-12">
      <Hero />
      <section className="md:pt-36 flex justify-center md:justify-between flex-wrap-reverse md:flex-nowrap">
        <div className="">
          <Image
            className="cursor-pointer object-contain"
            src={aboutPic}
            alt="About"
          />
        </div>
        <div className="p-4 pl-12 w-3/4">
          <h2 className="text-3xl">Conócenos</h2>
          <p className="text-lg pt-4">
            En Medint somos un equipo multidisciplinario que busca mantener,
            recuperar y rehabilitar la salud del ser humano a través de
            alimentación saludabe, ejercicios y terapias naturales (Naturopatía,
            Homeopatía, Acupuntura, Masaje, Quiropraxia y terapia neural) que
            procuren el bienestar del individuo de forma integral, logrando
            alcanzar un equilibrio biopsicosocial. Utilizamos y distribuimos en
            su mayoría terapias y medicamentos homeopáticos y naturales. Se ha
            demostrado que tenemos en la naturaleza recursos que pueden ayudar a
            potenciar, preservar y recuperar la salud sin causar efectos
            secundarios negativos.
          </p>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Home;
