import Layout from "@components/Layout"
import { useSession} from "next-auth/react";
import Image from "next/image"

const Academy = () => {
    const { data: session } = useSession();
    return (
        <Layout>
            <div className="container mx-auto pt-12">
            <h1 className="text-3xl">Academia</h1>
            {session ? <p>Accede a todos nuestros recursos educativos y empieza tu nuevo estilo de vida.</p> :<p>Inicia sesión o crea una cuenta gratis, para acceder a todos nuestros recursos educativos.</p>}
            
            <section>
                <div>
                <Image
                    src="/building.jpg"
                    alt="Building"
                    width={256}
                    height={384}
                    />
                    <h3>El uso de la aromaterapia para el tratamiento del dolor.</h3>
                    <p>En este curso se dara una breve introducción al mundo de los aceites esenciales, y se descubriran los usos de 10 aceites enfocados en el alivio del dolor.</p>
                </div>
            </section>
            </div>
        </Layout>
    );
};

export default Academy;