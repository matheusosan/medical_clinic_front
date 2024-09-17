import { getToken } from "./../../../utils/token-util";

export const getAllAppointmentsByClient = async (
  userId: number,
  sortBy: string
) => {
  const token = getToken();

  if (!token) {
    throw new Error("Token não encontrado");
  }
  const response = await fetch(
    `http://localhost:8080/appointment/client/${userId}?sortBy=${sortBy}`,
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
