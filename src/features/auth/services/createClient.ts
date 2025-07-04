import { cleanCpf } from "../../../utils/formatters/input-masks";
export interface Costumer {
  id?: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  cpf: string;
  birthDate: string;
  role?: string;
}

export const createClient = async (clientData: Costumer) => {
  const cleanClientData: Costumer = {
    ...clientData,
    cpf: cleanCpf(clientData.cpf),
    role: "USER",
  };

  return await fetch(`${import.meta.env.VITE_API_URL}client`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cleanClientData),
  });
};
