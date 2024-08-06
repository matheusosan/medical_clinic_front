export interface Costumer {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  birthDate: string;
}

export const findCostumerByCpf = async (cpf: string): Promise<Costumer> => {
  const res = await fetch(`http://localhost:8080/client/cpf/${cpf}`);
  const data = await res.json();
  return data;
};

export const createClient = async (clientData: Costumer) => {
  const res = await fetch("http://localhost:8080/client", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clientData),
  });

  const data = res.json();
  return data;
};
