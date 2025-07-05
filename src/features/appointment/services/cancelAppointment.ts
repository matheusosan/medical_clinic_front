import { ApiResponseDto } from "../../../domain/dtos/ApiResponseDto";
import { getToken } from "./../../../utils/token-util";

export const cancelAppointment = async (
  appointmentId: string
): Promise<ApiResponseDto<unknown>> => {
  const token = getToken();

  if (!token) {
    throw new Error("Token não encontrado");
  }

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}appointment/cancel/${appointmentId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
};
