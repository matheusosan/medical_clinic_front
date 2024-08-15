import { AppointmentSchema } from "./../../pages/Agendamento/schemas/appointment.schema";

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

export const fetchOccupiedTimes = async (
  dateInput: string,
  specialityInput: string
) => {
  const response = await fetch(
    `http://localhost:8080/appointment/date?date=${dateInput}&serviceId=${specialityInput}`
  );
  const data = await response.json();

  return data.map((appointment: { dataAgendada: string }) =>
    appointment.dataAgendada.substring(11, 16)
  );
};
