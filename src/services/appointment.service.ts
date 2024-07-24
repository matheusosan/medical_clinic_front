export const createAppointment = async (
  dataAgendada,
  serviceId,
  clientId
): Promise<string> => {
  const requestBody = {
    dataAgendada,
    serviceId,
    clientId,
  };

  const res = await fetch(`http://localhost:8080/appointment`, {
    method: "POST",
    body: requestBody,
  });
  const data = await res.json();
  return data;
};
