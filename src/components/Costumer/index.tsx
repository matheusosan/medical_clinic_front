import { useCostumer } from "../../hooks/useCostumer";

export default function Costumer() {
  const { setCpf, isError, error, data, isLoading, handleClick } =
    useCostumer();

  return (
    <div className="flex flex-col flex-1 px-60 py-12 gap-10 border-r">
      <div className="gap-5">
        <h2 className="font-bold text-xl">Informe seu CPF</h2>
        <input
          type="text"
          name=""
          id=""
          placeholder="___.___.__-__"
          className="w-auto"
          onChange={(e) => setCpf(e.target.value)}
        />
        <button onClick={handleClick}>
          {isLoading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {isError && <p className="text-red-500">{error?.message}</p>}

      <div className="gap-5">
        <h2 className="font-bold text-xl">Nome</h2>
        <p>{data ? data.name : "Qualquer"}</p>
      </div>

      <div className="gap-5">
        <h2 className="font-bold text-xl">Email</h2>
        <p>{data ? data.email : "Qualquer"}</p>
      </div>

      <div className="gap-5">
        <h2 className="font-bold text-xl">Telefone</h2>
        {data ? data.phoneNumber : "Qualquer"}
      </div>
    </div>
  );
}
