import { Link } from "react-router-dom";
import { useCpfForm } from "../../../../lib/hookform/hooks/useCpfForm";
import { useGetClientByCpfQuery } from "../../../../lib/react-query/hooks/useGetClientByCpfQuery";

export default function CustomerDetails() {
  const { register, handleSubmit, errors, cpfInput } = useCpfForm();
  const {
    data: client,
    isLoading: isClientLoading,
    isError: isClientError,
    refetch,
  } = useGetClientByCpfQuery(cpfInput);

  const onSubmit = () => {
    if (!errors.cpf) {
      refetch();
    }
  };

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
            {isClientLoading ? "Buscando" : "Buscar"}
          </button>
        </div>
        {errors.cpf && <p>{errors.cpf.message}</p>}
        {isClientError && (
          <p className="">
            Cadastro não encontrado, cadastre-se{" "}
            <Link to={"/cadastrar"} className="text-blue-500">
              aqui.
            </Link>
          </p>
        )}
      </div>

      {client && !isClientError && (
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
