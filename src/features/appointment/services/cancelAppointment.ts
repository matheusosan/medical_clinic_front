export const cancelAppointment = async (
  appointmentId: number
): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}appointment/cancel/${appointmentId}`,
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
