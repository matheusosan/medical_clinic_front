export interface Service {
  id: number;
  name: string;
  price: number;
}

export const getAllServices = async (): Promise<Service[]> => {
  const res = await fetch("http://localhost:8080/service");
  const data = await res.json();
  return data;
};
