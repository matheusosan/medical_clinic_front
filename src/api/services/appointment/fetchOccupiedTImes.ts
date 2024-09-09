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
