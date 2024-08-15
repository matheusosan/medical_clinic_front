import { Link } from "react-router-dom";
import { useCostumer } from "../../../../hooks/useCostumer";

export default function CustomerDetails() {
  const { register, isError, isLoading, handleSubmit, onSubmit, client } =
    useCostumer();

  return (
    <div className="flex flex-col flex-1 px-60 py-12 gap-10 border-r">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-xl">Informe seu CPF</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Digite seu CPF"
            className="w-32 border-b focus:outline-none"
            {...register("cpf")}
          />
          <button onClick={handleSubmit(onSubmit)}>
            {isLoading ? "Buscando" : "Buscar"}
          </button>
        </div>
        {isError && (
          <p className="">
            Cadastro não encontrado, cadastre-se{" "}
            <Link to={"/cadastrar"} className="text-blue-500">
              aqui.
            </Link>
          </p>
        )}
      </div>

      {client && !isError && (
        <>
          <div className="gap-5">
            <h2 className="font-bold text-xl">Nome</h2>
            <p>{client ? client.name : ""}</p>
          </div>

          <div className="gap-5">
            <h2 className="font-bold text-xl">Email</h2>
            <p>{client ? client.email : ""}</p>
          </div>

          <div className="gap-5">
            <h2 className="font-bold text-xl">Telefone</h2>
            {client ? client.phoneNumber : ""}
          </div>

          <div className="gap-5">
            <h2 className="font-bold text-xl">Data de Nascimento</h2>
            {client ? client.birthDate : ""}
          </div>
        </>
      )}
    </div>
  );
}
