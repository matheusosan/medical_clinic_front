import Cookies from "js-cookie";
export interface Costumer {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  birthDate: string;
}

export const findCostumerByCpf = async (cpf: string) => {
  const res = await fetch(`http://localhost:8080/client/cpf/${cpf}`);
  if (!res.ok) {
    throw new Error("Client not found");
  }

  return res.json();
};

export const createClient = async (clientData: Costumer) => {
  return await fetch("http://localhost:8080/client", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clientData),
  });
};
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
