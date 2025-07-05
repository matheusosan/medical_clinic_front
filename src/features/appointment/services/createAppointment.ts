import { ApiResponseDto } from "@/src/domain/dtos/ApiResponseDto";
import { AppointmentSchema } from "../hooks/useAppointment";
import { getToken } from "./../../../utils/token-util";

export const createAppointment = async (
  formData: AppointmentSchema,
  clientId: string
): Promise<ApiResponseDto<unknown>> => {
  const requestBody = {
    dataAgendada: `${formData.selectedDate}T${formData.time}:00.123Z`,
    serviceId: formData.speciality,
    clientId: clientId,
  };

  const token = getToken();

  if (!token) {
    throw new Error("Token não encontrado");
  }

  const data = await fetch(`${import.meta.env.VITE_API_URL}appointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestBody),
  });

  return data.json();
};
