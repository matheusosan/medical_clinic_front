import { cleanCpf } from "../../../utils/formatters/input-masks";

export const findCostumerByCpf = async (cpf: string) => {
  const cpfValue = cleanCpf(cpf);

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}client/cpf/${cpfValue}`
  );
  if (!res.ok) {
    throw new Error("Client not found");
  }

  return res.json();
};
