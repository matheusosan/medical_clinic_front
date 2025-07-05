import Header from "../../../components/Header";
import SignUpForm from "../components/SignUpForm";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const data = useSignup();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full min-h-screen py-8">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          Realize seu <span className="text-[#0b4fff]">Cadastro</span>
        </h2>

        <div className="flex gap-24 items-center">
          <SignUpForm props={data} />
        </div>
      </main>
    </>
  );
}
