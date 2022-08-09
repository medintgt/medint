import { TherapieCard } from "./Elements/TherapieCard";

export const ShowAllTherapies = () => {
  return (
    <section className="px-4 my-12 md:mt-0">
      <div>
        <h2 className="text-3xl">Terapias</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:px-24 gap-4">
        <TherapieCard
          title="Masaje"
          description="Es una forma de manipular el cuerpo a través de una presión con las manos, puede ser de una forma suave o intensa. Lo que se busca a través de estas manipulaciones o masajes es que el paciente sienta beneficios de relajación, reducción del dolor y estrés."
        />
        <TherapieCard
          title="Terapia Manual"
          description="Son técnicas que se utilizan para ayudar al paciente a través de manipular el cuerpo por medio de ejercicios o estiramientos del cuerpo y masaje neuromuscular, ayudando a aliviar dolor muscular y articular, se utiliza en personas con problemas de espalda (columna vertebral), dolor intenso en músculos y problemas del nervio ciático"
        />
        <TherapieCard
          title="Ventosas"
          description="Se utilizan para ayudar a los pacientes a mejorar la tensión muscular, baja inflamación y ayuda a tener una mejor circulación sanguínea. Se pueden usar en cualquier área del cuerpo que no presente síntomas de varices, heridas y fracturas, también debe evitarse poner a personas embarazada, con fiebres o sobre fracturas."
        />
        <TherapieCard
          title="Mesoterapia"
          description="Es una técnica que se utiliza por medio de pequeñas agujas, inyectando medicamentos homeopáticos sobre la capa de la piel, es utilizado para quitar o aliviar dolores musculares. También se usa en tratamientos estéticos."
        />
        <TherapieCard
          title="Terapia Neural"
          description="Sirve para estimular la autocuración del cuerpo por medio de inyecciones en puntos específicos del sistema nervioso, se puede aplicar en heridas o cicatrices que el paciente tenga por tiempo prolongado que provocan irritación que podrían ser detonantes en algunas enfermedades. La terapia neural logra muchas veces una mejoría inmediata y a veces hay que repetir la dosis hasta llegar a quitar los síntomas del dolor o molestias. Se puede aplicar en niños, mujeres embarazadas y cualquier persona."
        />
      </div>
    </section>
  );
};
