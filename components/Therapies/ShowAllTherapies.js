import { TherapieCard } from "./Elements/TherapieCard";

export const ShowAllTherapies = () => {
  return (
    <section className="px-4 my-12 md:mt-0">
      <div>
        <h2 className="text-3xl">Terapias</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:px-24 gap-4">
        <TherapieCard
        image="/massage.jpg"
          title="Masaje"
          description="Técnica utilizada para relajar, mejorar circulación, reducir inflamación y aliviar el dolor, en enfermedades reumáticas."
        />
        <TherapieCard
        image="/manual-therapy.jpg"
          title="Terapia Manual"
          description="Conjunto de técnicas y maniobras que mediante la manipulación de tejidos corporales que buscan promover la reparación tisular."
        />
        <TherapieCard
        image="/cupping.jpg"
          title="Ventosas"
          description="Aplicación de ventosas sobre la piel, con la finalidad de crear un vacío al succionar lo que provoca hiperemia local."
        />
        <TherapieCard
        image="/meso.jpg"
          title="Mesoterapia"
          description="Técnica de medicina alternativa que consiste en inyectar medicamentos específicos en muy pequeñas dosis en la capa media de la piel con la finalidad de combatir el dolor."
        />
        <TherapieCard
          image="/massage.jpg"
          title="Terapia Neural"
          description="Corrige las alteraciones bioeléctricas del organismo enfermo que, como las bioquímicas, participan en la pérdida de la salud"
        />
      </div>
    </section>
  );
};
