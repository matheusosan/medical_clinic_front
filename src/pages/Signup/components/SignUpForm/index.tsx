import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { SignupSchema } from "../../../../lib/hookform/hooks/useSignuForm";
import { cpfMask } from "../../../../utils/input-masks";

interface SignUpFormProps {
  isSubmitting: boolean;
  errors: FieldErrors<SignupSchema>;
  handleSubmit: UseFormHandleSubmit<SignupSchema>;
  onSubmit: (data: SignupSchema) => void;
  register: UseFormRegister<SignupSchema>;
  setValue: UseFormSetValue<SignupSchema>;
}

export default function SignUpForm({
  isSubmitting,
  errors,
  handleSubmit,
  onSubmit,
  register,
  setValue,
}: SignUpFormProps) {
  return (
    <form
      data-testid="submit-btn"
      onSubmit={handleSubmit(onSubmit)}
      className="flex md:w-[450px] flex-col p-0 md:p-12 mt-4 gap-6 rounded-xl "
    >
      <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">CPF</label>
        <input
          {...register("cpf")}
          className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
          type="text"
          placeholder="Digite seu CPF"
          onChange={(e) => {
            const maskedValue = cpfMask(e.target.value);
            setValue("cpf", maskedValue);
          }}
        />
        {errors.cpf?.message && (
          <p className="text-red-500 mt-2 text-sm">{errors.cpf.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">Senha</label>
        <input
          {...register("password")}
          className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
          type="password"
          placeholder="Crie uma senha"
        />
        {errors.password?.message && (
          <p className="text-red-500 mt-2 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">Email</label>
        <input
          {...register("email")}
          className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
          type="text"
          placeholder="Digite seu email"
        />
        {errors.email?.message && (
          <p className="text-red-500 mt-2 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex justify-between w-full gap-2">
        <Link
          to={"/"}
          className="flex items-center justify-center font-bold h-12 py-2 px-6 rounded-lg text-[#0B4FFF] border border-[#0B4FFF]"
        >
          Cancelar
        </Link>
        <button className="font-bold text-white h-12 py-2 px-6 rounded-lg bg-[#0B4FFF]">
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </button>
      </div>
    </form>
  );
}
