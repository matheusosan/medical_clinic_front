export const fetchOccupiedTimes = async (
  dateInput: string,
  specialityInput: string
) => {
  const response = await fetch(
    `http://localhost:8080/appointment/date?date=${dateInput}&serviceId=${specialityInput}`
  );
  const data = await response.json();

  const horario = data.map((appointment: { dataAgendada: string }) =>
    appointment.dataAgendada.substring(11, 16)
  );
  console.log(horario);
  return horario;
};
