import { getToken } from "../../../utils/token-util";
import { ApiResponseDto } from "./../../../domain/dtos/ApiResponseDto";
import { ClientResponseDTO } from "./../../../domain/dtos/clients/ClientResponseDTO";

export const getProfile = async (): Promise<
  ApiResponseDto<ClientResponseDTO>
> => {
  const token = getToken();

  if (!token) {
    throw new Error("Token não encontrado");
  }

  const res = await fetch(`${import.meta.env.VITE_API_URL}client/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Falha ao buscar perfil do usuário");
  }

  const data = await res.json();
  return data;
};
