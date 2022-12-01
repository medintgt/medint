import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Article from "../../components/Articles/Article";

const ArticlePage = () => {
  const articleHeader = ["Como una alimentacion sana puede reducir las enfermedades cronicas sustancialmente","Salud","Elmer Chanquin","23/12/1999"]
  const articleContent = [
    {
      id:"0",
      type: "0",
      content:
        "En Medint somos un equipo multidisciplinario que busca mantener, recuperar y rehabilita la salud del ser humano a traves de alimentacion saludable, ejercicios y terapias naturales. En Medint somos un equipo multidisciplinario que busca mantener, recuperar y rehabilita la salud del ser humano a traves de alimentacion saludable, ejercicios y terapias naturales. En Medint somos un equipo multidisciplinario que busca mantener, recuperar y rehabilita la salud del ser humano a traves de alimentacion saludable, ejercicios y terapias naturales. En Medint somos un equipo multidisciplinario que busca mantener, recuperar y rehabilita la salud del ser humano a traves de alimentacion saludable, ejercicios y terapias naturales. En Medint somos un equipo multidisciplinario que busca mantener, recuperar y rehabilita la salud del ser humano a traves de alimentacion saludable, ejercicios y terapias naturales.",
    },
    { 
      id:"1",
      type: "1",
      content: "/logo.svg" },
    {
      id:"2",
      type: "0",
      content:
        "que procuren el bienestar del individuo de forma integral, logrando alcanzar un equilibrio biopsicosial. Utilizamos y distribuimos en su mayoria terapias y medicamentos homeopaticos y naturales.",
    },
    {
      id:"3",
      type: "0",
      content:
        "Se ha demostrado que tenemos en la naturaleza recursos que pueden ayudar a potenciar, preservar y recuperar la salud sin causar efectos secundarios negativos.",
    },
    { 
      id:"4",
      type: "2", content: "/video.mp4" },
  ];

  const router = useRouter();
  const slug = router.asPath.replace("/articles/", "");
  return (
    <Layout>
      <div className="container mx-auto my-12">
        <section className="">
          <h1 className="text-3xl bold uppercase">
            {articleHeader[0]}
          </h1>
        </section>
        <section className="text-lg">Categoria: {articleHeader[1]}, Autor: {articleHeader[2]}, Fecha: {articleHeader[3]}</section>
        <section>
          {articleContent.map((content) => {
            if (content.type == "0") {
              return <Article key={content.id} text={content.content} />;
            } else {
              return <Article key={content.id} text={content.content} />;
            }
          })}
        </section>
      </div>
    </Layout>
  );
};

export default ArticlePage;
