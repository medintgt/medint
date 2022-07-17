import Title from "@components/Admin/Title"
import ImportantInfo from "@components/Admin/Cards/ImportantInfo"
import LayoutAdmin from "@components/LayoutAdmin"

const Profile = () => {
    return (
        <LayoutAdmin>
        <div className="container mx-auto grid justify-center">
            <Title title="Profile" src="/dashboard" breadcrumb="Dashboard"/>
            <ImportantInfo value1="12312031" value2="Traumeel S" />
        </div>
        </LayoutAdmin>
    );
};

export default Profile;