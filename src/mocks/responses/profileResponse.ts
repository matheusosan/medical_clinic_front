export const profileResponse = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phoneNumber: "123456789",
  cpf: "123.456.789-00",
  birthDate: "1990-01-01",
  role: "USER",
};

export const profileAppointmentsResponse = [
  {
    id: "3",
    dataAgendada: "2024-11-22",
    status: "SCHEDULED",
    service: {
      id: "3",
      name: "Radiologia",
      price: 89.9,
    },
  },
  {
    id: "2",
    dataAgendada: "2024-12-24",
    status: "CANCELED",
    service: {
      id: "2",
      name: "Odontologia",
      price: 109.9,
    },
  },
  {
    id: "1",
    dataAgendada: "2024-12-12",
    status: "SCHEDULED",
    service: {
      id: "1",
      name: "Dermatologia",
      price: 99.9,
    },
  },
];
