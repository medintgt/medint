import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const PromotionCardPage = () => {
  const router = useRouter();
  const slug = router.asPath.replace("/promotions-cards/", "");
  return (
    <Layout>
      <div className="container mx-auto">
        <section className="">
          <h1 className="text-3xl bold uppercase">
            Tarjeta de promoción
          </h1>
          <p>Promoción: Paquete de 10 masajes quiropracticos, diciembre 2022.</p>
          <p>Estado de la tarjeta: Valida</p>
          <p>Código: {slug}</p>
          <p>Canjes disponibles: 9</p>
          <p>Vigencia: 07-08-2022 al 28-02-2023</p>
          <p>Notas:</p>
        </section>
      </div>
    </Layout>
  );
};

export default PromotionCardPage;
