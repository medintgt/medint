import Layout from "@components/Layout";
import { ShowAllTherapies } from "@components/Therapies/ShowAllTherapies";

const Therapies = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-12">
      <ShowAllTherapies />
     </div>
    </Layout>
  );
};

export default Therapies;
