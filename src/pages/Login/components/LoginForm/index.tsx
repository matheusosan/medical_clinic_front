import { KeyRound, LoaderCircle, Mail } from "lucide-react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginSchema } from "../../../../lib/hookform/hooks/useLoginForm";

interface LoginFormProps {
  handleSubmit: UseFormHandleSubmit<LoginSchema>;
  onSubmit: (data: LoginSchema) => void;
  register: UseFormRegister<LoginSchema>;
  errors: FieldErrors<LoginSchema>;
  isDisabled: boolean;
  isSubmitting: boolean;
}

export default function LoginForm({
  errors,
  isSubmitting,
  isDisabled,
  handleSubmit,
  onSubmit,
  register,
}: LoginFormProps) {
  return (
    <form
      data-testid="submit-btn"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-4 md:p-24 gap-10 rounded-xl"
    >
      <h2 className="text-2xl md:text-4xl text-center font-extrabold text-[#0b4fff]">
        Login
      </h2>
      <div className="flex flex-col gap-4">
        <label className="text-sm font-bold">E-mail</label>
        <div
          className={`flex justify-between items-center border px-4 py-1 rounded-md ${
            errors.email ? "border-red-400" : ""
          }`}
        >
          <input
            {...register("email")}
            className={`outline-none placeholder:text-sm ${
              errors.email
                ? "placeholder:text-red-400"
                : "placeholder:text-slate-600"
            }`}
            type="text"
            placeholder="Digite seu email"
          />
          <Mail
            className={`${errors.email ? "text-red-400" : "text-slate-600"}`}
            size={18}
          />
        </div>
        {errors.email?.message && (
          <p data-testid="error" className="text-red-500 text-sm">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-sm font-bold">Senha</label>
        <div
          className={`flex justify-between items-center border px-4 py-1 rounded-md ${
            errors.password ? "border-red-400" : ""
          }`}
        >
          <input
            {...register("password")}
            className={`outline-none placeholder:text-sm ${
              errors.password
                ? "placeholder:text-red-400"
                : "placeholder:text-slate-600"
            }`}
            type="password"
            placeholder="Digite sua senha"
          />
          <KeyRound
            className={` ${
              errors.password ? "text-red-400" : "text-slate-600"
            }`}
            size={18}
          />
        </div>
        {errors.password?.message && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
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
      <p>
        Não possui cadastro? Cadastre-se{" "}
        <Link className="text-[#0866FF]" to="/cadastrar">
          aqui.
        </Link>
      </p>
    </form>
  );
}
