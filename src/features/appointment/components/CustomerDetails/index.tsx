import { LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDateToBrazilian } from "../../../../utils/formatters/formatDateToBrl";
import { formatPhoneNumber } from "../../../../utils/formatters/formatPhoneNumber";
import { cpfMask } from "../../../../utils/formatters/input-masks";
import type { useAppointment } from "../../hooks/useAppointment";

type CustomerDetailsProps = {
  props: ReturnType<typeof useAppointment>;
};

export default function CustomerDetails({ props }: CustomerDetailsProps) {
  return (
    <div className="flex flex-col items-center md:items-start flex-1 md:px-60 py-12 gap-10 border-r">
      <div className="flex flex-col items-center md:items-start gap-5">
        <h2 className="font-bold text-xl">Informe seu CPF</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Digite seu CPF"
            className="w-32 border-b focus:outline-none"
            {...props.register("cpf")}
            onChange={(e) => {
              const maskedValue = cpfMask(e.target.value);
              props.setValue("cpf", maskedValue);
            }}
            maxLength={14}
          />
          <button type="button" onClick={props.onSubmitCpf}>
            {props.isClientLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Buscar"
            )}
          </button>
        </div>
        {props.errors.cpf && <p>{props.errors.cpf.message}</p>}
        {props.isClientError && (
          <p className="">
            Cadastro não encontrado, cadastre-se{" "}
            <Link to={"/cadastrar"} className="text-blue-500">
              aqui.
            </Link>
          </p>
        )}
      </div>

      {props.client && !props.isClientError && (
        <>
          <div className="flex flex-col items-center md:items-start gap-2 md:gap-5">
            <h2 className="font-bold text-xl">Nome</h2>
            <p>{props.client ? props.client.name : ""}</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 md:gap-5">
            <h2 className="font-bold text-xl">Email</h2>
            <p>{props.client ? props.client.email : ""}</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 md:gap-5">
            <h2 className="font-bold text-xl">Telefone</h2>
            {props.client ? formatPhoneNumber(props.client.phoneNumber) : ""}
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 md:gap-5">
            <h2 className="font-bold text-xl">Data de nascimento</h2>
            {props.client ? formatDateToBrazilian(props.client.birthDate) : ""}
          </div>
        </>
      )}
    </div>
  );
}
