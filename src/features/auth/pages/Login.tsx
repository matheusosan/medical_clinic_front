import Header from "../../../components/Header";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const data = useLogin();
  useAuth();

  return (
    <>
      <main className="flex flex-col w-full h-screen">
        <Header />
        <div className="flex justify-center h-[70%] w-full">
          <LoginForm props={data} />
        </div>
      </main>
    </>
  );
}

export default Login;
