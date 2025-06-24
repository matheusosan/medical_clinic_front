import { AppointmentSchema } from "../hooks/useAppointment";

export const createAppointment = async (
  formData: AppointmentSchema,
  clientId: number
): Promise<Response> => {
  const requestBody = {
    dataAgendada: `${formData.selectedDate}T${formData.time}:00.123Z`,
    specialityId: formData.speciality,
    clientId: clientId,
  };

  return await fetch(`${import.meta.env.VITE_API_URL}appointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
};
