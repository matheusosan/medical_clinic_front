import Cookies from "js-cookie";

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
  const token = Cookies.get("access_token");
  console.log(token);

  if (!token) {
    throw new Error("Token não encontrado");
  }

  const res = await fetch("http://localhost:8080/client/profile", {
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
