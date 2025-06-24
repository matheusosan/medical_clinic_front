import { getToken } from "../../../utils/token-util";

export const getAllAppointmentsByClient = async (
  userId: number,
  sortBy: string
) => {
  const token = getToken();

  if (!token) {
    throw new Error("Token não encontrado");
  }
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/appointment/client/${userId}?sortBy=${sortBy}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
};
