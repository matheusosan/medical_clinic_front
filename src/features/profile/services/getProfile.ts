import { getToken } from "../../../utils/token-util";

export interface ClientResponseDTO {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  birthDate: string;
  role: string;
}

export const getProfile = async (): Promise<ClientResponseDTO> => {
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
