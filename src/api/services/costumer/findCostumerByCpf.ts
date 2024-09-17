import { cleanCpf } from "./../../../utils/input-masks";

export const findCostumerByCpf = async (cpf: string) => {
  const cpfValue = cleanCpf(cpf);

  const res = await fetch(`http://localhost:8080/client/cpf/${cpfValue}`);
  if (!res.ok) {
    throw new Error("Client not found");
  }

  return res.json();
};
