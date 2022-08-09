import Image from "next/image";
import Hero from "../components/Hero/Hero";
import aboutPic from "../public/mountain.png";
import Layout from "../components/Layout";
import { ShowAllTherapies } from "../components/Therapies/ShowAllTherapies";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto mb-8 pt-12">
        <h1 className="text-3xl">
          {" "}
          Política de privacidad de Bienestar Integral S.A.
        </h1>
        <p>
          Esta Política de privacidad describe cómo se recopila, utiliza y
          comparte su información personal cuando visita o hace una compra en
          https://medint.gt (denominado en lo sucesivo el “Sitio”).
        </p>
        <p className="mt-4 text-lg font-bold">
          INFORMACIÓN PERSONAL QUE RECOPILAMOS
        </p>
        <p>
          Cuando visita el Sitio, recopilamos automáticamente cierta información
          sobre su dispositivo, incluida información sobre su navegador web,
          dirección IP, zona horaria y algunas de las cookies que están
          instaladas en su dispositivo. Además, a medida que navega por el
          Sitio, recopilamos información sobre las páginas web individuales o
          los productos que ve, las páginas web o los términos de búsqueda que
          lo remitieron al Sitio e información sobre cómo interactúa usted con
          el Sitio. Nos referimos a esta información recopilada automáticamente
          como “Información del dispositivo”. Recopilamos Información del
          dispositivo mediante el uso de las siguientes tecnologías:
        </p>
        <p className="mt-4 text-lg font-bold">COOKIES</p>
        <p>
          Aquí tienes una lista de cookies que utilizamos. Las enlistamos para
          que puedas elegir si quieres optar por quitarlas o no. _session_id,
          unique token, sessional, Allows Shopify to store information about
          your session (referrer, landing page, etc). storefront_digest, unique
          token, indefinite If the shop has a password, this is used to
          determine if the current visitor has access. - Los “Archivos de
          registro” rastrean las acciones que ocurren en el Sitio y recopilan
          datos, incluyendo su dirección IP, tipo de navegador, proveedor de
          servicio de Internet, páginas de referencia/salida y marcas de
          fecha/horario. - Las “balizas web”, las “etiquetas” y los “píxeles”
          son archivos electrónicos utilizados para registrar información sobre
          cómo navega usted por el Sitio. Además, cuando hace una compra o
          intenta hacer una compra a través del Sitio, recopilamos cierta
          información de usted, entre la que se incluye su nombre, dirección de
          facturación, dirección de envío, información de pago (incluidos los
          números de la tarjeta de crédito [[INSERTAR CUALQUIER OTRO TIPO DE
          PAGO ACEPTADO]]), dirección de correo electrónico y número de
          teléfono. Nos referimos a esta información como “Información del
          pedido”. Cuando hablamos de “Información personal” en la presente
          Política de privacidad, nos referimos tanto a la Información del
          dispositivo como a la Información del pedido.
        </p>
        <p className="mt-4 text-lg font-bold">
          ¿CÓMO UTILIZAMOS SU INFORMACIÓN PERSONAL?
        </p>
        <p>
          Usamos la Información del pedido que recopilamos en general para
          preparar los pedidos realizados a través del Sitio (incluido el
          procesamiento de su información de pago, la organización de los envíos
          y la entrega de facturas y/o confirmaciones de pedido). Además,
          utilizamos esta Información del pedido para: comunicarnos con usted;
          examinar nuestros pedidos en busca de fraudes o riesgos potenciales; y
          cuando de acuerdo con las preferencias que usted compartió con
          nosotros, le proporcionamos información o publicidad relacionada con
          nuestros productos o servicios. Utilizamos la Información del
          dispositivo que recopilamos para ayudarnos a detectar posibles riesgos
          y fraudes (en particular, su dirección IP) y, en general, para mejorar
          y optimizar nuestro Sitio (por ejemplo, al generar informes y
          estadísticas sobre cómo nuestros clientes navegan e interactúan con el
          Sitio y para evaluar el éxito de nuestras campañas publicitarias y de
          marketing).
        </p>
        <p className="mt-4 text-lg font-bold">NO RASTREAR</p>
        <p>
          Tenga en cuenta que no alteramos las prácticas de recopilación y uso
          de datos de nuestro Sitio cuando vemos una señal de No rastrear desde
          su navegador.
        </p>
        <p className="mt-4 text-lg font-bold">RETENCIÓN DE DATOS</p>
        <p>
          Cuando realiza un pedido a través del Sitio, mantendremos su
          Información del pedido para nuestros registros a menos que y hasta que
          nos pida que eliminemos esta información.
        </p>
        <p className="mt-4 text-lg font-bold">MENORES</p>
        <p>
          El sitio no está destinado a personas menores de 13 años, sin emabargo
          si podra ser utilizado para el ingreso de datos de menores con
          autorización de los tutores legales.
        </p>
        <p className="mt-4 text-lg font-bold">CAMBIOS</p>
        <p>
          Podemos actualizar esta política de privacidad periódicamente para
          reflejar, por ejemplo, cambios en nuestras prácticas o por otros
          motivos operativos, legales o reglamentarios.
        </p>
        <p className="mt-4 text-lg font-bold">CONTÁCTENOS</p>
        <p>
          Para obtener más información sobre nuestras prácticas de privacidad,
          si tiene alguna pregunta o si desea presentar una queja, contáctenos
          por correo electrónico a admin@medint.gt o por correo mediante el uso
          de la información que se proporciona a continuación: 3º Avenida 24-72
          Zona 3, Guatemala, GUA, 01003, Guatemala
        </p>
      </div>
    </Layout>
  );
};

export default Home;
