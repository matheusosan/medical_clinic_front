import { LoaderCircle } from "lucide-react";
import Header from "../../components/Header";
import {
  LoginSchema,
  useLoginForm,
} from "../../lib/hookform/hooks/useLoginForm";
import { useLoginMutation } from "../../lib/react-query/hooks/useLoginMutation";

function Login() {
  const { handleSubmit, register, errors, isSubmitting } = useLoginForm();
  const { mutate, isPending } = useLoginMutation();

  const onSubmit = (data: LoginSchema) => {
    mutate(data);
  };
  const isDisabled = isPending || isSubmitting;

  return (
    <div className="flex justify-center min-h-screen w-full items-center">
      <Header />
      <form
        data-testid="submit-btn"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-12 mt-8 gap-6 rounded-xl border border-slate-200"
      >
        <h2 className="text-2xl font-bold">Fazer login</h2>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">E-mail</label>
          <input
            {...register("email")}
            className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
            type="text"
            placeholder="Digite seu email"
          />
          {errors.email?.message && (
            <p data-testid="error" className="text-red-500 mt-2 text-sm px-4">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold">Senha</label>
          <input
            {...register("password")}
            className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
            type="password"
            placeholder="Digite sua senha"
          />
          {errors.password?.message && (
            <p className="text-red-500 mt-2 text-sm px-4">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          disabled={isDisabled}
          className={`font-bold text-white h-12 py-2 px-6 rounded-lg bg-[#0B4FFF] ${
            isDisabled ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Entrar"}
        </button>
      </form>
    </div>
  );
}

export default Login;