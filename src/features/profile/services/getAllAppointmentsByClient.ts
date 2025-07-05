import { getToken } from "../../../utils/token-util";
import { ApiResponseDto } from "./../../../domain/dtos/ApiResponseDto";
import { Appointment } from "./../../../domain/dtos/appointments/AppointmentResponseDTO";

export const getAllAppointmentsByClient = async (
  userId: string,
  sortBy: string
): Promise<ApiResponseDto<Appointment[]>> => {
  const token = getToken();

  if (!token) {
    throw new Error("Token não encontrado");
  }
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }appointment/client/${userId}?sortBy=${sortBy}`,
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
