import { Link } from "react-router-dom";
import Camera from "../../components/Camera";
import Header from "../../components/Header";
import {
  SignupSchema,
  useSignupForm,
} from "../../lib/hookform/hooks/useSignuForm";
import { useSignupMutation } from "../../lib/react-query/hooks/useSignUpMutation";

export default function Signup() {
  const { errors, handleSubmit, isSubmitting, register } = useSignupForm();
  const { mutate } = useSignupMutation();

  const onSubmit = (data: SignupSchema) => {
    mutate(data);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full min-h-screen mt-24 py-8">
        <h2 className="text-4xl font-extrabold">
          Realize seu <span className="text-[#0b4fff]">Cadastro</span>
        </h2>

        <div className="flex gap-24 items-center">
          <form
            data-testid="submit-btn"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 flex-col p-12 mt-8 gap-6 rounded-xl border border-slate-200"
          >
            <div className="flex flex-col">
              <label className="text-sm font-bold">Nome</label>
              <input
                {...register("name")}
                className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
                type="text"
                placeholder="Digite seu nome"
              />
              {errors.name?.message && (
                <p data-testid="error" className="text-red-500 mt-2 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold">Data de nascimento</label>
              <input
                {...register("birthDate")}
                className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
                type="date"
                placeholder="Digite sua data de nascimento"
              />
              {errors.birthDate?.message && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.birthDate.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold">CPF</label>
              <input
                {...register("cpf")}
                className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
                type="text"
                placeholder="Digite seu CPF"
              />
              {errors.cpf?.message && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.cpf.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold">Número de telefone</label>
              <input
                {...register("phoneNumber")}
                className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
                type="text"
                placeholder="Digite seu número de telefone"
              />
              {errors.phoneNumber?.message && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold">Email</label>
              <input
                {...register("email")}
                className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
                type="text"
                placeholder="Digite seu email"
              />
              {errors.email?.message && (
                <p className="text-red-500 mt-2 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex justify-between w-full">
              <Link
                to="/"
                className="flex items-center border border-[#0b4fff] h-12 py-2 px-6 rounded-lg text-[#0b4fff]"
              >
                Cancelar
              </Link>
              <button className="font-bold text-white h-12 py-2 px-6 rounded-lg bg-[#0B4FFF]">
                {isSubmitting ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>
          </form>
          <Camera />
        </div>
      </main>
    </>
  );
}
