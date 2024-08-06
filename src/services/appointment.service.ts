export interface Appointment {
  selectedDate: string;
  selectedHour: string;
  serviceId: number;
  clientId: number;
}

export const createAppointment = async ({
  selectedDate,
  selectedHour,
  serviceId,
  clientId,
}: Appointment): Promise<string> => {
  const requestBody = {
    dataAgendada: `${selectedDate}T${selectedHour}:00.123Z`,
    serviceId,
    clientId,
  };

  const res = await fetch(`http://localhost:8080/appointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  const data = await res.text();
  console.log(data);
  return data;
};
