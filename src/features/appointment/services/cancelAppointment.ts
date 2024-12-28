export const cancelAppointment = async (
  appointmentId: number
): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `http://localhost:8080/appointment/cancel/${appointmentId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao cancelar o agendamento");
  }
};
