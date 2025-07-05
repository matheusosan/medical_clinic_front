import Header from "../../../components/Header";
import UserAppointments from "../components/UserAppointments";
import UserDetails from "../components/UserDetails";
import { useProfile } from "../hooks/useProfile";

function Profile() {
  const data = useProfile();

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row h-screen w-full items-center">
        <UserDetails props={data} />
        <UserAppointments props={data} />
      </div>
    </>
  );
}

export default Profile;
