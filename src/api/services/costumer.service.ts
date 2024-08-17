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
