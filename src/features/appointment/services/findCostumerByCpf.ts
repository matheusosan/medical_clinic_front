import { cleanCpf } from "../../../utils/formatters/input-masks";
import { ApiResponseDto } from "./../../../domain/dtos/ApiResponseDto";
import { ClientResponseDTO } from "./../../../domain/dtos/clients/ClientResponseDTO";

export const findCostumerByCpf = async (
  cpf: string
): Promise<ApiResponseDto<ClientResponseDTO>> => {
  const cpfValue = cleanCpf(cpf);

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}client/cpf/${cpfValue}`
  );
  if (!res.ok) {
    throw new Error("Client not found");
  }

  return res.json();
};
