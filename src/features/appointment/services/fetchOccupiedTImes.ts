export const fetchOccupiedTimes = async (
  dateInput: string,
  specialityInput: string
) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }appointment/date?date=${dateInput}&serviceId=${specialityInput}`
  );
  const data = await response.json();

  const horario = data.map((appointment: { dataAgendada: string }) =>
    appointment.dataAgendada.substring(11, 16)
  );
  console.log(horario);
  return horario;
};
