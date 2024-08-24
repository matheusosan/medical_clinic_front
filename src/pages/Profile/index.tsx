import { useAuth } from "../../hooks/useAuth";

function Profile() {
  const { isUserError, isUserLoading, userData } = useAuth();

  return (
    <div>
      <h2>{userData?.email}</h2>
      <h2>{userData?.birthDate}</h2>
      <h2>{userData?.cpf}</h2>
      <h2>{userData?.name}</h2>
    </div>
  );
}

export default Profile;
