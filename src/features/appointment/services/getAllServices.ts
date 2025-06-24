export interface Service {
  id: number;
  name: string;
  price: number;
}

export const getAllServices = async (): Promise<Service[]> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}service`);
  const data = await res.json();
  return data;
};
