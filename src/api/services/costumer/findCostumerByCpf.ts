export const findCostumerByCpf = async (cpf: string) => {
  const res = await fetch(`http://localhost:8080/client/cpf/${cpf}`);
  if (!res.ok) {
    throw new Error("Client not found");
  }

  return res.json();
};
