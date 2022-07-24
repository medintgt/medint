import Title from "@components/Admin/Title";
import LayoutAdmin from "@components/LayoutAdmin";

const Profile = () => {
  return (
    <LayoutAdmin>
      <div className="container mx-auto grid justify-center w-96">
        <Title title="Perfil" src="/" breadcrumb="Escritorio" />
      </div>
    </LayoutAdmin>
  );
};

export default Profile;
