    import Image from "next/image";
import Hero from "../components/Hero/Hero";
import aboutPic from "../public/mountain.png";
import Layout from "../components/Layout"
import { ShowAllTherapies } from "../components/Therapies/ShowAllTherapies";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-12">
      <Hero />
      <section className="md:mt-36 flex justify-center md:mb-36 md:justify-between flex-wrap-reverse lg:flex-nowrap">
        <div className="">
          <Image
            className="cursor-pointer object-contain"
            src={aboutPic}
            alt="About"
          />
        </div>
        <div className="px-4 pb-6">
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
      <ShowAllTherapies />
    </div>
    </Layout>
  );
};

export default Home;
