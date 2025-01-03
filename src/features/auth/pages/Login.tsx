import Header from "../../../components/Header";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { errors, isDisabled, isSubmitting, handleSubmit, onSubmit, register } =
    useLogin();

  useAuth();

  return (
    <>
      <main className="flex flex-col w-full h-screen">
        <Header />
        <div className="flex justify-center h-[70%] w-full">
          <LoginForm
            errors={errors}
            handleSubmit={handleSubmit}
            isDisabled={isDisabled}
            isSubmitting={isSubmitting}
            onSubmit={onSubmit}
            register={register}
          />
        </div>
      </main>
    </>
  );
}

export default Login;
