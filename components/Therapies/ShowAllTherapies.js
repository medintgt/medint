import { TherapieCard } from "./Elements/TherapieCard";

export const ShowAllTherapies = () => {
  return (
    <section className="px-4 my-12 md:mt-0">
      <div>
        <h2 className="text-3xl">Terapias</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:px-24 gap-4">
        <TherapieCard title="Terapias" description="Técnica utilizada para relajar, mejorar circulación, reducir inflamación y aliviar el dolor, en enfermedades reumáticas." />
        <TherapieCard title="Terapias" description="Técnica utilizada para relajar, mejorar circulación, reducir inflamación y aliviar el dolor, en enfermedades reumáticas." />
          <TherapieCard title="Terapias" description="Técnica utilizada para relajar, mejorar circulación, reducir inflamación y aliviar el dolor, en enfermedades reumáticas." />
          <TherapieCard title="Terapias" description="Técnica utilizada para relajar, mejorar circulación, reducir inflamación y aliviar el dolor, en enfermedades reumáticas." />
      </div>
    </section>
  );
};
