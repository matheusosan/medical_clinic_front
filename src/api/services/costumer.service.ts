import { ErrorResponseDTO } from "./../dtos/error.response.dto";

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
    const errorData: ErrorResponseDTO = {
      message: `Error: ${res.statusText}`,
      statusCode: res.status,
    };
    return errorData;
  }

  const data = await res.json();
  return data;
};

export const createClient = async (clientData: Costumer) => {
  await fetch("http://localhost:8080/client", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clientData),
  });

  return;
};
