import { AppointmentSchema } from "./../../../pages/Agendamento/index";

export const createAppointment = async (
  formData: AppointmentSchema,
  clientId: number
): Promise<Response> => {
  const requestBody = {
    dataAgendada: `${formData.selectedDate}T${formData.time}:00.123Z`,
    serviceId: formData.speciality,
    clientId: clientId,
  };

  return await fetch(`http://localhost:8080/appointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
};
