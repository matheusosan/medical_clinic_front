import Cookies from "js-cookie";

export const getAllAppointmentsByClient = async (
  userId: number,
  sortBy: string
) => {
  const token = Cookies.get("access_token");

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
