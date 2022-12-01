import Image from "next/image";
import Hero from "@components/Hero/Hero";
import aboutPic from "../../public/about-home.jpg";
import Layout from "@components/Layout";
import { ShowAllTherapies } from "@components/Therapies/ShowAllTherapies";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid justify-center mb-8">
          <Image
            className="cursor-pointer object-contain"
            src="https://storage.googleapis.com/medint/public/promocion-diciembre-2022.png"
            width={502}
            height={502}
            alt="About"
          />
        </div>
        <div className="px-4 pb-6">
          <h1 className="text-3xl">
            Promoción Mes de Diciembre (Paquetes de terapias quiroprácticas.)
          </h1>
          <p className="text-lg pt-4">
            La quiropraxia trata de restituir a su posición normal las vértebras
            desplazadas y de este modo tratar las enfermedades que las mismas
            pueden producir. El terapeuta explora con los dedos la columna
            vertebral para identificar el lugar donde se ha producido el
            pinzamiento nervioso y subsana el desplazamiento de la vértebra
            mediante una ligera presión.
            <br></br>
            <br></br>
            La promoción consiste en 2 paquetes de terapias quiroprácticas, el
            primero consta de 5 sesiones por un valor de Q1,000.00, y el segundo
            son 10 sesiones por un valor de Q1,750.00.
          </p>
        </div>
        <section className="flex justify-center md:mb-36 md:justify-between flex-wrap-reverse lg:flex-nowrap">
          <div className="px-4 pb-6">
            <h2 className="text-3xl">Bases y condiciones</h2>
            <ul>
              <li>- Promoción válida del 1 al 31 de diciembre de 2022.</li>
              <li>- Canjeable hasta el 28 de febrero de 2023.</li>
              <li>
                - Aplica para un único paciente y no podrá ser transferida una
                vez canjeada la primera terapia o consulta.
              </li>
              <li>- Incluye primera consulta para pacientes nuevos.</li>
              <li>
                - Se atenderá solo con previa cita, dentro de los horarios de
                clínica. (Lunes a Viernes de 14:00 - 18:00 Hrs. y Sábado de 8:00
                - 12:00 Hrs.)
              </li>
              <li>- Las terapias no incluyen medicamentos.</li>
              <li>
                - Los métodos de pago son: efectivo, transferencia o tarjeta de
                crédito o débito, NO incluye recargo al pagar con tarjeta al
                contado, solo con 3, 6 y 10 cuotas incluye un recargo del 10%
                sobre el monto total.
              </li>
              <li>
                - Solo se aceptará un cambio de fecha o cancelación de cita, a
                partir de la segunda cita cancelada o cambio de fecha se
                descontará del total de las terapias pendientes.
              </li>
              <li>
                - Al iniciar las terapias se entregará una tarjeta para llevar
                el control de sus terapias.
              </li>
              <li>- No se hacen cambios ni devoluciones.</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
