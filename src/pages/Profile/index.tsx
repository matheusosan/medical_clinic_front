import Header from "../../components/Header";
import UserAppointments from "./components/UserAppointments";
import UserDetails from "./components/UserDetails";
import { useProfile } from "./hooks/useProfile";

function Profile() {
  const {
    sortBy,
    userData,
    isUserLoading,
    appointments,
    isAppointmentsLoading,
    isPending,
    mutate,
    setSortBy,
  } = useProfile();

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row h-screen w-full items-center">
        <UserDetails isUserLoading={isUserLoading} userData={userData} />

        <UserAppointments
          appointments={appointments}
          isAppointmentsLoading={isAppointmentsLoading}
          isPending={isPending}
          mutate={mutate}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
      </div>
    </>
  );
}

export default Profile;
