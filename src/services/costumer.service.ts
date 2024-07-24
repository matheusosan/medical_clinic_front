export interface Costumer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
}

export const findCostumerByCpf = async (cpf: string): Promise<Costumer> => {
  const res = await fetch(`http://localhost:8080/client/cpf/${cpf}`);
  const data = await res.json();
  return data;
};
