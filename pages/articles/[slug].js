import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

const Article = () => {
  const router = useRouter();
  const slug = router.asPath.replace("/articles/", "");
  return (
    <Layout>
      <div className="container mx-auto my-12">
        <section className="">
          <h1 className="text-3xl bold uppercase">
            Como una alimentacion sana puede reducir las enfermedades cronicas
            sustancialmente
          </h1>
        </section>
        <section className="text-lg">
            Categoria, Autor, Fecha
        </section>
        <section>
            <article className="text-lg">En Medint somos un equipo multidisciplinario que
busca mantener, recuperar y rehabilitar la salud del
ser humano a través de alimentación saludabe,
ejercicios y terapias naturales (Naturopatía,
Homeopatía, Acupuntura, Masaje, Quiropraxia y
terapia neural) que procuren el bienestar del individuo
 de forma integral, logrando alcanzar un equilibrio
biopsicosocial. Utilizamos y distribuimos en su mayoría
terapias y medicamentos homeopáticos y naturales.
Se ha demostrado que tenemos en la naturaleza
recursos que pueden ayudar a potenciar, preservar y
recuperar la salud sin causar efectos secundarios
negativos.</article>
            <picture className="grid justify-center"><Image 
            alt="img"
            src="/logo.svg"
            width="300"
            height="300"
            /></picture>
            <article  className="text-lg">En Medint somos un equipo multidisciplinario que
busca mantener, recuperar y rehabilitar la salud del
ser humano a través de alimentación saludabe,
ejercicios y terapias naturales (Naturopatía,
Homeopatía, Acupuntura, Masaje, Quiropraxia y
terapia neural) que procuren el bienestar del individuo
 de forma integral, logrando alcanzar un equilibrio
biopsicosocial. Utilizamos y distribuimos en su mayoría
terapias y medicamentos homeopáticos y naturales.
Se ha demostrado que tenemos en la naturaleza
recursos que pueden ayudar a potenciar, preservar y
recuperar la salud sin causar efectos secundarios
negativos.</article>
        </section>
      </div>
    </Layout>
  );
};

export default Article;
