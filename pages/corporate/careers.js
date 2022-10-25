import Layout from "@components/Layout"

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto">
      <h1 className="text-3xl">Carreras</h1>
      <div>
        <h3>Desarrollador front-end React js</h3>
        <h4>Requisitos</h4>
        <p>- Buenas practicas en creación de documentación tecnica.</p>
        <p>- Experiencia en desarrollo front end con React JS.</p>
        <p>- Experiencia integración y consumo de APIs REST.</p>
        <p>- Inglés intermedio (Necesario para desarrollo de documentación).</p>
        <p>- Experiencia en uso de cualquier Framework para React.js (Preferiblemente Next.js)</p>
        <p>- Experiencia en Mobile First y optimización para navegadores.</p>
        <h4>Deseable</h4>
        <p>- Experiencia con Next.js</p>
        <p>- Experiencia en Mongo DB </p>
        <h4>Nuestra oferta</h4>
        <p>- Trabajo remoto</p>
        <p>- Pago mensual neto de Q6,000-Q8,000</p>
        <p>- Horario flexible.</p>
        <p>- Subsidio para compra, mantenimiento y actualización del equipo de computación.</p>
        <p>- Subsidio para pago de servicio de Internet.</p>
        <p>- Descansos y apoyo económico para estudios universitarios o técnicos.*</p>
        <p>- Consultas gratis con profesionales de la salud (Médicina, Psicología, Nutrición, etc)*.*</p>
        <p>- Apoyo de maternidad y paternidad.***</p>
        <p>- Subsidio de cursos y libros.****</p>
        <p>- Seguro médico y dental.</p>
        <p>- Bono de Navidad y Medio Año (Relativo al tiempo trabajado, un año trabajado representa un bono del 100% del pago mensual.)</p>
      </div>
      <span>*Se brindan días totalmente libres para que el contribuidor pueda dedicar completamente a sus estudios o actividades relacionadas a sus estudios, se brindaran apoyos económicos para compra de materiales solicitados en su carrera. Las carreras aplicables deben tener relación con su puesto laboral. **Aplica para consultas con profesionales que pertenezcan al equipo y dentro de las instalaciones de la empresa. Gratis las primeras consultas con cada profesional y, las reconsultas y tratamientos tendran un descuento del 15%. ***Aplica para hijos menores de 1 año y embarazos, se brinda apoyo económico con productos de primer necesidad para los infantes y descanso pre y posnatal. ****Subsidio de material educativo para reforzar o adquirir conocimientos que le sean necesarios para desempeñar su puesto de trabajo.</span>
      <p>No se ofrecen prestaciones de ley (IGGS, Bono 14, Aguinaldo, Indemnización, etc.), por ser un trabajador por cuenta ajena. Por lo que debera estar habilitado para emitir facturas. Todos los apoyos y subsidios se deberan agregar a la factura, y la empresa asumira los impuestos de la factura total (5% sobre el total).</p>
      </div>
    </Layout>
  );
};

export default Home;
