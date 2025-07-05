import { KeyRound, LoaderCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

type LoginProps = {
  props: ReturnType<typeof useLogin>;
};

export default function LoginForm({ props }: LoginProps) {
  return (
    <form
      data-testid="submit-btn"
      onSubmit={props.handleSubmit(props.onSubmit)}
      className="flex flex-col p-4 md:p-24 gap-10 rounded-xl"
    >
      <h2 className="text-2xl md:text-4xl text-center font-extrabold text-[#0b4fff]">
        Login
      </h2>
      <div className="flex flex-col gap-4">
        <label className="text-sm font-bold">E-mail</label>
        <div
          className={`flex justify-between items-center border px-4 py-1 rounded-md ${
            props.errors.email ? "border-red-400" : ""
          }`}
        >
          <input
            {...props.register("email")}
            className={`outline-none placeholder:text-sm ${
              props.errors.email
                ? "placeholder:text-red-400"
                : "placeholder:text-slate-600"
            }`}
            type="text"
            placeholder="Digite seu email"
          />
          <Mail
            className={`${
              props.errors.email ? "text-red-400" : "text-slate-600"
            }`}
            size={18}
          />
        </div>
        {props.errors.email?.message && (
          <p data-testid="error" className="text-red-500 text-sm">
            {props.errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-sm font-bold">Senha</label>
        <div
          className={`flex justify-between items-center border px-4 py-1 rounded-md ${
            props.errors.password ? "border-red-400" : ""
          }`}
        >
          <input
            {...props.register("password")}
            className={`outline-none placeholder:text-sm ${
              props.errors.password
                ? "placeholder:text-red-400"
                : "placeholder:text-slate-600"
            }`}
            type="password"
            placeholder="Digite sua senha"
          />
          <KeyRound
            className={` ${
              props.errors.password ? "text-red-400" : "text-slate-600"
            }`}
            size={18}
          />
        </div>
        {props.errors.password?.message && (
          <p className="text-red-500 text-sm">
            {props.errors.password.message}
          </p>
        )}
      </div>

      <button
        disabled={props.isDisabled}
        className={`font-bold text-white h-12 py-2 px-6 rounded-lg bg-[#0B4FFF] ${
          props.isDisabled ? "opacity-80 cursor-not-allowed" : ""
        }`}
      >
        {props.isSubmitting ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          "Entrar"
        )}
      </button>
      <p>
        Não possui cadastro? Cadastre-se{" "}
        <Link className="text-[#0866FF]" to="/cadastrar">
          aqui.
        </Link>
      </p>
    </form>
  );
}
