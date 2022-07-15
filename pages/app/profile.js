import Title from "@components/Title"
import ImportantInfo from "@components/Cards/ImportantInfo"
const Profile = () => {
    return (
        <div className="container mx-auto grid justify-center">
            <Title title="Profile" src="/dashboard" breadcrumb="Dashboard"/>
            <ImportantInfo value1="12312031" value2="Traumeel S" />
        </div>
    );
};

export default Profile;