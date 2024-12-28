import { LoaderCircle } from "lucide-react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { formatDateToBrazilian } from "../../../../utils/formatters/formatDateToBrl";
import { formatPhoneNumber } from "../../../../utils/formatters/formatPhoneNumber";
import { cpfMask } from "../../../../utils/formatters/input-masks";
import { Costumer } from "../../../profile/services";
import type { AppointmentSchema } from "../../hooks/useAppointment";

interface CustomerDetailsProps {
  client: Costumer | undefined;
  isClientLoading: boolean;
  isClientError: boolean;
  register: UseFormRegister<AppointmentSchema>;
  setValue: UseFormSetValue<AppointmentSchema>;
  handleSubmit: UseFormHandleSubmit<AppointmentSchema>;
  onSubmitCpf: () => void;
  errors: FieldErrors<AppointmentSchema>;
}

export default function CustomerDetails({
  client,
  isClientLoading,
  isClientError,
  register,
  setValue,
  onSubmitCpf,
  errors,
}: CustomerDetailsProps) {
  return (
    <div className="flex flex-col items-center md:items-start flex-1 md:px-60 py-12 gap-10 border-r">
      <div className="flex flex-col items-center md:items-start gap-5">
        <h2 className="font-bold text-xl">Informe seu CPF</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Digite seu CPF"
            className="w-32 border-b focus:outline-none"
            {...register("cpf")}
            onChange={(e) => {
              const maskedValue = cpfMask(e.target.value);
              setValue("cpf", maskedValue);
            }}
            maxLength={14}
          />
          <button type="button" onClick={onSubmitCpf}>
            {isClientLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Buscar"
            )}
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
          <div className="flex flex-col items-center md:items-start gap-2 md:gap-5">
            <h2 className="font-bold text-xl">Nome</h2>
            <p>{client ? client.name : ""}</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 md:gap-5">
            <h2 className="font-bold text-xl">Email</h2>
            <p>{client ? client.email : ""}</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 md:gap-5">
            <h2 className="font-bold text-xl">Telefone</h2>
            {client ? formatPhoneNumber(client.phoneNumber) : ""}
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 md:gap-5">
            <h2 className="font-bold text-xl">Data de nascimento</h2>
            {client ? formatDateToBrazilian(client.birthDate) : ""}
          </div>
        </>
      )}
    </div>
  );
}
