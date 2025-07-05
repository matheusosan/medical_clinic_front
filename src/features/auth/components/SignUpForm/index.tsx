import { Link } from "react-router-dom";
import { cpfMask } from "../../../../utils/formatters/input-masks";
import { useSignup } from "../../hooks/useSignup";

type SignupProps = {
  props: ReturnType<typeof useSignup>;
};

export default function SignUpForm({ props }: SignupProps) {
  return (
    <form
      data-testid="submit-btn"
      onSubmit={props.handleSubmit(props.onSubmit)}
      className="flex md:w-[450px] flex-col p-0 md:p-12 mt-4 gap-6 rounded-xl "
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">Nome</label>
        <input
          {...props.register("name")}
          className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
          type="text"
          placeholder="Digite seu nome"
        />
        {props.errors.name?.message && (
          <p data-testid="error" className="text-red-500 mt-2 text-sm">
            {props.errors.name.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">Data de nascimento</label>
        <input
          {...props.register("birthDate")}
          className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
          type="date"
          placeholder="Digite sua data de nascimento"
        />
        {props.errors.birthDate?.message && (
          <p className="text-red-500 mt-2 text-sm">
            {props.errors.birthDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">CPF</label>
        <input
          {...props.register("cpf")}
          className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
          type="text"
          placeholder="Digite seu CPF"
          onChange={(e) => {
            const maskedValue = cpfMask(e.target.value);
            props.setValue("cpf", maskedValue);
          }}
        />
        {props.errors.cpf?.message && (
          <p className="text-red-500 mt-2 text-sm">
            {props.errors.cpf.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">Senha</label>
        <input
          {...props.register("password")}
          className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
          type="password"
          placeholder="Crie uma senha"
        />
        {props.errors.password?.message && (
          <p className="text-red-500 mt-2 text-sm">
            {props.errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">Número de telefone</label>
        <input
          {...props.register("phoneNumber")}
          className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
          type="text"
          placeholder="Digite seu número de telefone"
        />
        {props.errors.phoneNumber?.message && (
          <p className="text-red-500 mt-2 text-sm">
            {props.errors.phoneNumber.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">Email</label>
        <input
          {...props.register("email")}
          className="outline-none px-4 py-1 rounded-md border placeholder:text-base placeholder:text-slate-600"
          type="text"
          placeholder="Digite seu email"
        />
        {props.errors.email?.message && (
          <p className="text-red-500 mt-2 text-sm">
            {props.errors.email.message}
          </p>
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
          {props.isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </button>
      </div>
    </form>
  );
}
